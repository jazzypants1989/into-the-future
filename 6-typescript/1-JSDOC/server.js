import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.post("/checkout", function (req, res) {
  const data = req.body
  const decodedCart = decodeURIComponent(data.cart)
  const parsedCart = JSON.parse(decodedCart)
  const { name, email, address, city, creditCard, cvv } = data

  if (
    !name ||
    !email ||
    !address ||
    !city ||
    !creditCard ||
    !cvv ||
    !Object.keys(parsedCart).length
  ) {
    const params = new URLSearchParams()
    const error = "Please fill out all fields. Ya dingus."
    params.append("error", error)

    res.status(200).redirect("/checkout" + "?" + params.toString())
    return
  }

  const params = new URLSearchParams()
  params.append("name", name)
  params.append(
    "total",
    Object.values(parsedCart).reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  )
  params.append("address", address)

  setTimeout(() => {
    res.status(200).redirect("/success" + "?" + params.toString())
  }, 1500)
})

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3001, function () {
  console.log("Ctrl-Click here to test: http://localhost:3001")
})
