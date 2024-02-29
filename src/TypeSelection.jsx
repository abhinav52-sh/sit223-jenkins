import Heading from './Heading'
import RadioButton from './RadioButton'

function TypeSelection(props) {

    const handleRadioButtonChange = (event) => {
        props.onPostTypeChange(event.target.value);
    };    

    return (
        <div>
            <Heading text='New Post'/>
            <RadioButton label1='New Question' label2='Article' selectedOption={props.selectedOption} onRadioButtonChange={handleRadioButtonChange}/>
             <RadioButton label1='Abhinav' label2='Sharma' selectedOption={props.selectedOption} onRadioButtonChange={handleRadioButtonChange}/>
        </div>
    )
}

export default TypeSelection;
