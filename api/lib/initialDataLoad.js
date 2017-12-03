module.exports = function (db) {

    db.applicationModels.user.build({
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@doe.com',
        password: '12345'
    }).save();

    db.applicationModels.user.build({
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane@doe.com',
        password: '54321'
    }).save();

    db.applicationModels.setting.build({
        enabled: true
    }).save();

    db.applicationModels.todo.build({
        title: 'my new task',
        done: false,
        description: 'iorem ipsum',
        dueDate: '2017-12-31'
    }).save();

};
