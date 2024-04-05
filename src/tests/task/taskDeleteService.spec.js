const TaskRepositoryInMemory = require("../../repositories/taskRepository/taskRepositoryInMemory")
const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")

const TaskCreateService = require("../../services/TaskServices/TaskCreateService")
const UserCreatedService = require("../../services/UserServices/UserCreateService")
const TaskDeleteService = require("../../services/TaskServices/TaskDeleteService")
const TaskListService = require("../../services/TaskServices/TaskListService")

describe("TaskDeleteService", () => {
    let taskRepository = null;
    let taskCreateService = null;
    let taskListService = null
    let taskDeleteService = null;

    let userRepository = null;
    let userCreateService = null;
    
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreatedService(userRepository)
        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskListService = new TaskListService(taskRepository)
        taskDeleteService = new TaskDeleteService(taskRepository)

    })
    
    it("user should be to delete a task", async () => {
        const user1 = {
            title: "meu patinho feio",
            description: "horror",
            password: "0123"
        }
        const userCreated = await userCreateService.execute(user1);
        


        const user2 = {
            title: "Testando api com Jest",
            describe: "Elaborar teste unitários na aplicação",
            user_id: userCreated.user_id
        }


        const taskCreated = await taskCreateService.execute(user2)
        //console.log(taskCreated)

        await taskDeleteService.execute(user2)
        
        const list = await taskListService.execute()
        //console.log(list)

        expect(list).not.toHaveProperty("title", "Testando api com test")
       
    })
})