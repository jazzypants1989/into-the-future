import render from "render"

/**
 * Success page view template
 * @returns {void}
 */
export default function Success() {
  document.title = "Success" // Set the page title

  render({
    component: `<div>
        <h1>Success</h1>
        <p>Thank you for your purchase!</p>
    </div>`,
  })
}
