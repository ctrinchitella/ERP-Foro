import React, { Component } from 'react';

const HeaderStyle = {
    width : '100%',
    height : '20%',
    backgroundColor : 'black',
    display: 'flex', 
    justifyContent: 'center'
  }
  
const ButtonsBar = {
    width: '130px',
    height: '100%',
    fontSize: '20px',
    font: 'Arial',
    color: 'white',
    paddingTop: '10px',
    paddingBottom: '15px'
}

class Buttons extends Component {
    render(){
        const {title} = this.props
        return (
        <div style={ButtonsBar}>{title}</div>
        )
    }
}


export default class HeaderBar extends Component {
    render(){
        return(
        <div style={HeaderStyle}>
            <Buttons title='Netsuite'/>
            <Buttons title='JD Edwards'/>
            <Buttons title='SAP'/> 
            <Buttons title='Oracle Cloud'/>
        </div>
        
        )
    }
}

/*<div style={HeaderStyle}>
            <Buttons title='Netsuite'/>
            <Buttons title='JD Edwards'/>
            <Buttons title='SAP'/> 
            <Buttons title='Oracle Cloud'/>
        </div>*/ 