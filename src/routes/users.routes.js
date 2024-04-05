const {Router} = require("express")
const UserController = require("../controllers/UserController");
const checkUserExists = require("../middlewares/checkUsersExists");
const userController = new UserController()

const userRoutes = Router();
userRoutes.post("/users",userController.createUser);
//recebe informação ( o de baixo )
userRoutes.get("/users",userController.listUser);
userRoutes.get("/users/:user_id",checkUserExists, userController.ListUserById);

userRoutes.put("/users/:user_id", checkUserExists, userController.updateUser);
userRoutes.patch("/users/status/:user_id", checkUserExists,userController.updateUserAdmin);

userRoutes.delete("/users/:user_id", checkUserExists, userController.deleteUser);

module.exports = userRoutes;