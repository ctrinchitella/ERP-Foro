import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { grey } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DropdownERP from './elements/DropdownERPs.js';
import DropdownResources from './elements/DropdownResources.js';
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



export default function MultiTabs(props) {
    const classes = useStyles();
    const [ERPAddDoc, setERPAddDoc] = useState('');
    const [ERPAddQA, setERPAddQA] = useState('');
    const [ERPAddIssue, setERPAddIssue] = useState('');
    const [resource, setResource] = useState('');
    const [fileURL, setFileURL] = useState('');
    const [filename, setFilename] = useState('');
    const verEquipos = () => {
        var docs = db.collection("equipos").doc("2");
        docs.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().nombre);
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    };
    const handleUploadSuccess = FN => {
        setFilename(FN)
        firebase.storage().ref("files").child(FN).getDownloadURL().then(url =>
            setFileURL(url));
    };
    const handleUploadFailed = filename => {
        alert("FAILED TO UPLOAD.")
    }
    const selectERPDocs = erp => {
        setERPAddDoc(erp)
    }
    const selectERPQA = erp => {
        setERPAddQA(erp)
    }
    const selectERPIssue = erp => {
        setERPAddIssue(erp)
    }
    const selectResource = resource => {
        setResource(resource)
    }
    const closeModal = () =>{
        props.closeModal();
    }
    const submitNewFile = () => {
        var ERP = ERPAddDoc;
        var Resource = resource;
        var URL = fileURL;
        var title = document.getElementById("title").value;
        if (ERP === "") {
            alert("ERP is required.")
        } else {
            if (title === "") {
                alert("Title is required.")
            } else {
                if (Resource === "") {
                    alert("Resource is required.")
                } else {
                    if (URL === "") {
                        alert("No File uploaded yet.")
                    } else {
                        Add.addDocument(ERP, title, Resource, URL)
                        props.closeModal();
                        alert("UPLOADED SUCCESSFULLY!")
                    }
                }
            }
        }
    }
    return (
        <Tabs defaultActiveKey="Docs" transition={false} id="noanim-tab-example" className={classes.MultiTabStyle}>
            <Tab eventKey="Docs" title="Docs">
                <div className="NetsuiteButtons">
                    <DropdownERP selectERP={selectERPDocs} />
                    <TextField id="title" label="Title" variant="outlined" className={classes.CommonText} />
                </div>
                <DropdownResources selectResource={selectResource} />
                <div className={classes.root}>
                    <label><FileUploader
                        name="avatar"
                        className={classes.input}
                        hidden
                        storageRef={firebase.storage().ref("files")}
                        onUploadSuccess={handleUploadSuccess}
                        onUploadError={handleUploadFailed}
                    />
                        <Button className={classes.UploadButtonStyle} variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                            Upload
                        </Button>
                    </label>
                </div>
                <label>{filename}</label>
                <div className="AddNewButtons">
                <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                <Button variant="contained" onClick={submitNewFile} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>

            </Tab>
            <Tab eventKey="Q&A" title="Q&A">
                <div>
                    <DropdownERP selectERP={selectERPQA} />
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
                <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>
            </Tab>
            <Tab eventKey="Issue" title="Issues">
                <div className="NetsuiteButtons">
                    <DropdownERP selectERP={selectERPIssue} />
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
                <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>
            </Tab>
        </Tabs>
    );
}   