const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    // Add the 3 new properties below
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  


const recipeSchema = new Schema({
    recipeName: String,
    prepTime: {type: Number, defualt: false},
    cookTime: {type: Number, defualt: false},
    img: { data: Buffer, contentType: String },
    recipeIngredients: String,
    recipeContent: String,
    reviews: [reviewSchema],
  }, 
  { timestamps: true}
  );

  module.exports = mongoose.model('Recipe', recipeSchema);