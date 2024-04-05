class TaskListService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }
    async execute() {
        const taskslist = await this.taskRepository.listTask()
        return taskslist
    }
}

module.exports = TaskListService