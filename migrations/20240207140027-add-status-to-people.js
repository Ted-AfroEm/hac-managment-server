"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("people", "status", {
      type: Sequelize.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("people", "status");
  },
};
