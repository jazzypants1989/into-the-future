import Router from "./components/Router.js"
import { searchListener } from "./features/search.js"
import themeListener from "./features/theme.js"
import updateCart from "./features/cart.js"

updateCart()

themeListener()

searchListener()

Router()
