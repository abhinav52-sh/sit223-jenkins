import Heading from './Heading'
import RadioButton from './RadioButton'

function TypeSelection(props) {

    const handleRadioButtonChange = (event) => {
        props.onPostTypeChange(event.target.value);
    };    

    return (
        <div>
            <Heading text='New'/>
            <RadioButton label1='Question' label2='Article' selectedOption={props.selectedOption} onRadioButtonChange={handleRadioButtonChange}/>
        </div>
    )
}

export default TypeSelection;
