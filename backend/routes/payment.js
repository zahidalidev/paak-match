const express = require("express");

const stripe = require("stripe")(
  "sk_test_51KvhGiGiFJ94VHTI02Wg8SNxzZredPLLzxs2218EpMQQUFjSr4GD4dn9bbsWMHUN6yiUifm7fdkhmXLadj1Br6iP00bRTG5G7p"
);

const router = express.Router();

router.post("/sub", async (req, res) => {
  try {
    const { email, payment_method } = req.body;

    const customer = await stripe.customers.create({
      payment_method: payment_method,
      email: email,
      invoice_settings: {
        default_payment_method: payment_method,
      },
    });

    let subscription;
    subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: "price_1KwQlHGiFJ94VHTILOsNucgb" }],
      expand: ["latest_invoice.payment_intent"],
    });

    const status = subscription["latest_invoice"]["payment_intent"]["status"];
    const client_secret =
      subscription["latest_invoice"]["payment_intent"]["client_secret"];
    const new1 = subscription["latest_invoice"];

    res.json({
      client_secret: client_secret,
      status: status,
      user_sub_id: new1.subscription,
      latest_invoice: subscription["latest_invoice"],
    });
  } catch (error) {
    console.log("ERROR: ", error);
    res.json({ fail: true, error: error });
  }
});

router.delete("/cancel/:subscriptionId", async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const da = await stripe.subscriptions.del(subscriptionId);
    res.send(da);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
