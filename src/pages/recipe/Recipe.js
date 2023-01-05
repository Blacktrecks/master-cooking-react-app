import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFire } from '../../firebase/config'

//styles
import './Recipe.css'



export default function Recipe() {
  const {id} = useParams()
  const { mode } = useTheme()


  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

  const unsub = projectFire.collection('recipes').doc(id).onSnapshot((doc) => {
      if(doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      }else { 
        setIsPending(false)
        setError('Recipe not found!')
      }
    })

    return () => unsub()

  },[id])

  const handleClick = () => {
    projectFire.collection('recipes').doc(id).update({ 
      title: 'Something completely different'
    })
  }
  return (
    <div className={`recipe ${mode}`}>
      {error &&<p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="recipe-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick} >Update me now</button>
        </>
      )}
    </div>
  )
}
