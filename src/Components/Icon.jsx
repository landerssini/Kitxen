import React from 'react'
import vegan from '../assets/Icons/Vegan.png'
import vegetarian from '../assets/Icons/Vegetarian.png'
import points from '../assets/Icons/Points.png'
import glutenfree from '../assets/Icons/GlutenFree.png'

export const Icon = (icon) => {
  console.log(icon);
  let iconShow;
  let text;
  switch (icon.icon) {
    case "vegan":
      iconShow = vegan;
      text = "Vegano";
      break;
    case "vegetarian":
      iconShow = vegetarian;
      text = "Vegetariano";
      break;
    case "points":
      iconShow = points;
      text = "Puntos";
      break;
    case "gluten free":
      iconShow = glutenfree;
      text = "Gluten Free";
      break;
    case "random":
      iconShow = null;
      text = "";
      break;
    default:
      break;
  }
  return (
    <div>
    {iconShow ? <span className="relative inline-block group">
      <img src={iconShow} alt={icon.icon} className="h-16" /> 
      <span className="bg-black text-white text-center rounded-md px-2 py-1 absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{text}</span>
    </span> : null}
    </div>
  )
};

