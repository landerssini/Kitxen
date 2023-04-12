import React from 'react'
import { Icon } from './Icon'

export const Icons = (icons) => {
    console.log(icons.icons);
    return (
        <div className='flex gap-2 m-1'>
          {icons.icons.vegan && <Icon icon='vegan' />}
          {icons.icons.vegetarian && <Icon icon='vegetarian' />}
          {icons.icons.glutenfree && <Icon icon='gluten free' />}
        </div>
      );
}
