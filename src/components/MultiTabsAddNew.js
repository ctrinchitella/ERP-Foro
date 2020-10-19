import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dropdown from './elements/Dropdown.js';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import RadioButtons from './elements/RadioButton.js';
import db from '../firestore';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import Add from './DB/Add';


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
    AnswerLineTexts: {
        width: 500,
        height: 100,
        marginBottom: 20
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
        width: 400,
        height: 25,
        marginTop: 70,
        marginBottom: 50
    }
}));



export default function MultiTabs() {
    const classes = useStyles();
    const verEquipos = () => {
        var docs = db.collection("equipos").doc("2");
        docs.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().nombre);
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    };
    const handleUploadSuccess = filename => {
        /*var ERP = "JDE";
        firebase.storage().ref("files").child(filename).getDownloadURL().then(url =>
            this.setState({ files: files }));*/
        firebase.storage().ref("files").child(filename).getDownloadURL().then(url =>
            Add.addDocument("ERP", "title", "UploadedBy", url));
            
            alert("UPLOADED SUCCESSFULLY")
    };
    const handleUploadFailed = filename =>{
        alert("FAILED TO UPLOAD.")
    }
    const selectERPDocs = erp =>{
        alert(erp)
    }
    return (
        <Tabs defaultActiveKey="Docs" transition={false} id="noanim-tab-example" className={classes.MultiTabStyle}>
            <Tab eventKey="Docs" title="Docs">
                <Dropdown DefaultERP="JDE" selectERP={selectERPDocs}/>
                <div className={classes.root}>
                    <label><FileUploader
                   //accept="image/*"
                   name="avatar"
                   className={classes.input}
                   randomizeFilename
                   hidden
                   storageRef={firebase.storage().ref("files")}
                   onUploadSuccess={handleUploadSuccess}
                   onUploadError ={handleUploadFailed}
                  />
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
                <div>
                    <Dropdown />
                    <TextField id="question" label="Question" variant="outlined" className={classes.QuestionText} />
                    <RadioButtons />
                </div>
                <TextField
                    id="Answer"
                    label="Answer"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined" className={classes.AnswerLineTexts} disabled="true"
                />
                <div className="AddNewButtons">
                    <Button variant="contained" className={classes.ButtonStyle}>
                        Submit
                </Button>
                    <Button variant="contained" className={classes.ButtonStyle}>
                        Cancel
                </Button>
                </div>
            </Tab>
            <Tab eventKey="Issue" title="Issues">
                <div className="NetsuiteButtons">
                    <Dropdown />
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
                        <Button className={classes.UploadButtonStyle} variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                            Upload
                    </Button>
                    </label>
                </div>
                <div className="AddNewButtons">
                    <Button variant="contained" className={classes.ButtonStyle}>
                        Submit
                </Button>
                    <Button variant="contained" onClick={verEquipos} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                </div>
            </Tab>
        </Tabs>
    );
}   