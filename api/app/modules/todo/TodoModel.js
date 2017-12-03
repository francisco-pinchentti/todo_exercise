module.exports = function (sequelize, DataTypes) {

	let TodoModel = sequelize.define('todo', {
        title: DataTypes.STRING(32),
		description: DataTypes.STRING(512),
        dueDate: DataTypes.DATEONLY,
        done: DataTypes.BOOLEAN
	});

	return TodoModel;

};
