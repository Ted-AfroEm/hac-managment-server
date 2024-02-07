"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "People",
      [
        {
          id: 1,
          first_name: "John",
          middle_name: "William",
          last_name: "Doe",
          phone_number: "0911000000",
          sex: "M",
          email: "john@example.com",
          date_of_birth: "1989-12-31",
          status: "approved",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: "Jane",
          middle_name: "Elizabeth",
          last_name: "Smith",
          phone_number: "0912000000",
          sex: "F",
          email: "jane@example.com",
          date_of_birth: "1995-05-14",
          status: "approved",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          first_name: "Teddy",
          middle_name: "William",
          last_name: "Doe",
          phone_number: "0913000000",
          sex: "M",
          email: "teddy@example.com",
          date_of_birth: "1990-01-01",
          status: "approved",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          first_name: "Asmerom",
          middle_name: "Kahsu",
          last_name: "Doe",
          phone_number: "0974437960",
          sex: "M",
          email: "asmerom@example.com",
          date_of_birth: "1990-01-01",
          status: "pending",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
