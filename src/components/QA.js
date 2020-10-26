import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { grey, cyan } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DropdownResources from './elements/DropdownResources.js';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        width: 150,
        height: 40,
        marginTop: 15,
        float: 'right',
    },
    AnswerButton: {
        backgroundColor: grey[900],
        color: 'white',
        width: 150,
        height: 40,
        float: 'right',
    },
    ButtonStyleAnswer: {
        backgroundColor: grey[900],
        color: 'white',
        width: 150,
        height: 40,
        marginLeft: 15,
        float: 'right', 
    },
}));




export default function MediaCard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAnswer, setOpenAnswer] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [resourceAnswer, setResourceAnswer] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [expanded, setExpanded] = useState();
    const handleOpen = () => {
        var questionsArray = db.collection("questions")
        var q = []
        questionsArray.onSnapshot((snapShots) => {
            q = (snapShots.docs.map(doc => {
                return { id: doc.id, question: doc.data().Question, answer: doc.data().Answer, questionedby: doc.data().QuestionedBy, answeredby: doc.data().answeredBy, timeQuest: doc.data().questionedDate.substring(8, 10) + ":" + doc.data().questionedDate.substring(10, 12), questionedDate: doc.data().questionedDate.substring(6, 8) + "-" + doc.data().questionedDate.substring(4, 6) + "-" + doc.data().questionedDate.substring(0, 4), unformattedDateQuest: doc.data().questionedDate.substring(0, 8),timeAns: doc.data().answeredDate.substring(8, 10) + ":" + doc.data().answeredDate.substring(10, 12), answeredDate: doc.data().answeredDate.substring(6, 8) + "-" + doc.data().answeredDate.substring(4, 6) + "-" + doc.data().answeredDate.substring(0, 4), unformattedDateAns: doc.data().answeredDate.substring(0, 8), ERP: doc.data().ERP }
            })
            )
            setQuestions(q.sort(function (a, b) { return b.unformattedDateQuest - a.unformattedDateQuest }))
        }, error => {
            console.log(error)
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (id, question) => (event) => {
        setSelectedIndex(id);
        setSelectedQuestion(question);
        handleOpenAnswer()
    };
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
    const handleOpenAnswer = () => {
        setResourceAnswer("")
        setOpenAnswer(true);
    };
    const handleCloseAnswer = () => {
        setOpenAnswer(false);
    };
    const selectResource = resource => {
        setResourceAnswer(resource)
    }
    const submitNewAnswer = () => {
        var Resource = resourceAnswer;
        var answer = document.getElementById("answer").value;
        if (Resource === "") {
            alert("Please select your name.")
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
                <div className={classes.paper} style={{width: '70%', height: '90%'}}>
                        <div>
                            <h2>Questions and Answers</h2>
                        </div>

                            <div className={classes.paper} style={{height: '80%', overflow: 'auto'}}>
                                {questions.map(({ id, question, answer, questionedby,hasAnwer, answeredby, ERP, unformattedDateQues, unformattedDateAns, questionedDate, answeredDate  }) => 
                                <Accordion square expanded={expanded === id} onChange={handleChange(id)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading} style={{ color: cyan[600], width: '20%', alignItems: 'right' }}>{ERP}</Typography>
                                        <Typography className={classes.heading} style={{ width: '40%' }}>{question}</Typography>
                                        <Typography variant="subtitle2" style={{ width: '40%',alignItems: 'left',  }}>{questionedby} - {questionedDate}</Typography>
                                        
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <Typography style={{ width: '100%' }}>
                                            {answer} </Typography>
                                            <Button variant="contained" onClick={handleListItemClick(id,question)} className={classes.AnswerButton}>
                                Answer
                                </Button>
                                    </AccordionDetails>
                                    <Typography className={classes.heading} style={{ width: '100%', paddingLeft: 16, color: cyan[600] }}>{answeredby} - {answeredDate}</Typography>
                                </Accordion>)}
                            </div>

                            <Button variant="contained" onClick={handleClose} className={classes.ButtonStyle}>
                                Close
                                </Button>
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
                        <div>                            
                            <Button variant="contained" onClick={submitNewAnswer} className={classes.ButtonStyleAnswer}>
                                Submit
                            </Button>
                            <Button variant="contained" onClick={handleCloseAnswer} className={classes.ButtonStyleAnswer}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}