const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")
const TaskRepositoryInMemory = require("../../repositories/taskRepository/taskRepositoryInMemory")

const UserCreatedService = require("../../services/UserServices/UserCreateService")

const TaskCreateService = require("../../services/TaskServices/TaskCreateService")
const TaskUpdateService = require("../../services/TaskServices/TaskUpdateService")


describe("TaskUpdateService", () => {
    let taskRepository = null 
    let taskCreateService = null

    let userRepository = null
    let userCreateService = null

    let taskUpdateService = null
    
    
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreatedService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new TaskUpdateService(taskRepository)

    })
    it("user should be update a new task", async () => {
        const user = {
            nome: "Rodry",
            email: "user@gmail.com",
            password: "3579"
        }
        const userCreated = await userCreateService.execute(user)

        const task1 = {
            title: "carro f1",
            description: "ação",
            user_id: userCreated.user_id
        }
        const taskCreated = await taskCreateService.execute(task1)

        taskCreated.title = "mat",
        taskCreated.description = "777"

        //console.log(taskCreated)
        const taskUpdated = await taskUpdateService.execute(taskCreated)
        expect(taskUpdated).toHaveProperty("title", "mat")
    })
})
    