import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import red from '@material-ui/core/colors/red';
import { grey } from '@material-ui/core/colors';
import { animateScroll as scroll} from 'react-scroll';
import deleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import { Link, animateScroll } from "react-scroll";

  
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
const useStyles = makeStyles({
    root: {
        background: 'black',
        maxWidth: 345,
        color: 'white',
        width: 250,
    },
    appBarStyle: {
        width : '100%',
        height : '20%',
        background : grey[900],
        justifyContent: 'center', 
        alignItems: 'center'
    },
    indicator:{
        backgroundColor: 'white',
        height: 5
    },
    media: {
        height: 80,
        width: 100,
        marginLeft: 75,
        marginTop: 20,
    }
});

function a11yProps(index) {
    return {
      id: 'full-width-tab-${index}',
      'aria-controls': 'full-width-tabpanel-${index}',
    };
  }

export default function HeaderBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
        return(
        <AppBar className={classes.appBarStyle} position="static">
            <Tabs 
            value={value}
            onChange={handleChange}
            indicatorColor="primary" classes={{indicator: classes.indicator}}>
                <Tab label="Netsuite"  {...a11yProps(0)}/>
                <Tab label="JD Edwards" {...a11yProps(1)} />
                <Tab label="SAP" {...a11yProps(2)}/>
                <Tab label="Oracle Cloud" {...a11yProps(3)}/>
            </Tabs>
        </AppBar>
        );
    
}   
/*<div style={HeaderStyle}>
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
        </div> */


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