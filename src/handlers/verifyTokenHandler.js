const {
  updateUserStatusController,
} = require("../controllers/updateUserStatusController");
const jwt = require("jsonwebtoken");
const { getEmailController } = require("../controllers/getEmailController");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const verifyTokenHandler = async (req, res) => {
  const { token } = req.params;
  try {
    // Verifica el token
    const decoded = jwt.verify(token, "1234");

    // Actualiza el estado del usuario en la base de datos
    const user = await getEmailController(decoded.email);
    if (user) {
      await updateUserStatusController(decoded.email, "verificado");
      res.redirect("https://vehibuy-rho.vercel.app/login");
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.redirect("https://vehibuy-rho.vercel.app/login");
  }
};
module.exports = { verifyTokenHandler };
