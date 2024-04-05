const TaskRepositoryInMemory = require("../../repositories/taskRepository/taskRepositoryInMemory")
const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")
const TaskCreateService = require("../../services/TaskServices/TaskCreateService")
const UserCreatedService = require("../../services/UserServices/UserCreateService")

describe("TaskCreateService", () => {
    let taskRepository = null 
    let taskCreateService = null

    let userRepository = null
    let userCreateService = null
    
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreatedService(userRepository)
        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)

    })
    
    it("user should be create a new task", async () => {
        const user1 = {
            title: "meu patinho feio",
            description: "horror",
            password: "0123"
        }
        const userCreated = await userCreateService.execute(user1);
        //console.log(userCreated);


        const user2 = {
            title: "Testando api com Jest",
            describe: "Elaborar teste unitários na aplicação",
            user_id: userCreated.user_id
        }


        const taskCreated = await taskCreateService.execute(user2)

        expect(taskCreated).toHaveProperty("user_id", userCreated.user_id)
       
    })
})