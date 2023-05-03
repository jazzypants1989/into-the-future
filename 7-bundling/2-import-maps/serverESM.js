import express from "express"
import path from "path"
import fs from "fs"
import Stripe from "stripe"

const app = express()

app.use(express.static("public"))
app.use(express.json())

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001")
  next()
})

// ENV
const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)
const envFile = path.join(__dirname, ".env")
const envContents = fs.readFileSync(envFile, "utf-8")
const secrets = {}
envContents.split("\r\n").forEach((line) => {
  const [key, value] = line.split("=")
  secrets[key] = value
})
const { STRIPE_SECRET_KEY } = secrets

const stripe = new Stripe(STRIPE_SECRET_KEY)

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.line_items,
    mode: "payment",
    success_url: "http://localhost:3001/success",
    cancel_url: "http://localhost:3001",
  })

  console.log("session", session)
  res.json({ session })
})

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(3001, function () {
  console.log("Ctrl-Click here to test: http://localhost:3001")
})
