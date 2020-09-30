//import React from 'react';
import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import HeaderBar from './HeaderBar.js';
import Carrousel from './Carrousel.js';
import Docbtn from './DocumentBtn.js';
import QA from './QA.js';
import Issues from './Issues.js';
import Add from './add.js';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { grey } from '@material-ui/core/colors';

function App() {
  
  return (
    <view style={{ flex: 1, scrollBehavior: "smooth" }}>
      <div id="Home">
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
      </div>
      <div className='ErpContents'>
        <div id="Netsuite" className="Netsuite">
          Netsuite
        </div>
        <div id="JDEdwards" className="JDEdwards">
          JDE
        </div>
        <div id="SAP" className="SAP">
          sap
        </div>
        <div id="OracleCloud" className="OracleCloud">
          OC
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



