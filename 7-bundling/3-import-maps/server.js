const express = require("express") // import Express
const path = require("path") // import path from "path"
const fs = require("fs") // import fs from "fs"

app = express() // Start it up

app.use(express.static("public")) // tell it where our static assets will live.

app.use(express.json()) // allow it to parse JSON requests

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001")
  next()
})

// ENV
const envFile = path.join(__dirname, ".env")
const envContents = fs.existsSync(envFile) && fs.readFileSync(envFile, "utf8")
const secrets = {}
envContents.length &&
  envContents.split("\r\n").forEach((line) => {
    const [key, value] = line.split("=")
    secrets[key] = value
  })
// const { STRIPE_SECRET_KEY } = secrets
let { STRIPE_SECRET_KEY } = secrets

if (!STRIPE_SECRET_KEY) {
  // throw new Error("No STRIPE_SECRET_KEY in .env file")
  console.error("No STRIPE_SECRET_KEY in .env file")
  STRIPE_SECRET_KEY =
    "This won't work. Create a .env file with a STRIPE_SECRET_KEY"
}

const stripe = require("stripe")(STRIPE_SECRET_KEY)

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
  // THERE CAN ONLY BE ONE (route)!
  res.sendFile(__dirname + "/index.html") // We'll make this file soon.
})

app.listen(3001, function () {
  // the server is now listening for http requests
  console.log("Ctrl-Click here to test: http://localhost:3001")
})
