// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IudGdSGJJZJojxccIiLekY7ACokCDFc8NJVGa6BhkezGoAL9GS22j4S04nWYvjDNOoyUq5s7RNHQTg6eRua4a1F005S3RNaFB"
);

// API
const PORT = process.env.PORT || 3001;
// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  // OK -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Listen commands
// exports.api = functions.https.onRequest(app);

// Example headpoint
// http://localhost:5001/clone-3bd69/us-central1/api
