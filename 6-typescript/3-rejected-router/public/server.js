import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});
if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key environment variable");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
});
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.line_items,
        mode: "payment",
        success_url: "http://localhost:3001/success",
        cancel_url: "http://localhost:3001",
    });
    console.log("session", session);
    res.json({ session });
});
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3001, function () {
    console.log("Ctrl-Click here to test: http://localhost:3001");
});
