

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Users", {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName:{
        type: DataTypes.STRING,
        allowNull: false
      },
      
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("Users");
  }
};