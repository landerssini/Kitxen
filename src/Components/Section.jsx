import React, { useEffect, useState } from 'react'
import { getRecipesInfoRandom } from '../API/Fetch';
import Carousel from './Carousel';
import { RecipeCard } from './RecipeCard';
import { Icon } from './Icon';

export const Section = (tags) => {
    console.log(tags.tags);
    const [recipesData, setRecipes] = useState();
    const [sectionBg, setBg] = useState();

    async function fetchRecipes() {
        let finalTag = "random";
        if (tags.tags !== "random") {
            finalTag = tags.tags;
        }
        const recipesdata = await getRecipesInfoRandom(10, finalTag)
        setRecipes(recipesdata)
    }
    useEffect(() => {
        fetchRecipes();
        switch (tags.tags) {
            case "vegan":
                setBg("bg-green-300");
                break;
            case "vegetarian":
                setBg("bg-green-100");
                break;
            case "glutenfree":
                setBg("bg-yellow-400");
                break;
 }
    }, []);
    return (
        <div className={`ml-20 my-6 rounded-2xl  py-8 ${sectionBg}`}>
            {recipesData ?
                (<div >
                    {tags ? <h1 className='text-5xl capitalize pl-20 flex items-center gap-2'>{recipesData.tag}<Icon icon={tags.tags} /></h1> : null}

                    <div className='flex overflow-x-auto scroll-pl-36 snap-x'>
                        <Carousel>
                            {
                                recipesData.recipes.map((recipe, index) => (

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
                                            glutenfree: recipe.glutenFree
                                        }}
                                        id={recipe.id}
                                        data={recipe}
                                    />
                                ))}
                        </Carousel>
                    </div>
                </div>)
                : null}
        </div>
    )
}
