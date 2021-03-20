// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51IXAcIE2MMOUDocrQSxEfURlxG8q4wmXf9K1TuhhybfGQgCPlqYVhwOlj0U790biz3CuiMXWu7NT6vEETGg9qH9B00JbayZc4N')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://deishacks.itzsims.repl.co/payment/success.html',
    cancel_url: 'https://deishacks.itzsims.repl.co/payment/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));