import render from "../components/render"
import renderCalendar from "../features/calendar"

export default async function Events() {
  render({
    component: `
    <h1>Things that are actually happening at our REAL store</h1>
    <div id="calendar"></div>
    <ul id="events-list"></ul>
  `,
    callback: renderCalendar,
  })
}
