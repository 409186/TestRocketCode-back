const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    secondName: {
      type: String,
    },
    firstLastName: {
      type: String
    },
    secondLastName: {
      type: String
    },
    day: {
      type: String
    },
    month: {
      type: String
    },
    year: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
