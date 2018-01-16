const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	recipeId: {type: String , required: true},
  title: { type: String, required: true },
  sSUrl: { type: String, required: true },
  readyInMins: {type: String, required: true},
  ingredients: {type: String, required: true},
  instructions: {type: String, required: true},
  pairedWines: {type: String, required: true},
  cuisineType: {type: String, required: true},
  pricePerServing: {type: String, required: true}
});

const Recipes = mongoose.model("Recipes", recipeSchema);

module.exports = Recipes;
