import Router from "./components/Router"
import { searchListener } from "./features/search"
import themeListener from "./features/theme"
import updateCart from "./features/cart"
import hamburger from "./features/hamburger"

import "./style.css"

updateCart()

themeListener()

searchListener()

hamburger()

Router()
