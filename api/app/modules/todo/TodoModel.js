module.exports = function (sequelize, DataTypes) {

	let TodoModel = sequelize.define('todo', {
        title: DataTypes.STRING,
		description: DataTypes.STRING,
        dueDate: DataTypes.DATEONLY,
        done: DataTypes.BOOLEAN
	});

	return TodoModel;

};
