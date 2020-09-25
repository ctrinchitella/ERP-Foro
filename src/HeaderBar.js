import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import red from '@material-ui/core/colors/red';
import { grey } from '@material-ui/core/colors';
import { animateScroll as scroll} from 'react-scroll';


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



/*export default class HeaderBar extends Component{
    render(){
        const primary = grey[900];
        return(
            <AppBar color={primary} position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Item One"  />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
        );
    }
}*/


export default class HeaderBar extends Component {
    render(){
        
        return(
        <div style={HeaderStyle}>
            <a onClick={(e) => {console.log('Scrolling to NS');}}>
                <Buttons title='Netsuite'/>
            </a>
            <a onClick={(e) => {console.log('Scrolling to JDE');}}>
                <Buttons title='JD Edwards'/>
            </a>
            <a onClick={(e) => {console.log('Scrolling to SAP');}}>
                <Buttons title='SAP'/>
            </a>
            <a onClick={(e) => {console.log('Scrolling to OC');}}>
                <Buttons title='Oracle Cloud'/>
            </a>
        </div>
        
        )
    }
}   



/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
} */

/*<div style={HeaderStyle}>
    <Buttons title='Netsuite'/>
    <Buttons title='JD Edwards'/>
    <Buttons title='SAP'/> 
    <Buttons title='Oracle Cloud'/>
</div>*/ 