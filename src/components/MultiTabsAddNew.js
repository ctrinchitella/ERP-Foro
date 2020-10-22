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
    TitleIssue:{        
        width: 230,
        height: 25,
        marginLeft: 20,
        marginTop: 30,
    },
    CommonText: {
        
        width: 500,
        height: 25,
        marginTop: 60,
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
        height: 40,
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
    const [resourceQA, setResourceQA] = useState('');
    const [fileURL, setFileURL] = useState('');
    const [filename, setFilename] = useState('');
    const [issueURL, setIssueURL] = useState('');
    const [issuename, setIssueName] = useState('');
    const [hasAnswer, setHasAnswer] = useState('');

    const handleUploadDocSuccess = FN => {
        setFilename(FN)
        firebase.storage().ref("files").child(FN).getDownloadURL().then(url =>
            setFileURL(url));
    };
    const handleUploadIssueSuccess = FN => {
        setIssueName(FN)
        firebase.storage().ref("issues").child(FN).getDownloadURL().then(url =>
            setIssueURL(url));
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
    const selectResourceQA = resourceQA => {
        setResourceQA(resourceQA)
    }
    const setHasAnswerSelected = value => {
        setHasAnswer(value)
        if (value === "no") {
            document.getElementById("answerContent").style.display = "none";
        } else {
            document.getElementById("answerContent").style.display = "block";
        }

    }
    const closeModal = () => {
        props.closeModal();
    }
    const submitNewFile = () => {
        var ERP = ERPAddDoc;
        var Resource = resource;
        var URL = fileURL;
        var Filename = filename;
        var title = document.getElementById("titleDoc").value;
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
                        Add.addDocument(ERP, title, Resource, URL, Filename)
                        props.closeModal();
                        alert("UPLOADED SUCCESSFULLY!")
                    }
                }
            }
        }
    }
    const submitNewIssue = () => {
        var ERP = ERPAddIssue;
        var URL = issueURL;
        var issueName = issuename;
        var title = document.getElementById("titleIssue").value;
        var Description = document.getElementById("descriptionIssue").value;
        if (ERP === "") {
            alert("ERP is required.")
        } else {
            if (title === "") {
                alert("Title is required.")
            } else {
                if (Description === "") {
                    alert("Description is required.")
                } else {
                    if (URL === "") {
                        alert("No File uploaded yet.")
                    } else {
                        Add.addIssue(ERP, title, Description, URL, issueName)
                        props.closeModal();
                        alert("UPLOADED SUCCESSFULLY!")
                    }
                }
            }
        }
    }
    const submitQA = () => {
        var ERP = ERPAddQA;
        var Resource = resourceQA;
        var question = document.getElementById("question").value;
        var answer = document.getElementById("answer").value;
        if (ERP === "") {
            alert("ERP is required.")
        } else {
            if (Resource === "") {
                alert("Resource is required.")
            } else {
                if (question === "") {
                    alert("Question is required.")
                } else {
                    if (hasAnswer === "") {
                        alert("Do you have answer?")
                    } else {
                        if (hasAnswer === "yes") {
                            if (answer === "") {
                                alert("Answer is required.")
                            } else {
                                Add.addQA(ERP, question, Resource, true, answer, Resource);
                                props.closeModal();
                                alert("UPLOADED SUCCESSFULLY!");
                            }
                        } else {
                            Add.addQA(ERP, question, Resource, false, "", "");
                            props.closeModal();
                            alert("UPLOADED SUCCESSFULLY!");
                        }
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
                <DropdownResources selectResource={selectResource} />
                </div>
                <TextField id="titleDoc" label="Title" variant="outlined" className={classes.CommonText} />
                <div className={classes.root}>
                    <label><FileUploader
                        name="avatar"
                        className={classes.input}
                        hidden
                        storageRef={firebase.storage().ref("files")}
                        onUploadSuccess={handleUploadDocSuccess}
                        onUploadError={handleUploadFailed}
                    />
                        <Button className={classes.UploadButtonStyle} variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                            Upload
                        </Button>
                    </label>
                </div>
                <label>{filename}</label>
                <div style={{ width: 500, paddingLeft: 300}} className="AddNewButtons">
                    <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                    <Button variant="contained" onClick={submitNewFile} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>

            </Tab>
            <Tab eventKey="Q&A" title="Q&A">
            <div className="NetsuiteButtons">
                    <DropdownERP selectERP={selectERPQA} />
                    <DropdownResources selectResource={selectResourceQA} />                    
                </div>
                    <TextField id="question" label="Question" variant="outlined" className={classes.QuestionText} />
                    <RadioButtons setHasAnswer={setHasAnswerSelected} />
                <div style={{ display: 'none' }} id="answerContent">
                    <TextField
                        id="answer"
                        label="Answer"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="outlined" className={classes.AnswerLineTexts}
                    />
                </div>
                <div style={{ width: 500, paddingLeft: 300}} className="AddNewButtons">
                    <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                    <Button variant="contained" onClick={submitQA} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>
            </Tab>
            <Tab eventKey="Issue" title="Issues">
                <div className="NetsuiteButtons">
                    <DropdownERP selectERP={selectERPIssue} />
                    <TextField id="titleIssue" label="Title" variant="outlined" className={classes.TitleIssue} />
                </div>
                <TextField
                    id="descriptionIssue"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined" className={classes.MultiLineTexts}
                />
                <div className={classes.root}>
                    <label><FileUploader
                        name="avatar"
                        className={classes.input}
                        hidden
                        storageRef={firebase.storage().ref("issues")}
                        onUploadSuccess={handleUploadIssueSuccess}
                        onUploadError={handleUploadFailed}
                    />
                        <Button className={classes.UploadButtonStyle} variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                            Upload
                        </Button>
                    </label>
                </div>
                <label>{issuename}</label>
                <div style={{ width: 500, paddingLeft: 300}} className="AddNewButtons">
                    <Button variant="contained" onClick={closeModal} className={classes.ButtonStyle}>
                        Cancel
                </Button>
                    <Button variant="contained" onClick={submitNewIssue} className={classes.ButtonStyle}>
                        Submit
                </Button>
                </div>
            </Tab>
        </Tabs>
    );
}   