




### Example Data Model

![alt text]('//public/images/Model.png')



### RELATIONSHIPS
A user has many recipes(userRecipes)/ a recipe belongs to a User.
A user has many reviews/  A review belongs to a User.
A recipe has many reviews/ A review belongs to a recipe.

User Relatioship with Recipes

#### Reviews

Note that in this app, a user can "add" a recipe by creating it in the database. these one-to-many relationships are modeled with a userRecipe property on the recipe model that references the  _id of the user that creates each particular recipe.
in addition, a user can "review" and rate each recipe. Which there is just a Schema.

#### Updating/Deleting of Reviews

Each review and rating needs to know the user that submitted it. not just for display purposes, but to restrict the ability to update and/or delete a comment to that of the user that submitted. te userId property in the Reviews Schema holds the _id of the user that submitted the  review and can therefore be compared to the logged in the users  _id to render the additional UI for updating/deleting.


## Example Routing

#### Recipes

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| GET | /recipes | recipesCtrl.index | View all the recipes submitted by the logged in user|
| GET | /recipes/all | recipesCtrl.allrecipes | View all the recipes regardless of who submitted (use querystring params to perform filtering) |
| GET | /recipes/:id | recipesCtrl.show | View the details of any recipes |
| GET | /recipes/new | recipesCtrl.new | View a form for submitting a recipes (be sure to define this route before the show route)|
| POST | /recipes | recipesCtrl.create | Handle the new recipe form being submitted |
| GET | /recipes/:id/edit | recipesCtrl.edit | View a form for editing a recipes (restrict to user who submitted the recipes) |
| PUT | /recipes/:id| recipesCtrl.update | Handle the edit recipe form being submitted (restrict to user who submitted the recipes) |
| DELETE | /recipes/:id| recipesCtrl.delete | Delete a recipes(restrict to user who submitted the book) |

#### Reviews

|HTTP<br>Method|URL<br>Endpoint|Controller<br>Action|Purpose|
|---|---|---|---|
| n/a | n/a | index action | View all the reviews for a recipe - no route needed since reviews and ratings are  displayed under recipe |
| n/a | n/a | show action | Viewing reviews |
| n/a | n/a | new action | The form to add a new review should be displayed on the recipe show view |
| POST | /recipes/:id/reviews | reviewsCtrl.create | Handle the new review form being submitted |
| GET | /reviews/:id/edit | reviewsCtrl.edit | View a form for editing a rerview (restrict to user who submitted the review) |
| PUT | /reviews/:id| reviewsCtrl.update | Handle the edit review form being submitted (restrict to user who submitted the review) |
| DELETE | /reviews/:id| reviewsCtrl.delete | Delete a review (restrict to user who submitted the review) |
