/**
 * @module todo
 */

const TodoService = require('./TodoService');
const TodoController = require('./TodoController');

module.exports = function (db) {
    const todoModel = db.applicationModels.todo;
    const todoService = new TodoService(todoModel);
    const todoController = new TodoController(todoService);
    const todoValidator = require('./TodoValidator');

    return {
        controller: todoController,
        model: todoModel,
        service: todoService,
        validator: todoValidator,
        resourceRoute: '/todos',
        requiresAuth: true
    };
};
