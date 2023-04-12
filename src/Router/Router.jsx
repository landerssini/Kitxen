import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Recipe } from '../Pages/Recipe'
import { Ingredient } from '../Pages/Ingredient'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe'>
        <Route path=':recipeId' element={<Recipe />}/>
      </Route>
      <Route path='/ingredient'>
        <Route path=':ingredientId' element={<Ingredient />}/>
      </Route>
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  )
}
