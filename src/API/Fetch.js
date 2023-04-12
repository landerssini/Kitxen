const myHeaders = new Headers();
myHeaders.append("x-api-key",import.meta.env.VITE_REACT_APP_MY_API_KEY);

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
}
export function chooseRandomDiet() {
    const diets = ["vegan", "gluten free", "vegetarian"];
    const randomIndex = Math.floor(Math.random() * diets.length);
    return diets[randomIndex];
}
export async function getRecipesInfo(recipeId) {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information`, requestOptions)
        const data = await response.json()
        console.log(data)
    return data
}
export async function getRecipesInfoByIngredient(ingredient) {
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}/information?includeNutrition=false`, requestOptions)
        const data = await response.json()
        console.log(data)
    return data
}
export async function getIngredientsInfo(ingredientId) {
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/${ingredientId}/information`, requestOptions)
    const data = await response.json()
    console.log(data)
    return data
}
export async function getRecipesInfoRandom(quantity, tags = '') {
    let fetchTags = tags;
    let dataTag = '';
  
    if (!tags) {
      fetchTags = chooseRandomDiet();
      dataTag = 'random recipes';
    } else if (tags === 'random') {
      dataTag = 'random recipes';
      fetchTags = '';
    } else {
      dataTag = tags;
    }
  
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${quantity}&tags=${fetchTags}`, requestOptions);
    const data = await response.json();
  
    data.tag = dataTag;
  
    return data;
  }
  export async function getQueryResultsRecipes(query) {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}`, requestOptions)
    const data = await response.json()
    console.log(data)
    return data
}
  export async function getQueryResultsIngredients(query) {
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${query}`, requestOptions)
    const data = await response.json()
    console.log(data)
    return data
}


