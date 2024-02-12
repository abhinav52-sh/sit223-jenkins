import React from 'react'
import './radiobutton.css'

function RadioButton(props) {
  const { label1, label2, onRadioButtonChange } = props; // Destructuring

    return (
        <div className='radio-button'>
            <p>Select Post Type:</p>

            <input id='Question' type='radio' name='post_option' value='question' onChange={onRadioButtonChange}/>
            <label for='question'>{label1}</label>

            <input id='Article' type='radio'name='post_option' value='article' onChange={onRadioButtonChange}/>
            <label for='article'>{label2}</label>
        </div>
    )
}

export default RadioButton;