const { postUserController } = require("../controllers/postUserController");

const postUserHandler = async (req, res) => {
  try {
    const dataUserBody = {name:"prueba",lastName:"prueba", country:"Colombia",age:20, tel:"31546456",email:"prueba4@gmail.com",password:"123456",status:"admin" };
    
    const result = await postUserController(dataUserBody);
    if (result === "Account already exists")
      return res
        .status(409)
        .json({ message: "Account already exists", data: result });
    return res
      .status(201)
      .json({ message: "User successfully created", data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
};
