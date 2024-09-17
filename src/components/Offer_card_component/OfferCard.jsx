import React from 'react'
import './OfferCard.css'
function OfferCard() {
  return (
    <div className="offer-card-container">
            <h3 className='offer-card-text'>More reasons to join</h3>
    <div className='offer-card-holder'>
        <div className="offer-card">
            <h3>Enjoy on your TV</h3><br />
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="offer-card">
            <h3>Download your shows to watch offline</h3><br />
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className="offer-card">
            <h3>Watch everywhere</h3><br />
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
        </div>
        <div className="offer-card">
            <h3>Create profiles for kids</h3><br />
            <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
        </div>
    </div>
    </div>  
  )
}

export default OfferCard