<template>
	<n-drawer :show="show" :width="500" class="fullcalendar-drawer" @update:show="val => emit('update:show', val)">
		<n-drawer-content :title="event?.id ? 'Edit event' : 'Add event'" closable>
			<n-form v-if="event" ref="refForm" :label-width="80" :model="event" :rules="formRules">
				<n-form-item label="Title" path="title">
					<n-input v-model:value="event.title" placeholder="Event Title" />
				</n-form-item>

				<div class="flex flex-col justify-between sm:flex-row">
					<n-form-item label="Start" path="start">
						<n-date-picker
							v-model:value="event.start"
							class="w-full"
							:type="event.allDay ? 'date' : 'datetime'"
						/>
					</n-form-item>
					<n-form-item label="End" path="end">
						<n-date-picker
							v-model:value="event.end"
							class="w-full"
							:type="event.allDay ? 'date' : 'datetime'"
						/>
					</n-form-item>
				</div>

				<n-form-item label="All Day" path="allDay">
					<n-switch v-model:value="event.allDay" />
				</n-form-item>

				<n-form-item label="Excursión" path="excursionId">
					<n-select
						v-model:value="event.excursionId"
						:options="excursionOptions"
						label-field="label"
						value-field="value"
						placeholder="Seleccionar excursión"
					/>
				</n-form-item>

				<div class="flex items-center justify-end gap-3">
					<n-form-item v-if="event?.id">
						<n-popconfirm @positive-click="deleteEvent">
							<template #trigger>
								<n-button>Delete Event</n-button>
							</template>
							¿Seguro querés eliminar el evento?
						</n-popconfirm>
					</n-form-item>
					<n-form-item>
						<n-button type="primary" @click="handleSubmit">Guardar</n-button>
					</n-form-item>
				</div>
			</n-form>
		</n-drawer-content>
	</n-drawer>
</template>

<script setup lang="ts">
import {
  NButton,
  NDatePicker,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NInput,
  NPopconfirm,
  NSelect,
  NSwitch,
  useMessage
} from 'naive-ui'
import { onMounted, ref, toRefs, watch } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:show', 'submitEvent', 'deleteEvent'])

const { event, show } = toRefs(props)
const refForm = ref()
const message = useMessage()
const excursionOptions = ref([])

onMounted(async () => {
  const token = localStorage.getItem('auth_token')
  if (!token) return

  try {
    const res = await $fetch('https://admin.triplotrip.com/api/excursiones', {
      headers: { Authorization: `Bearer ${token}` }
    })
    excursionOptions.value = res.data.map((exc) => ({
      label: exc.Nombre,
      value: exc.documentId
    }))
  } catch (error) {
    console.error('Error al cargar excursiones', error)
  }
})

watch(
  event,
  (val) => {
    if (!val) return
    // Convierte start y end a Date si vienen como string
    if (val.start && typeof val.start === 'string') val.start = new Date(val.start)
    if (val.end && typeof val.end === 'string') val.end = new Date(val.end)
    // Setea excursionId
    if (val.excursion) {
      val.excursionId = val.excursion.documentId
    } else {
      val.excursionId = null
    }
  },
  { immediate: true }
)

const formRules = {
  title: { required: true, message: 'Por favor ingresá un título', trigger: 'blur' },
  start: { required: true, message: 'Fecha inicio requerida', trigger: 'blur' },
  end: { required: true, message: 'Fecha fin requerida', trigger: 'blur' }
}

async function handleSubmit() {
  await refForm.value?.validate()
  try {
    const token = localStorage.getItem('auth_token')
    if (!token) throw new Error('No token')

    // Obtener usuario logueado
    const user = await $fetch('https://admin.triplotrip.com/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    })

    const payload = {
      data: {
        Title: event.value.title,
        Start: new Date(event.value.start).toISOString(),
        End: new Date(event.value.end).toISOString(),
        AllDay: event.value.allDay || false,
        user: { connect: [{ documentId: user.documentId }] },
        excursion: event.value.excursionId
          ? { connect: [{ documentId: event.value.excursionId }] }
          : null
      }
    }

    if (event.value.id) {
      await $fetch(`https://admin.triplotrip.com/api/events/${event.value.id}`, {
        method: 'PUT',
        body: payload,
        headers: { Authorization: `Bearer ${token}` }
      })
    } else {
      await $fetch('https://admin.triplotrip.com/api/events', {
        method: 'POST',
        body: payload,
        headers: { Authorization: `Bearer ${token}` }
      })
    }

    message.success('Evento guardado con éxito')
    emit('submitEvent')
    emit('update:show', false)
  } catch (error) {
    console.error('Error guardando evento:', error)
    message.error('Error al guardar el evento')
  }
}

function deleteEvent() {
  emit('deleteEvent')
  emit('update:show', false)
}
</script>

<style scoped>
.fullcalendar-drawer {
  max-width: 100%;
}
</style>
