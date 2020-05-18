import React from 'react';
import './FrameForImage.css';

const FrameForImage = (props) => {
    return (
      <div className="frame">
        <h1 className="header">
            {props.header}
        </h1>
        <div className="frame-content">
          <img src= {props.image} alt=""/>
        </div>
      </div>
    )
  }


  export default FrameForImage;