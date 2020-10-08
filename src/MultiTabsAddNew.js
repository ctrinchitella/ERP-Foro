import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dropdown from './Dropdown.js';

const useStyles = makeStyles(theme => ({
    appBarStyle: { 
        width : '80%',
        height : 40,
        background : 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        color: grey[900],
        
    },
    MultiTabStyle: {
        width: 500,
    },
    MultiLineTexts: {
        width: 500,
        height: 100,
        marginTop: 70
    },
    CommonText: {
        width: 230,
        height: 25,
        marginLeft: 20,
        marginTop: 30,
    }
}));



export default function MultiTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };
    return( 
    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className={classes.MultiTabStyle}>
        <Tab eventKey="Docs" title="Docs">
            <Dropdown/>
        </Tab>
        <Tab eventKey="Q&A" title="Q&A">
            <Dropdown/>
        </Tab>
        <Tab eventKey="Issue" title="Issues">
            <div className="NetsuiteButtons">
                <Dropdown/> 
                <TextField id="title" label="Title" variant="outlined" className={classes.CommonText} />
            </div>
            <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined" className={classes.MultiLineTexts}
            />
            
        </Tab>
    </Tabs>
    );
}   