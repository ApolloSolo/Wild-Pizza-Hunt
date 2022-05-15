const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  creatAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;
