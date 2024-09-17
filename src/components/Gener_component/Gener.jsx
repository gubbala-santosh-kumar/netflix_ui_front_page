import React from 'react'
import './Gener.css'
function Gener() {
  return (
    <div className='Gener-div'> 
        <h3>Trending Now</h3><br />
        <div className="country-gener">
            <select name="country" id="country">
                <option value="in">India</option>
                <option value="global">Global</option>
            </select>
            <select name="type" id="type">
                <option value="movies">Movies</option>
                <option value="tv-shows">Tv Shows</option>
            </select>
        </div>
    </div>
  )
}

export default Gener