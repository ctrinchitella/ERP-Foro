import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Doc from './issues.jpg';
import IconButton from '@material-ui/core/IconButton';
import BugReportIcon from '@material-ui/icons/BugReport';
import { grey } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        background: grey[900],
        maxWidth: 345,
        width: 250,
        color: 'white',
    },
    media: {
        height: 80,
        width: 100,
        marginLeft: 75,
        marginTop: 20,
    },
    iconStyle: {
        width: 100,
        height: 100,
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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function MediaCard() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="Issues">
                        <IconButton style={{ padding: 0 }}>
                            <BugReportIcon className={classes.iconStyle} />
                        </IconButton>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Issues
          </Typography>
                    </CardContent>
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
                        <Paper>
                            <div>
                                <h2>Issues</h2>
                            </div>
                            <div className={classes.root}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
          </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className={classes.heading}>Accordion 2</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
          </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography className={classes.heading}>Disabled Accordion</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </div>
                        </Paper>
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