import './Searchbar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Searchbar() {

 const [ term, setTerm ] = useState('')
 const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search?q=${term}`)
    //Query paramter ?q=chicken
  }
  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search</label>
            <input
            type="text"
            id="search"
            required
            onChange={(e) => setTerm(e.target.value)}></input>
        </form>
    </div>
  )
}