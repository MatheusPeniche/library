//nome da classe
const knex = require("../database/knex");
const UserRepository = require("../repositories/userRepository/userRepository");
const UserUpdateService = require("../services/UserServices/UserUpdateService");
const UserCreateService = require("../services/UserServices/UserCreateService");
const UserListById = require("../services/UserServices/UserListByIdService");
const UserListService = require("../services/UserServices/UserListService");
const UserDeleteService = require("../services/UserServices/UserdeleteService");


const userRepository = new UserRepository()

const userCreateService = new UserCreateService(userRepository)
const userListService = new UserListService(userRepository)
const userListByIdService = new UserListById(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
const userDeleteService = new UserDeleteService(userRepository)

class UserController {
    //asyn significa assincrona, algo que acontece depois
    async createUser(req, res) {
        const {name, email, password} = req.body;
      
            await userCreateService.execute({name,email,password})
            
            return res.status(201).json("Usuário cadastrado com sucesso!")
    
}
    //Lista usuário
    async listUser(req,res) {
        //query - quer dizer consulta, await - significa guarde, pool - é o arquivo passado anteriormente
        const users = await userListService.execute()
            
        return res.status(200).json(users)
    }
    // selecionar usuário específico pelo id
            async ListUserById(req,res) {
                const {user_id} = req.params
               const users = await userListByIdService.execute({user_id})

                return res.status(200).json(users)

                                   
            }
            //atualizar dados do usuário
            async updateUser(req, res) {
                const {user_id} = req.params
                const{name,email} = req.body
                
                await userUpdateService.execute({user_id, name, email})
              
               return res.status(200).json("Usuário atualizado com sucesso!")
            }
            //atualizar admin do usuário
            async updateUserAdmin(req, res) {
                const {id} = req.params

                await knex("users").where({id}).update({isAdmin: true})
                return res.status(200).json("Usuário agora é um administrador")
            }
            //deletando usuário
            async deleteUser(req, res) {
                const {user_id} = req.params

                await userDeleteService.execute({user_id})
                return res.status(200).json("Registro deletado com sucesso!")
            }
}

module.exports = UserController