const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")
const UserCreateService = require("../../services/UserServices/UserCreateService")
const UserListService = require("../../services/UserServices/UserListService")
const UserDeleteService = require("../../services/UserServices/UserDeleteService")
describe("UserCreatedService", () => {
    let userRepository = null 
    let userCreateService = null
    let userListService = null
    let userDeleteService = null 
    it("user should be created", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "0123"
        }

        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)

        const userCreated = await userCreateService.execute(user)

        expect(userCreated).toHaveProperty("user_id")
        expect(userCreated).toHaveProperty("name", userCreated.name)
        //expect(userCreated).toHaveProperty("name","user test")
    })
})