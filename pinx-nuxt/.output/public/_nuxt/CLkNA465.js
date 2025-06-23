import{_ as P}from"./CkQPPryU.js";import{d as B,q as r,af as S,c as U,o as q,a as m,e as l,b as o,_ as C,w as n,u as a,B as w,t as d}from"./8g3bmYip.js";import{N as M}from"./BDy3Za_D.js";import{N as x}from"./DrYmPJu4.js";import{N as p}from"./D2gUfYN4.js";import{N as y}from"./Cb05W4aT.js";import{N as z,a as i}from"./Cb3TDo5Q.js";import{N as f}from"./Ct9BlYQP.js";import"./CiSJ_ReP.js";import"./pFoo6Snw.js";import"./Bk_rJcZu.js";import"./BQBSBRRA.js";import"./DoZ0jqC9.js";import"./DwGgo8Cx.js";const R={class:"page"},F={class:"page-header"},A={class:"links"},E={href:"https://www.naiveui.com/en-US/light/components/form",target:"_blank",alt:"docs",rel:"nofollow noopener noreferrer"},D={class:"components-list"},T={style:{direction:"ltr"}},J="tabler:external-link",te=B({__name:"Form",setup(O){const b=r("medium"),g=r(!1),c=r(!0),h=r("left"),s=r({brandValue:null,modelValue:null}),_=r(null),k=S(),u=r({user:{name:"",age:""},phone:""}),I={user:{name:{required:!0,message:"Please input your name",trigger:"blur"},age:{required:!0,message:"Please input your age",trigger:["input","blur"]}},phone:{required:!0,message:"Please input your number",trigger:["input"]}};function L(N){var e;N.preventDefault(),(e=_.value)==null||e.validate(v=>{v?k.error("Invalid"):k.success("Valid")})}return(N,e)=>{const v=P;return q(),U("div",R,[m("div",F,[e[10]||(e[10]=m("div",{class:"title"},"Form",-1)),m("div",A,[m("a",E,[l(C,{name:J,size:16}),e[9]||(e[9]=o(" docs "))])])]),m("div",D,[l(v,{title:"Label placement"},{code:n(({html:t,js:V})=>[o(d(t(`
					<n-space class="mb-4" align="center">
						<n-radio-group v-model:value="placement" name="placement">
							<n-radio-button value="left"> Left </n-radio-button>
							<n-radio-button value="top"> Top </n-radio-button>
						</n-radio-group>

						<n-radio-group v-model:value="size" name="size">
							<n-radio-button value="small"> Small </n-radio-button>
							<n-radio-button value="medium"> Medium </n-radio-button>
							<n-radio-button value="large"> Large </n-radio-button>
						</n-radio-group>

						<n-checkbox v-model:checked="inline">Inline</n-checkbox>
						<n-checkbox v-model:checked="showLabel">Show Label</n-checkbox>
					</n-space>

					<n-form
						:model
						:label-placement="placement"
						require-mark-placement="right-hanging"
						:size="size"
						:inline="inline"
						:show-label="showLabel"
						label-width="auto"
						:style="{
							maxWidth: '640px'
						}"
					>
						<n-form-item label="Brand" path="brandValue">
							<n-input v-model:value="model.brandValue" placeholder="Brand" />
						</n-form-item>
						<n-form-item label="Model" path="modelValue">
							<n-input v-model:value="model.modelValue" placeholder="Model" />
						</n-form-item>
						<n-form-item>
							<n-button> Validate </n-button>
						</n-form-item>
					</n-form>
					`))+" "+d(V(`
						const size = ref<Size | undefined>("medium")
						const inline = ref(false)
						const showLabel = ref(true)
						const placement = ref<LabelPlacement | undefined>("left")
						const model = ref({
							brandValue: null,
							modelValue: null
						})
						`)),1)]),default:n(()=>[l(a(M),{class:"mb-4",align:"center"},{default:n(()=>[l(a(x),{value:h.value,"onUpdate:value":e[0]||(e[0]=t=>h.value=t),name:"placement"},{default:n(()=>[l(a(p),{value:"left"},{default:n(()=>e[11]||(e[11]=[o(" Left ")])),_:1,__:[11]}),l(a(p),{value:"top"},{default:n(()=>e[12]||(e[12]=[o(" Top ")])),_:1,__:[12]})]),_:1},8,["value"]),l(a(x),{value:b.value,"onUpdate:value":e[1]||(e[1]=t=>b.value=t),name:"size"},{default:n(()=>[l(a(p),{value:"small"},{default:n(()=>e[13]||(e[13]=[o(" Small ")])),_:1,__:[13]}),l(a(p),{value:"medium"},{default:n(()=>e[14]||(e[14]=[o(" Medium ")])),_:1,__:[14]}),l(a(p),{value:"large"},{default:n(()=>e[15]||(e[15]=[o(" Large ")])),_:1,__:[15]})]),_:1},8,["value"]),l(a(y),{checked:g.value,"onUpdate:checked":e[2]||(e[2]=t=>g.value=t)},{default:n(()=>e[16]||(e[16]=[o("Inline")])),_:1,__:[16]},8,["checked"]),l(a(y),{checked:c.value,"onUpdate:checked":e[3]||(e[3]=t=>c.value=t)},{default:n(()=>e[17]||(e[17]=[o("Show Label")])),_:1,__:[17]},8,["checked"])]),_:1}),l(a(z),{model:s.value,"label-placement":h.value,"require-mark-placement":"right-hanging",size:b.value,inline:g.value,"show-label":c.value,"label-width":"auto",style:{maxWidth:"640px"}},{default:n(()=>[l(a(i),{label:"Brand",path:"brandValue"},{default:n(()=>[l(a(f),{value:s.value.brandValue,"onUpdate:value":e[4]||(e[4]=t=>s.value.brandValue=t),placeholder:"Brand"},null,8,["value"])]),_:1}),l(a(i),{label:"Model",path:"modelValue"},{default:n(()=>[l(a(f),{value:s.value.modelValue,"onUpdate:value":e[5]||(e[5]=t=>s.value.modelValue=t),placeholder:"Model"},null,8,["value"])]),_:1}),l(a(i),null,{default:n(()=>[l(a(w),null,{default:n(()=>e[18]||(e[18]=[o(" Validate ")])),_:1,__:[18]})]),_:1})]),_:1},8,["model","label-placement","size","inline","show-label"])]),_:1}),l(v,{title:"Rules"},{code:n(({html:t,js:V})=>[o(d(t(`
					<n-form ref="formRef" inline :label-width="80" :model="formValue" :rules :size="size">
						<n-form-item label="Name" path="user.name">
							<n-input v-model:value="formValue.user.name" placeholder="Input Name" />
						</n-form-item>
						<n-form-item label="Age" path="user.age">
							<n-input v-model:value="formValue.user.age" placeholder="Input Age" />
						</n-form-item>
						<n-form-item label="Phone" path="phone">
							<n-input v-model:value="formValue.phone" placeholder="Phone Number" />
						</n-form-item>
						<n-form-item>
							<n-button @click="handleValidateClick"> Validate </n-button>
						</n-form-item>
					</n-form>

					<pre> {{ JSON.stringify(formValue, null, 2) }} </pre>
					`))+" "+d(V(`
						const formRef = ref<FormInst | null>(null)
						const message = useMessage()

						const formValue = ref({
							user: {
								name: "",
								age: ""
							},
							phone: ""
						})
						const rules = {
							user: {
								name: {
									required: true,
									message: "Please input your name",
									trigger: "blur"
								},
								age: {
									required: true,
									message: "Please input your age",
									trigger: ["input", "blur"]
								}
							},
							phone: {
								required: true,
								message: "Please input your number",
								trigger: ["input"]
							}
						}
						function handleValidateClick(e: MouseEvent) {
							e.preventDefault()
							formRef.value?.validate(errors => {
								if (!errors) {
									message.success("Valid")
								} else {
									console.log(errors)
									message.error("Invalid")
								}
							})
						}
						`)),1)]),default:n(()=>[l(a(z),{ref_key:"formRef",ref:_,inline:"","label-width":80,model:u.value,rules:I},{default:n(()=>[l(a(i),{label:"Name",path:"user.name"},{default:n(()=>[l(a(f),{value:u.value.user.name,"onUpdate:value":e[6]||(e[6]=t=>u.value.user.name=t),placeholder:"Input Name"},null,8,["value"])]),_:1}),l(a(i),{label:"Age",path:"user.age"},{default:n(()=>[l(a(f),{value:u.value.user.age,"onUpdate:value":e[7]||(e[7]=t=>u.value.user.age=t),placeholder:"Input Age"},null,8,["value"])]),_:1}),l(a(i),{label:"Phone",path:"phone"},{default:n(()=>[l(a(f),{value:u.value.phone,"onUpdate:value":e[8]||(e[8]=t=>u.value.phone=t),placeholder:"Phone Number"},null,8,["value"])]),_:1}),l(a(i),null,{default:n(()=>[l(a(w),{onClick:L},{default:n(()=>e[19]||(e[19]=[o(" Validate ")])),_:1,__:[19]})]),_:1})]),_:1},8,["model"]),m("pre",T," "+d(JSON.stringify(u.value,null,2))+" ",1)]),_:1})])])}}});export{te as default};
