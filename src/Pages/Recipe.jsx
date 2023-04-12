import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { StepCard } from '../Components/StepCard';
import { ScoreDisplay } from '../Components/ScoreDisplay';
import { getRecipesInfo } from '../API/Fetch';
import { Icons } from '../Components/Icons';

export const Recipe = () => {
  let { state } = useLocation()
  const [data, setData] = useState()
  const { recipeId } = useParams()
  console.log(state)

  setTimeout(() => {
    console.log(data);
  }, 2000);

  useEffect(() => {
    if (!state) {
      fetchData(recipeId)
    } else {
      console.log(recipeId)
      setData(state.data)
    }
  }, [recipeId])

  async function fetchData(recipeId) {
    try {
      const data = await getRecipesInfo(recipeId)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {data ?
        <div className='w-full grid  p-3 items-center'>
          <div className='w-[45%] m-auto'>
            <img src={data.image} className='w-full' />
            <h2 className='capitalize underline text-center text-5xl py-5'>{data.title}</h2><div className='w-fit m-auto'><Icons icons={{
              vegan: data.vegan,
              vegetarian: data.vegetarian,
              glutenfree: data.glutenFree
            }} /></div><ScoreDisplay score={data.healthScore} />
            <h3 className='capitalize underline text-center text-2xl py-5'>Ingredients:</h3>
            <div className='grid grid-cols-2'>
              {data.extendedIngredients.map((element, index) => (
                <Link to={`/ingredient/${element.id}`} className='capitalize p-3 rounded-full m-1 truncate bg-lime-100' key={index}>{element.original}</Link>
              ))}
            </div>
            {data.diets.length > 0 ?
              <div>
                <h3 className='capitalize underline text-center text-2xl py-5'>Compatible diets:</h3>
                <ul className='grid grid-cols-3'>
                  {data.diets.map((element, index) => (
                    <li className='capitalize p-3 m-1 bg-red-200' key={index}>{element}</li>
                  ))}
                </ul>
              </div>
              : null}

          </div>
          <div className='w-[45%] m-auto'>
            <h3 className='capitalize underline text-center text-2xl py-5'>Steps:</h3>
            <div className='w-full'>
              {data.analyzedInstructions[0].steps.map((element, index) => (
                <StepCard
                  key={index}
                  step={element}
                />
              ))}
            </div>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div> : null}

    </div>
  )
}
