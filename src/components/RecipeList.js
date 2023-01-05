import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Trash from '../assets/trash.svg'
import { projectFire } from '../firebase/config'
//styles
import './RecipeList.css'

import React from 'react'


export default function RecipeList({recipes}) {
  const { mode,color } = useTheme()
  if(recipes.length === 0) {
    return <div className="error">No recipes to load here...</div>
  }
  
  const handleClick = (id) => {
    projectFire.collection('recipes').doc(id).delete()
  }
  
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`} style={{background: color}}>Cook This Now</Link>
          <img 
          className="delete"
          src={Trash}
          onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  )
}
