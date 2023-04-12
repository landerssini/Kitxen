import React from 'react'
import { Section } from '../Components/Section';

export const Home = () => {

  return (
    <div className='h-screen'>
     <Section tags="random"/>
     <Section tags="vegetarian"/>
     <Section tags="gluten free"/>
     <Section tags="vegan"/>
    </div>
  )
}
