import Router from "Router"
import { searchListener } from "search"
import themeListener from "theme"
import updateCart from "cart"

updateCart()

themeListener()

searchListener()

Router()
