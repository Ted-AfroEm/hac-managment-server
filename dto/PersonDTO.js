class PersonDTO {
  constructor(data) {
    this.firstName = data.firstName;
    this.middleName = data.middleName;
    this.lastName = data.lastName;
    this.phoneNumber = data.phoneNumber;
    this.sex = data.sex;
    this.email = data.email;
    this.dateOfBirth = data.dateOfBirth;
  }

  validate() {
    const requiredFields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "sex",
      "dateOfBirth",
    ];
    const missingFields = requiredFields.filter((field) => !this[field]);
    return missingFields.length === 0 ? null : missingFields;
  }
}

module.exports = PersonDTO;
