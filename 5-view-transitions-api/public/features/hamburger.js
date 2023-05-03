export default function hamburger() {
  document.querySelector("#hamburger").addEventListener("click", () => {
    const nav = document.querySelector("nav")
    const navUL = document.querySelector("nav ul")
    const screenH = window.innerHeight

    if (nav.style.display === "flex") {
      navUL.style.height = "0px"
      navUL.style.fontSize = "initial"
      setTimeout(() => {
        nav.style.display = "none"
      }, 480)
    } else {
      nav.style.display = "flex"
      setTimeout(() => {
        navUL.style.height = screenH + "px"
        navUL.style.fontSize = "2rem"
      }, 10)
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        nav.style.display = "flex"
        navUL.style.height = "initial"
        navUL.style.fontSize = "initial"
      } else {
        nav.style.display = "none"
        navUL.style.height = "0px"
        navUL.style.fontSize = "initial"
      }
    })
  })
}
