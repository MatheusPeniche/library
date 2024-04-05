

const TaskRepository = require("../repositories/taskRepository/TaskRepository")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")
const TaskListByIdService = require("../services/TaskServices/TaskListByIdService")
const TaskUpdateService = require("../services/TaskServices/TaskUpdateService")
//const TaskDeleteService = require("../services/TaskServices/"


const taskRepository = new TaskRepository()

const taskCreatedService = new TaskCreateService(taskRepository)
const taskListService = new TaskListService(taskRepository)
const taskListByIdService = new TaskListByIdService(taskRepository)
const taskUpdateService = new TaskUpdateService(taskRepository)
/* const taskDeleteService = new TaskDeleteService(taskRepository)  */

class TaskControllers {
    //asyn significa assincrona, algo que acontece depois
    async createTask(req, res) {
        const {user_id} = req.params
        const {title, description} = req.body;

        await taskCreatedService.execute({title,description,user_id})

        return res.status(201).json("Tarefa criada com sucesso")
    }
    //Lista tarefa
    async listTask(req,res) {
        //query - quer dizer "consulta"
        const tasks = await taskListService.execute()
       

       return res.status(200).json(tasks)
    }
            async ListTaskById(req,res) {
                const {id} = req.params
               const tasks = await taskListByIdService.execute({id})

                return res.status(200).json(tasks)
            }
            async updateTask(req, res) {
                const {id} = req.params
                const{title,description} = req.body
                
                await taskUpdateService.execute({id, title, description})
              
               return res.status(200).json("Livro atualizado com sucesso!")
            }
            async deleteTask(req, res) {
                const {id} = req.params

                await taskDeleteService.execute("tasks").where({id}).delete()
                return res.status(200).json("Registro deletado com sucesso!")
            }
}

module.exports = TaskControllers