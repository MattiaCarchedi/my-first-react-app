import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement =document.getElementById('my-react-app');

const appContent = (
  <div className="wrapper">

    <div className="frame">
      <h1 className="header">
        A cute squirrel
      </h1>
      <div className="frame-content">
        <img src="https://www.woodlandtrust.org.uk/media/1291/grey-squirrel-eating-nuts-alamykp50jm-sandra-standbridge.jpg" alt=""></img>
      </div>
    </div>

    <div className="frame">
      <h1 className="header">
        A nicer squirrel
      </h1>
      <div className="frame-content">
        <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F2012f35e-decf-11e9-9f61-dcefea5f5359.jpg?crop=4703%2C2646%2C274%2C602&resize=1180" alt=""></img>
      </div>
      
    </div>


  </div>
)


ReactDOM.render(appContent, rootElement);


