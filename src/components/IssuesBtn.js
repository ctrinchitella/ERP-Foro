import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BugReportIcon from '@material-ui/icons/BugReport';
import { grey, cyan } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import db from '../firestore';

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
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ButtonStyle: {
        backgroundColor: grey[900],
        color: 'white',
        width: 150,
        height: 40,
        marginTop: 15,
        float: 'right',
    },
}));

export default function MediaCard() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [issues, setIssues] = useState([]);
    const [expanded, setExpanded] = React.useState();

    const handleOpen = () => {
        var issues = db.collection("issues")
        issues.onSnapshot((snapShots) => {
            setIssues(snapShots.docs.map(doc => {
                return { id: doc.id, url: doc.data().FileID, ERP: doc.data().ERP, Title: doc.data().Title, Time: doc.data().Date.substring(8, 10) + ":" + doc.data().Date.substring(10, 12), Date: doc.data().Date.substring(6, 8) + "-" + doc.data().Date.substring(4, 6) + "-" + doc.data().Date.substring(0, 4), Description: doc.data().Description, filename:doc.data().FileName }
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
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="Issues">
                        <IconButton style={{ padding: 0 }}>
                            <BugReportIcon className={classes.iconStyle} />
                        </IconButton>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Issues
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
                    <div className={classes.paper} style={{width: '50%'}}>
                        <div>
                            <h2>Issues</h2>
                        </div>
                        <div className={classes.paper}>
                        {issues.map(({ id,url,filename, ERP, Title, Description, Time, Date }) => <Accordion square expanded={expanded === id} onChange={handleChange(id)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"                                    
                                >
                                    <Typography className={classes.heading} style={{color: cyan[600], width:'20%', alignItems:'right'}}>{ERP}</Typography>
                                    <Typography className={classes.heading} style={{width: '50%'}}>{Title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography style={{width: '100%'}}>
                                        {Description} </Typography>
                                </AccordionDetails>
                                <Typography className={classes.heading} style={{width: '100%', paddingLeft:16, color: cyan[600]}}><a href={url}>{filename}</a></Typography>
                            </Accordion> )} 
                        </div>
                        <div style={{backgroundColor: '#FF0000'}}>
                                <Button variant="contained" onClick={handleClose} className={classes.ButtonStyle}>
                                    Close
                                </Button>
                            </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

/*<CardActions>
    <Button size="small" color="primary">
        PLACEHOLDER
    </Button>
</CardActions>*/