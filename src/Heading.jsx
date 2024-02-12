import './heading.css'

function Heading(props) {
    return (
        <div className='heading'>
            <p>{props.text}</p>
        </div>
    )
}

export default Heading;