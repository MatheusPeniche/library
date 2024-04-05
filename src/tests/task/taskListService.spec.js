const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")
const TaskRepositoryInMemory = require("../../repositories/taskRepository/taskRepositoryInMemory")

const UserCreatedService = require("../../services/UserServices/UserCreateService")

const TaskCreatedService = require("../../services/TaskServices/TaskCreateService")
const TaskListService = require("../../services/TaskServices/TaskListService")


describe("TaskListService", () => {
    let taskRepository = null 
    let taskCreateService = null

    let userRepository = null
    let userCreateService = null

    let taskListService = null
    
    
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreatedService(userRepository)
        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreatedService(taskRepository)
        taskListService = new TaskListService(taskRepository)

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


        await taskCreateService.execute(user1)
        await taskCreateService.execute(user2)

        const list = await taskListService.execute()
        expect(list).toEqual(expect.arrayContaining(list))
       
    })
})
    