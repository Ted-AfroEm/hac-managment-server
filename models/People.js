// models/People.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const People = sequelize.define(
  "People",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      field: "first_name",
    },
    middleName: {
      type: DataTypes.STRING,
      field: "middle_name",
    },
    lastName: {
      type: DataTypes.STRING,
      field: "last_name",
    },
    phoneNumber: {
      type: DataTypes.STRING(10), // Assuming phone number length is 10
      field: "phone_number",
    },
    sex: {
      type: DataTypes.ENUM("M", "F"), // Assuming only Male (M) and Female (F)
    },
    email: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      field: "date_of_birth",
    },
  },
  {
    tableName: "people",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = People;
