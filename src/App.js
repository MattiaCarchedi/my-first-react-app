import React from 'react';
import squirrels from './squirrels';
import FrameForImage from './FrameForImage';


class App extends React.Component {
    render() {
        return (
        <div className="wrapper">
    
        <FrameForImage 
            header= {squirrels[0].headerText}
            image= {squirrels[0].imageUrl}
        />
    
        <FrameForImage 
            header= {squirrels[1].headerText}
            image= {squirrels[1].imageUrl}
        />

        </div>
        );
    }
};

  export default App;