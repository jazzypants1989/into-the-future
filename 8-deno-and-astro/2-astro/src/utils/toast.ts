/**
 * The array of toasts.
 * @type {toast[]}
 */
let toasts = [] as toast[]
let toastCount = 0

const toastContainer = document.querySelector("#toast-container") as HTMLElement

type toast = {
  id: string
  message: string
  options?: toastOptions
}

type toastOptions = {
  duration?: number
  type?: string
}

export function addToast(message: string, options?: toastOptions) {
  const id = `toast-${toastCount++}`
  if (!options) options = {}
  const newToast = {
    id,
    message,
    options,
  }
  toasts.push(newToast)

  const duration = options?.duration ?? 3000

  setTimeout(() => {
    removeToast(id)
  }, duration)

  if (!toastContainer) return id

  toastContainer.appendChild(ToastComponent(newToast))

  return id
}

function removeToast(id: string) {
  const toast = document.querySelector(`#${id}`)
  if (!toast || !(toast instanceof HTMLElement)) return
  toast.classList.add("toast-out")
  toast.addEventListener("animationend", () => {
    toasts = toasts.filter((thisToast) => thisToast.id !== id)
    toast.remove()
  })
}

function ToastComponent({ id, message, options }: toast) {
  // Create a div and set the class, id, and aria attributes
  const toast = document.createElement("div")
  const type = options?.type
  toast.classList.add("toast")
  toast.id = id
  type && toast.classList.add(type)
  toast.setAttribute("role", "alert")
  toast.setAttribute("aria-live", "assertive")
  toast.setAttribute("aria-atomic", "true")

  // Set the innerHTML of the toast
  toast.innerHTML = `
    <div class="toast-header">
        ${type === "success" ? "Hooray!" : "Aww, shucks!"}
    </div>
    <div class="toast-body">
        ${message}
    </div>
    `

  // Create a close button, add the event listener, and add it to the toast
  const closeBtn = document.createElement("button")
  closeBtn.textContent = "X"
  closeBtn.addEventListener("click", () => {
    removeToast(id)
  })
  toast.appendChild(closeBtn)
  return toast
}
