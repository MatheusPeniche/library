const knex = require("../../database/knex")

class TaskRepository {
    async createTask({ title, description, user_id }) {
        
        const taskId = await  knex("tasks").insert({title,description,user_id});
        return {id: taskId}
    }
    async listTask() {
        const tasks = await knex("tasks")

        return tasks
    }
    async listTaskById({id}) {
        const tasks = await knex("tasks").where({id})

        return tasks
    }
    async updateTask({id,title,description}){
        const task = await knex("tasks").where({id})

        task.title = title ?? task.title
        task.description = description ?? task.description

        await knex("tasks").where({id}).update({title: task.title, description: task.description})

        return task
    }
}

module.exports = TaskRepository