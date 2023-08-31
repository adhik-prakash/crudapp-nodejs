'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Contacts", {
      id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      currentAddress: {
        type:Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      permanentAddress: {
        type:Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type:Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type:Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.dropTable("Contacts")

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
