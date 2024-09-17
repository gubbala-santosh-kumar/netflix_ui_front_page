import React from 'react'
import './Question.css'
function Question() {
  return (
    <div className='questions-holder'>
        <div className="questions-block">
            <h3>Frequently Asked Questions</h3><br />
            <div className="questions-div">
                <div className="single-question-div">
                    <p>What is Netflix?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
                <div className="single-question-div">
                    <p>How much does Netflix cost?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
                <div className="single-question-div">
                    <p>Where can I watch?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
                <div className="single-question-div">
                    <p>How do I cancel?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
                <div className="single-question-div">
                    <p>What can I watch on Netflix?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
                <div className="single-question-div">
                    <p>Is Netflix good for Kids?</p>
                    <h1 className='gap'></h1>
                    <p>+</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Question