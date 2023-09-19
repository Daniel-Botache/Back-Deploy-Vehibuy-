const mercadopago = require("mercadopago");

function createPreference(req, res) {
  try {
    const items = req.body.items; // Recibe los elementos del carrito desde el cuerpo de la solicitud
    const preference = {
      items: items.map((item) => ({
        title: item.title,
        unit_price: item.unit_price,
        quantity: item.quantity,
      })),
      back_urls: {
        success: "https://vehibuy-rho.vercel.app/home",
        failure: "https://vehibuy-rho.vercel.app/cart",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
          status: "approved",
        });
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create preference" });
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Bad request" });
  }
}

module.exports = { createPreference };
