themeListener()

searchListener()

updateCart()

let urlParams = new URLSearchParams(location.search)
if (urlParams.has("search")) {
  urlSearchHandler()
} else {
  Router(location.pathname)
}
