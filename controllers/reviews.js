const Recipe = require('../models/recipe');

module.exports = {
	create,
	delete:  deleteReview
}

function deleteReview(req, res, next){
	// Find the movie with the review!
	Recipe.findOne({'reviews._id': req.params.id}, function(err, recipeDocument){
		// find the subdocument itself, find the review in the movieDocument, that has the same id as our req.params.id
		// THE FINDING (ID)
		const review = recipeDocument.reviews.id(req.params.id);
		// If the review wasn't made by the user redirect them back to the same page
		if(!review.user.equals(req.user._id)) return res.redirect(`/recipes/${recipeDocument._id}`);

		// remove the review
		// 1 way find the review then call remove method
		review.remove()
		// remove the review
		//THE REMOVIING (REMOVE)
		// movieDocument.reviews.remove(req.params.id) 
		recipeDocument.save(function(err){
			if(err) next(err); // next(err) passes it to the express generator err handler
			res.redirect(`/recipes/${recipeDocument._id}`)
		})


	})


}

function create(req, res){
	// two things we need to know from the request?
	// req.params.id = id of the recipe we want to tadd the review to
	// req.body - contents of the form, which is the review we want to add to the movie
	//
	// console.log(req.params.id)
	// res.send('hello im hitting the create route in the reviews change me later')
	// Find ther recipe from the database
	// recipe.findById is a mongoose Method
	Recipe.findById(req.params.id, function(err, recipeFromTheDatabase) {
 
		///ADD THE USER-CENTRIC INGFO TO REQ.BODY
		req.body.user = req.user._id;
		req.body.userName =  req.user.name;
		req.body.userAvatar = req.user.avatar;
		// add the review (req.body) to the recipeFromTheDatabase
		recipeFromTheDatabase.reviews.push(req.body); // mutating a document 
		// we have to tell mongodb we changed the document, 
		recipeFromTheDatabase.save(function(err){
			console.log(recipeFromTheDatabase)
			// then we want to respond to the client!
			 // redirect them to a page, What page makes sense to redirect?
			res.redirect(`/recipes/${recipeFromTheDatabase._id}`)	
		})

	})


}