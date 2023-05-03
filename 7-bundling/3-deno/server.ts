import { serve } from "https://deno.land/std@0.184.0/http/server.ts"
import { load } from "https://deno.land/std@0.184.0/dotenv/mod.ts"
import { serveFile } from "https://deno.land/std@0.184.0/http/file_server.ts"
import assets from "https://deno.land/x/assets@0.0.1/mod.ts"

import Stripe from "https://esm.sh/stripe@12.3.0"

const env = await load()
let STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY

if (!STRIPE_SECRET_KEY) {
  // throw new Error("No Stripe API key found in environment")
  console.error("No Stripe API key found in environment")
  STRIPE_SECRET_KEY =
    "This won't work. Create a .env file with a STRIPE_SECRET_KEY"
}

const stripe = await Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
})

const handler = async (request: Request): Promise<Response> => {
  const SPA = await serveFile(request, "./public/index.html")

  if (request.url.includes(".")) {
    return assets(request, { root: "./public" })
  }

  if (request.method === "POST") {
    const contentType = request.headers.get("content-type")
    if (contentType?.includes("application/json")) {
      const body = await request.json()
      const { line_items } = body
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000",
      })

      return new Response(JSON.stringify({ session }))
    }
  }
  return SPA
}

serve(handler, { port: 3000 })
