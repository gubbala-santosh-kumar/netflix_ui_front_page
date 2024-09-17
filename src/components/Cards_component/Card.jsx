import React from 'react'
import image from '../Cards_component/img1.jpg'
import './Card.css'
function Card() {
  return (
    <div className="card-ctr">
        <div className="card">
            <br />
            <h4 className='sticker'><center>Top <br /> 10</center></h4>
            <img src={image} alt="" />
            <h1 className='rank'>1</h1>
        </div>
        <div className="card">
            <br />
            <h4 className='sticker'><center>Top <br /> 10</center></h4>
            <img src={image} alt="" />
            <h1 className='rank'>2</h1>
        </div>
        <div className="card">
            <br />
            <h4 className='sticker'><center>Top <br /> 10</center></h4>
            <img src={image} alt="" />
            <h1 className='rank'>3</h1>
        </div>
        <div className="card">
            <br />
            <h4 className='sticker'><center>Top <br /> 10</center></h4>
            <img src={image} alt="" />
            <h1 className='rank'>4</h1>
        </div>
        <div className="card">
            <br />
            <h4 className='sticker'><center>Top <br /> 10</center></h4>
            <img src={image} alt="" />
            <h1 className='rank'>5</h1>
        </div>
    </div>
  )
}

export default Card