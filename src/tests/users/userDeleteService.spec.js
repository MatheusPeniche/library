const UserRepositoryInMemory = require("../../repositories/userRepository/userRepositoryInMemory")
const UserCreateService = require("../../services/UserServices/UserCreateService")
const UserListService = require("../../services/UserServices/UserListService")
const UserDeleteService = require("../../services/UserServices/UserdeleteService")
describe("UserDeleteService", () => {
    let userRepository = null 
    let userCreateService = null
    let userDeleteService = null
    let userListService = null
    
    it(" should be possible delete an users", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)


        const user1 = {
            name: "user test 1",
            email: "user1@test.com",
            password: "0123"
        }
        const user2 = {
            name: "user test 2",
            email: "user2@test.com",
            password: "9847"
        }


         await userCreateService.execute(user1)
         await userDeleteService.execute(user2)

        const users = await userDeleteService.execute(user1)
        expect(users).toHaveLength(0)
                
    })
    it("user should be possible delete an specific user", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userListService = new UserListService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)


        const user1 = {
            name: "user test 1",
            email: "user1@test.com",
            password: "0123"
        }
        const user2 = {
            name: "user test 2",
            email: "user2@test.com",
            password: "9847"
        }
            const firstUser = await userCreateService.execute(user1)
            const secondUser = await userCreateService.execute(user2)

            const list = await userListService.execute()

            await userDeleteService.execute(firstUser)
            expect(list).not.toHaveProperty("name", "user test 1")
            
    })
})