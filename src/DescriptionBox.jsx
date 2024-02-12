import './descriptionbox.css'

function DescriptionBox(props) {
    return (
        <div className='description-box'>
            <p>{props.text}</p>
            <textarea className='text-box' rows={props.rows} cols='176' placeholedr={props.placeholder}/>
        </div>
    )
}

export default DescriptionBox;