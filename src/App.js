//import React from 'react';
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import HeaderBar from './HeaderBar.js';
import Carrousel from './Carrousel.js';
import Docbtn from './DocumentBtn.js';
import QA from './QA.js';
import Issues from './Issues.js';
import Add from './add.js';
import './App.css';
import { BorderStyle } from '@material-ui/icons';
import DocBtnSPopUp from './DocBtnAPopUp';
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
        <div className='ButtonContainer' //style={
        //{
          //border: '2px solid black'
        //}
      //}
      >
        <div className='Documents'>
          <Docbtn></Docbtn>
        </div>
        <div className='QA'>
          <QA></QA>
        </div>
        <div className='Issues'>
          <Issues></Issues>
        </div>
        <div className='New'>
          <Add></Add>
        </div>
      </div>
    </div>
      
      <div className='Contents'>

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



