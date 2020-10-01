import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        background: 'black',
        maxWidth: 345,
        color: 'white',
        width: 250,
    },
    appBarStyle: {
        width : '100%',
        height : 50,
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

function LinkTab(props) {
    return <Tab component="a" {...props} />;
}

export default function HeaderBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };
    return( 
    <AppBar className={classes.appBarStyle} position="fixed">
        <Tabs 
        value={value}
        onChange={handleChange}
        indicatorColor="primary" classes={{indicator: classes.indicator}}>
            <LinkTab label="Home" {...a11yProps(1)} href="#Home"/>
            <LinkTab label="Netsuite" {...a11yProps(1)} href="#Netsuite"/>
            <LinkTab label="JD Edwards" {...a11yProps(1)} href="#JDEdwards"/>
            <LinkTab label="SAP" {...a11yProps(2)} href="#SAP"/>
            <LinkTab label="Oracle Cloud" {...a11yProps(3)} href="#OracleCloud"/>
        </Tabs>
    </AppBar>
    );
}   