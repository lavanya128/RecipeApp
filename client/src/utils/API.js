import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.post("/api/recipes", { params: { q: query}});
  },

   saveRecipe: function(recipeData) {
    return axios.post('/api/saved', recipeData);
  },

  getRecipeInfo: function(id){
  	return axios.get("api/recipes/" + id)
  }

  // getRecipeInfo: function(query){
  // 	return axios.post("/api/recipes/id", { params: {q: query}})

  // }

};
