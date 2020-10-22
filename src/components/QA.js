import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { grey } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import DropdownResources from './elements/DropdownResources.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import db from '../firestore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Edit from './DB/Edit';

const useStyles = makeStyles(theme => ({
    root: {
        background: grey[900],
        maxWidth: '100%',
        width: '100%',
        height: 300,
        color: 'white',
    },
    media: {
        height: 300,
        width: '100%',
        marginTop: '15%',
    },
    iconStyle: {
        width: 125,
        height: 125,
        marginLeft: 0,
        padding: 0,
        color: 'white',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        paddingBottom: 20,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    AnswerLineTexts: {
        width: 500,
        height: 100,
        marginTop: 55,
        marginBottom: 20
    },
    dropdownResource: {
        marginLeft: -20,
        marginTop: -20,

    }, ButtonStyle: {
        backgroundColor: grey[900],
        color: 'white',
        marginLeft: 20,
        width: 150,
        height: 40
    },
}));




export default function MediaCard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAnswer, setOpenAnswer] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [resource, setResource] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedQuestion, setSelectedQuestion] = useState();

    const handleOpen = () => {
        var questions = db.collection("questions")
        questions.onSnapshot((snapShots) => {
            setQuestions(snapShots.docs.map(doc => {
                return { id: doc.id, question: doc.data().Question, answer: doc.data().Answer, questionedby: doc.data().QuestionedBy, answeredby: doc.data().answeredBy, time: doc.data().Date.substring(8, 10) + ":" + doc.data().Date.substring(10, 12), date: doc.data().Date.substring(6, 8) + "-" + doc.data().Date.substring(4, 6) + "-" + doc.data().Date.substring(0, 4), ERP: doc.data().ERP }
            })
            )
        }, error => {
            console.log(error)
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (event, index, question) => {
        setSelectedIndex(index);
        setSelectedQuestion(question);
        handleOpenAnswer()
    };

    const handleOpenAnswer = () => {
        setOpenAnswer(true);
    };
    const handleCloseAnswer = () => {
        setOpenAnswer(false);
    };
    const selectResource = resource => {
        setResource(resource)
    }
    const submitNewAnswer = () => {
        var Resource = resource;
        var answer = document.getElementById("answer").value;
        if (Resource === "") {
            alert("Resource is required.")
        } else {
            if (answer === "") {
                alert("Answer is required.")
            } else {
                Edit.editAnswer(selectedIndex, Resource, answer)
                alert("Answer successfully.")
                setOpenAnswer(false);
            }
        }
    }
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title="QA"
                        indicatorColor="primary"
                    >
                        <IconButton style={{ padding: 0 }}>
                            <QuestionAnswerIcon className={classes.iconStyle} />
                        </IconButton>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Q&A
                            </Typography>
                        </CardContent>
                    </CardMedia>
                </CardActionArea>
            </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div>
                            <h2>Questions and Answers</h2>
                        </div>
                        <React.Fragment>
                            <CssBaseline />
                            <Paper square className={classes.paper} style={{ width: 800, maxHeight: 400, overflow: 'auto' }}>
                                <List className={classes.list}>
                                    {questions.map(({ id, question, answer, questionedby, answeredby, ERP }) => (
                                        <React.Fragment key={id}>
                                            {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                                            {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                                            <ListItem button selected={selectedIndex === id} onClick={(event) => handleListItemClick(event, id, question)}>
                                                <ListItemAvatar>
                                                    <Avatar alt={questionedby} src={questionedby} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <React.Fragment>{ERP} - {question}</React.Fragment>
                                                    }
                                                    secondary={
                                                        <React.Fragment>
                                                            {answer} <br></br>
                                                            <br></br>Answered By: {answeredby}
                                                        </React.Fragment>
                                                    }
                                                />
                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                            <div className="AddNewButtons">
                                <Button variant="contained" onClick={handleClose} className={classes.ButtonStyle}>
                                    Cancel
                                </Button>
                            </div>
                        </React.Fragment>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openAnswer}
                onClose={handleCloseAnswer}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openAnswer}>
                    <div className={classes.paper}>
                        <h2>Answer</h2>
                        <h5>{selectedQuestion}</h5>
                        <div className={classes.dropdownResource}>
                            <DropdownResources selectResource={selectResource} />
                        </div>
                        <TextField
                            id="answer"
                            label="Answer"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="outlined" className={classes.AnswerLineTexts}
                        />
                        <div className="AddNewButtons">
                            <Button variant="contained" onClick={handleCloseAnswer} className={classes.ButtonStyle}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={submitNewAnswer} className={classes.ButtonStyle}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}