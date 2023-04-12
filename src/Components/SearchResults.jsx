import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getQueryResultsIngredients, getQueryResultsRecipes } from '../API/Fetch';

export const SearchResults = (query) => {
    const [results, setResults] = useState();
    const [showResults, setShowResults] = useState(false);

    async function getQueryResults(query) {
        const recipes = await getQueryResultsRecipes(query);
        const ingredients = await getQueryResultsIngredients(query);
        setResults({
            recipes: recipes.results,
            ingredients: ingredients.results,
        });
    }
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        clearTimeout(timeoutIdRef.current);

        if (query.query.length >= 3) {
            timeoutIdRef.current = setTimeout(() => {
                setShowResults(true)
                getQueryResults(query.query);
            }, 1000);
        } else {
            setResults({ recipes: [], ingredients: [] });
        }
    }, [query]);

    const handleClick = () => {
        setShowResults(false);
    };

    return (
        <div>
            {showResults && results ? (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-md rounded-lg py-4 px-6 w-[150%] z-10">
                    <div className="p-3">
                        <h2 className="text-xl font-bold mb-4">Recipes</h2>
                        <div className="list-disc list-inside grid grid-cols-4">
                            {results.recipes.map((result, index) => (
                                <Link
                                    to={`/recipe/${result.id}`}
                                    key={index}
                                    className="text-lg truncate p-3  rounded-full m-1 bg-lime-100"
                                    onClick={handleClick}
                                >
                                    {result.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                        <div className="list-disc list-inside grid grid-cols-4">
                            {results.ingredients.map((result, index) => (
                                <Link
                                    to={`/ingredient/${result.id}`}
                                    key={index}
                                    className="text-lg truncate p-3 rounded-full m-1 bg-lime-100"
                                    onClick={handleClick}
                                >
                                    {result.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
