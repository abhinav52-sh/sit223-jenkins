import './App.css';
import React, {useState} from 'react';
import TypeSelection from './TypeSelection';
import PostDetails from './PostDetails';


function App() {
  const [selectedPostType, setSelectedPostType] = useState('null');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
      <TypeSelection  onPostTypeChange={handlePostTypeChange}/>
      <PostDetails selectedPostType={selectedPostType}/>
    </div>
  );
}

export default App;
