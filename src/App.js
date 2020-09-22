//import React from 'react';
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import HeaderBar from './HeaderBar.js';
import Carrousel from './Carrousel.js';
import Docbtn from './DocumentBtn.js';
import QA from './QA.js';
import './App.css';

/*class Text extends Component{
  render(){
    const {arrayofNumbers,
           number,
           objectValues,
           text} = this.props
    return (
    <div>
      <p>{arrayofNumbers.join(', ')}</p>
      <p>{objectValues.key2}</p>
    </div>
    )
  
  }
}*/

function App() {
  return (
    <view style={{ flex: 1 }}>
      <div className='App'>
        <HeaderBar></HeaderBar>
        <Carrousel></Carrousel>
      </div>
      <div className= 'ButtonContainer'>
        <div className='Documents'>
          <Docbtn></Docbtn>
        </div>
        <div className='QA'>
          <QA></QA>
        </div>
        <div className='Issues'>
          <Docbtn></Docbtn>
        </div>
        <div className='New'>
          <Docbtn></Docbtn>
        </div>
      </div>
    </view>
  );
}

export default App;
//const Hello = (props) => <h1>{props.title}</h1>
//las props son inmutables. no se le puede cambiar el valor a una prop
/*class Hello extends Component{
  render(){
    return <h1>{this.props.title}</h1>

  }
}*/

/*va adentro del div de abajo
 <Text arrayofNumbers={[2,4,5,78]}
              number="200"
              text='kadksjda'
              objectValues = {{key1:'carla grosa', key2:'carla no grosa'}}>
        </Text>*/



