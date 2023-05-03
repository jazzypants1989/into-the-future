import Router from "./components/Router.js"
import { searchListener } from "./features/search.js"
import themeListener from "./features/theme.js"
import updateCart from "./features/cart.js"
import hamburger from "./features/hamburger.js"

updateCart()

themeListener()

searchListener()

hamburger()

Router()
