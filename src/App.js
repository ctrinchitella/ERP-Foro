//import React from 'react';
import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import HeaderBar from './HeaderBar.js';
import Carrousel from './Carrousel.js';
import Docbtn from './DocumentBtn.js';
import QA from './QA.js';
import Issues from './Issues.js';
import Add from './add.js';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './App.css';
import { BorderStyle } from '@material-ui/icons';

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

/*function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};*/

class ReadyToScroll extends Component {

  constructor(props) {
      super(props)
      this.myRef = React.createRef()  
  }

  render() {
      return <div ref={this.myRef}></div> 
  }  

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
  // run this method to execute scrolling. 

}

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



