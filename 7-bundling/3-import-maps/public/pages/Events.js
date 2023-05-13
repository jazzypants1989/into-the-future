import render from "render"
import createCalendar from "calendar"

export default async function Events() {
  render({
    component: `
    <h1>Things that are actually happening at our REAL store</h1>
    <div id="calendar"></div>
    <ul id="events-list"></ul>
  `,
    callback: createCalendar,
  })
}
