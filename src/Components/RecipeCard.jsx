import React from 'react'
import { ScoreDisplay } from './ScoreDisplay'
import { Servings } from './Servings'
import { Timer } from './Timer'
import { Icons } from './Icons'
import { Link } from 'react-router-dom'
import errorpic from '../assets/Images/ErrorPic.png'


export const RecipeCard = ({ bgUrl, icons, name, score, servings, timer, id, data, style}) => {
    console.log(data);
return (
    <Link to={`/recipe/${id}`} {...(score && {state: { data: data }})}>
            <div className='self-center border-2 border-lime-500 rounded-xl w-[28rem] h-[28rem] hover:scale-105 overflow-hidden hover:transition-all m-5 bg-white'>

                <div className={`relative max-h-[66%] h-fit  w-full overflow-hidden`}>

                <img src={bgUrl} alt={name} className='w-full' />
                <img src={errorpic} alt={name}  className='w-full' />

                    <div className='absolute bottom-0 right-0'>
                        <Icons icons={icons}/>
                    </div>
                </div>
                <div className='h-2/6 max-h-[33%] p-3'>
                    <div className='grid max-h-[100%] grid-cols-12 grid-rows-6'>
                        <p className='col-start-1 col-end-9 row-start-1 row-end-4 text-2xl line-clamp-2 overflow-hidden h-full text-ellipsis'>
                            {name}
                        </p>
                       {score? <ScoreDisplay score={score}/>:null}
                        <div className='col-start-7 col-end-13 row-start-5 row-end-7 flex'>
                        {servings? <Servings servings={servings}/>:null}
                           {timer?  <Timer timer={timer}/>:null}
                        </div>
                    </div>
                </div>
            </div>
            </Link>
    )
}
