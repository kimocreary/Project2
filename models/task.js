
// Creating our Task model
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    // The email cannot be null, and must be a proper email before creation
    task_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_priority: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      target_date: {
        type: DataTypes.DATE,
        allowNull: true        
      },
      developer_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      developer_notes: {
        type: DataTypes.STRING,
        allowNull: true
      },
      developer_duedate: {
        type: DataTypes.DATE,
        allowNull: true
      },
      completion_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
  }, {
    timestamps: false
  });
  return Task;
};
