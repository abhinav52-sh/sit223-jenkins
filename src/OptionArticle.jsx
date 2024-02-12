import DescriptionBox from './DescriptionBox';

function PostDetails() {
    return (
        <div>
            <DescriptionBox text='Abstract' rows='5' placeholder='Enter a 1-paragraph abstract'/>
            <DescriptionBox text='Article Text' rows='20' placeholder='Enter article text in paragraphs'/>
        </div>
    )
}

export default PostDetails;