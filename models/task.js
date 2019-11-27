module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Task;
};
