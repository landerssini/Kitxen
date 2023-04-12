
![Logo](/src/assets/Images/KitxenLogo.png)


## 🚀 About Me
First of all, I want to say that this is my first “big” project that I have been working on alone. I have learned many things about APIs, new libraries, and new ways to make my code more compact. I am proud of my work and I know that in a year I will look back at this project and laugh at silly mistakes, bad practices, and more.


# Kitxen

Kitxen is a web platform that allows users to access a wide variety of culinary recipes from around the world, using the Spoonacular API to obtain detailed information about ingredients, preparation, and nutrition. The page is designed to be intuitive and user-friendly, making it an ideal tool for both novice and experienced cooks. 


## Deployment

To deploy this project visit the page 


  https://kitxen.netlify.app





## Screenshots

![App Screenshot](/src/assets/Images/screenshot.png)


## Dependencies

[![react](https://img.shields.io/badge/react-18.2.0-blue.svg)](https://www.npmjs.com/package/react)
[![react-dom](https://img.shields.io/badge/react--dom-18.2.0-blue.svg)](https://www.npmjs.com/package/react-dom)
[![react-router-dom](https://img.shields.io/badge/react--router--dom-6.9.0-blue.svg)](https://www.npmjs.com/package/react-router-dom)
[![tailwind-scrollbar-hide](https://img.shields.io/badge/tailwind--scrollbar--hide-1.1.7-blue.svg)](https://www.npmjs.com/package/tailwind-scrollbar-hide)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_REACT_APP_MY_API_KEY`



## API Reference
### Spoonacular API

Spoonacular is a powerful recipe and food API that provides detailed information about ingredients, recipes, grocery products, and menu items. Their knowledge engineers have spent years crafting a complex food ontology that allows them to understand the relationships between ingredients, recipes, nutrition, allergens, and more.

The API provides a wide range of features such as recipe analysis, meal planning, shoppable recipes, special diets/intolerances, nutritional information, and more. It is used by hundreds of universities, schools, companies, and hackathons all around the world.

#### Fetch functions

- `getRecipesInfo(recipeId)`: This function takes a `recipeId` as an argument and returns detailed information about the recipe with the specified ID by making a GET request to the Spoonacular API's `/recipes/{id}/information` endpoint.

```http
  GET /recipes/{id}/information
```
- `getRecipesInfoByIngredient(ingredient)`: This function takes an `ingredient` as an argument and returns a list of recipes that contain the specified ingredient by making a GET request to the Spoonacular API's `/recipes/findByIngredients` endpoint.
```http
  GET /recipes/findByIngredients
```
- `getIngredientsInfo(ingredientId)`: This function takes an `ingredientId` as an argument and returns detailed information about the ingredient with the specified ID by making a GET request to the Spoonacular API's `/food/ingredients/{id}/information` endpoint.
```http
  GET /food/ingredients/{id}/information
```
- `getRecipesInfoRandom(quantity, tags = '')`: This function takes a `quantity` and an optional `tags` argument and returns a list of random recipes by making a GET request to the Spoonacular API's `/recipes/random` endpoint. If no `tags` are provided, a random diet is chosen using the `chooseRandomDiet()` function.
```http
  GET /recipes/random
```
- `getQueryResultsRecipes(query)`: This function takes a `query` as an argument and returns a list of recipes that match the specified query by making a GET request to the Spoonacular API's `/recipes/complexSearch` endpoint.
```http
  GET /recipes/complexSearch
```
- `getQueryResultsIngredients(query)`: This function takes a `query` as an argument and returns a list of ingredients that match the specified query by making a GET request to the Spoonacular API's `/food/ingredients/search` endpoint.
```http
  GET /food/ingredients/search
```

## Feedback

If you have any feedback, please send me your suggestion to landersolaaguirre@gmail.com

