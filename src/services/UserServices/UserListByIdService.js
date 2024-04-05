class UserListById {
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    async execute({user_id}) {
        const user = await this.userRepository.
        ListUserById({id: user_id})
        return user
    }
}

module.exports = UserListById