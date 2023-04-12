import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getIngredientsInfo, getRecipesInfoByIngredient } from '../API/Fetch'
import { RecipeCard } from '../Components/RecipeCard'

export const Ingredient = () => {
  const { ingredientId } = useParams()
  const [ingredientInfo, setIngredientInfo] = useState(null)
  const [recipes, setRecipes] = useState()

  async function getIngredientInfo(ingredientId) {
    const data1 = await getIngredientsInfo(ingredientId)
    const data2 = await getRecipesInfoByIngredient(data1.original)
    setIngredientInfo(data1)
    setRecipes(data2)
  }
  useEffect(() => {
    getIngredientInfo(ingredientId)
  }, [ingredientId])

  return (
    <div>
      {ingredientInfo ? (
        <div className='w-full grid  p-3 items-center'>
          <div className='w-[15%] m-auto'>
            <img src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredientInfo.image}`} className='w-full' alt="" />
            <h2 className='capitalize underline text-center text-5xl py-5'>{ingredientInfo.original} </h2>
          </div>
          <div className='w-[80%] m-auto '>
            <h3 className='capitalize  text-center text-5xl py-5'>Recipes with this ingredient:</h3>
            <div className='grid grid-cols-3 justify-items-center'>
              {
                recipes.map((recipe, index) => (

                  <RecipeCard
                    key={index}
                    bgUrl={recipe.image}
                    name={recipe.title}
                    score={recipe.healthScore}
                    timer={recipe.readyInMinutes}
                    servings={recipe.servings}
                    icons={{
                      vegan: recipe.vegan,
                      vegetarian: recipe.vegetarian,
                      glutenfree: recipe.glutenfree
                    }}
                    id={recipe.id}
                    data={recipe}
                  />
                ))}


            </div>

          </div>
        </div>
      ) : null}
    </div>
  )
}
