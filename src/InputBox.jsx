import './inputbox.css'

function Title(props) {
    return (
        <div className='input-box'>
            <p id='input-text'>{props.text}</p>
            <input type='text' id='input-input' size={props.size} for='title-text' placeholder={props.placeholder}/>
        </div>
    )
}

export default Title;