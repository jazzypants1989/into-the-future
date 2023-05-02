function themeListener() {
  const themeCheck = localStorage.getItem("theme") || "dark"
  const toggleTheme = document.querySelector("#toggleTheme")

  themeCheck
    ? (document.body.className = themeCheck)
    : (document.body.className = "dark")

  console.log("document.body.className", document.body.className)
  console.log("Theme listener loaded, theme is", themeCheck)

  toggleTheme.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("theme") || "dark"
    const newTheme =
      currentTheme === "dark"
        ? "purple"
        : currentTheme === "purple"
        ? "green"
        : "dark"
    localStorage.setItem("theme", newTheme)
    document.body.className = newTheme
  })
}
