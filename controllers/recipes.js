const Recipe = require("../models/recipe");

module.exports = {
  new: newRecipe,
  index,
  show,
  create,
};

function show(req, res) {
  Recipe.findById(req.params.id, function (err, recipedb) {
    res.render("recipes/show", { title: "Recipes Detail", recipe: recipedb });
  });
}

function newRecipe(req, res) {
  res.render("recipes/new", { title: "Add Recipe" });
}

function index(req, res) {
  Recipe.find({}, function (err, recipes) {
    res.render("recipes/index", {
      recipes,
      title: "All Recipes",
    });
  });
}

function create(req, res) {
  const recipe = new Recipe(req.body);
  recipe.save(function (err) {
    console.log(err, " this err");

    if (err) return res.redirect("/recipes/new");

    res.redirect(`/recipes/${recipe._id}`);
  });
}
