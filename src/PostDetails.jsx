import Heading from './Heading';
import InputBox from './InputBox';
import OptionQuestion from './OptionQuestion';
import OptionArticle from './OptionArticle';
import Button from './Button';

function PostDetails(props) {
    const isQuestion = props.selectedPostType
    return (
        <div>
            <Heading text='What do you want to ask or share'/>
            <InputBox text='Title' size='150' placeholder='Start your question with how, what, why, etc.'/>
            
            {isQuestion === 'question' ? <OptionQuestion/> : <OptionArticle/>}
            
            <InputBox text='Tags' size='150' placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'/>
            <Button text='Post'/>
        </div>
    )
}

export default PostDetails;
