const {Router} = require("express")
const TasksControllers = require("../controllers/TaskControllers")
const checkTasksExists = require("../middlewares/checkTasksExists");

const taskRoutes = Router();
const taskControllers = new TasksControllers();

//-------------------------------------------------------------------------------------

//post = criando uma tarefa nova
taskRoutes.post("/tasks/:user_id", taskControllers.createTask);
//recebe informação ( o de baixo )
taskRoutes.get("/tasks", taskControllers.listTask);

taskRoutes.get("/tasks/:id", checkTasksExists,taskControllers.ListTaskById)

taskRoutes.put("/tasks/:id", checkTasksExists,taskControllers.updateTask)
//taskRoutes.patch("/tasks/status/:id",checkTasksExists,taskControllers.updateTaskStatus)

taskRoutes.delete("/tasks/:id", checkTasksExists,taskControllers.deleteTask)


module.exports = taskRoutes;