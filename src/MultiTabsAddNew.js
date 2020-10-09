import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from './Dropdown.js';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 30
    },
    input: {
        display: 'none',
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
    },
    UploadButtonStyle: {
        backgroundColor: grey[900],
        width: 500,
        height: 100,
        color: 'white',
        marginTop: 30,
        marginLeft: 0
    },
    ButtonStyle: {
        backgroundColor: grey[900],
        color: 'white',
        marginLeft: 20,
        width: 150,
        height: 40
    },
    QuestionText: {
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
    <Tabs defaultActiveKey="Docs" transition={false} id="noanim-tab-example" className={classes.MultiTabStyle}>
        <Tab eventKey="Docs" title="Docs">
            <Dropdown />
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button className={classes.UploadButtonStyle} variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                    Upload
                    </Button>
                </label>
            </div>
            <div className="AddNewButtons">
                <Button variant="contained" className={classes.ButtonStyle}>
                    Submit
                </Button>
                <Button variant="contained" className={classes.ButtonStyle}>
                    Cancel
                </Button>
            </div>
            
        </Tab>
        <Tab eventKey="Q&A" title="Q&A">
            <Dropdown/>
            <TextField id="question" label="Question" variant="outlined" className={classes.QuestionText} />
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
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button className={classes.UploadButtonStyle} variant="contained" component="span"  startIcon={<CloudUploadIcon />}>
                    Upload
                    </Button>
                </label>
            </div>
            <div className="AddNewButtons">
                <Button variant="contained" className={classes.ButtonStyle}>
                    Submit
                </Button>
                <Button variant="contained" className={classes.ButtonStyle}>
                    Cancel
                </Button>
            </div>
        </Tab>
    </Tabs>
    );
}   