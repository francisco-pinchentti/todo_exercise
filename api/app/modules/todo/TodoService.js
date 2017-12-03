const _ = require('lodash');

class TodoService {

    constructor (todoModel) {
        this.todoModel = todoModel;
    }

    list (query) {
        query.findAll.attributes = [ 'id', 'title', 'description', 'done', 'dueDate' ];
        return this.todoModel.findAll(query.findAll);
    }

    create (newTodoData) {
        return this.todoModel.build(newTodoData).save();
    }

    update (id, updatedTodoItem) {
        return this.todoModel
            .findOne({ where: {id: id } })
            .then( (todoItem) => {
                return todoItem.update({
                    title:  updatedTodoItem.title,
                    description:  updatedTodoItem.description,
                    dueDate:  updatedTodoItem.dueDate,
                    done:  updatedTodoItem.done
                }) ;
            });
    }

    'delete' (id) {
        return this.todoModel
            .findOne({ where: {id: id } })
            .then( (todoItem) => todoItem.destroy() );
    }
}

module.exports = TodoService;
