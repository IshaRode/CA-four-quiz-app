import React from 'react'
import './QuestionBox.css'

export default function QuestionBox() {
  return (
    <div className='container'>
      <div className='quiz'>
        <div className='fifteen'>
        <p >1 of 5</p>
        </div>
        <p className='mammal'>What is react-js</p>
        <div className='options'>
        
            <button className='opt'>Option-1</button>
            <button className='opt'>Option-2</button>
            <button className='opt'>Option-3</button>
            <button className='opt'>Option-4</button>
        
        </div>
        <div className='highlight-buttons'>
          <button className='previous' >Highlight</button>
          <button className='next' >Unhighlight</button>
        </div>

      </div>
      
    </div>
  )
}
