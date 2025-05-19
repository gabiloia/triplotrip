// services/eventService.ts
import axios from 'axios'

export async function fetchEventsFromStrapi() {
  const { data } = await axios.get('http://localhost:1337/api/events?populate=*')
  return data.data.map((item: any) => ({
    id: item.documentId,
    title: item.Title,
    start: item.Start,
    end: item.End,
    allDay: item.AllDay,
    extendedProps: {
      calendar: item.Calendar,
      location: item.Location,
      description: item.Description
    }
  }))
}