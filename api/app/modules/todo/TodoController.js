const Promise = require('bluebird');

class TodoController {

    constructor (todoService) {
        this.todoService = todoService;
    }

    list (request, response) {
        return response.promise(this.todoService.list(request.sequelizeQuery));
    }

    'delete' (request, response) {
        return response.promise(this.todoService.delete(request.params.id));
    }

    create (request, response) {
        return response.promise(this.todoService.create(request.body));
    }

    update (request, response) {
        return response.promise(this.todoService.update(request.params.id, request.body));
    }

}

module.exports = TodoController;
