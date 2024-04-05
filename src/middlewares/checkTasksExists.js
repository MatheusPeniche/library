const knex = require("../database/knex");


async function checkTasksExists(req, res, next) {
    const {id} = req.params
    const [task] = await knex("tasks").where({id})

// length = existir
    if(!task) {
    return res.status(400).json("tarefa não encontrada!")
    }
    next() 

}

module.exports = checkTasksExists