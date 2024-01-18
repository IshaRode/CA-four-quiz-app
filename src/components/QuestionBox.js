import React from 'react'
import './QuestionBox.css'

export default function QuestionBox() {
  return (
    <>
    <div>
      <nav>
        <h2>Quizify</h2>
        <h2>h2</h2>
      </nav>
    </div>
    <div className='container'>
      <div className='quiz'>
        <div className='fifteen'>
        <p className='question-number'>1 of 5</p>
        </div>
        <p className='question'>What is react-js</p>
        <div className='options'>
        
            <button className='opt'>Option-1</button>
            <button className='opt'>Option-2</button>
            <button className='opt'>Option-3</button>
            <button className='opt'>Option-4</button>
        
        </div>
        <div className='highlight-buttons'>
          <button className='highlight'>Highlight</button>
          <button className='unhighlight' >Unhighlight</button>
        </div>

      </div>
      
    </div>
    </>
  )
}
