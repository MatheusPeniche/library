

class TaskUpdateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute({ title, description, id }) {
        const updateTask = await this.taskRepository.updateTask({ title, description, id })
        return updateTask
    }
}
module.exports = TaskUpdateService