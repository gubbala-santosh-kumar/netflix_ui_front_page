import React from 'react'
import './GetStart.css'
function GetStart() {
  return (
    <div className="GST-holder">
      <p>Ready to watch? Enter your email to create or restart your membership.</p><br />
      <div className="GST-container">
            <div className='email-tag'><input type="email" placeholder='Email address' /></div>
            <button type="button">Get Started</button>
        </div>
    </div>
  )
}

export default GetStart