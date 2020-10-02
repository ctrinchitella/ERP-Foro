import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Doc from './qa.jpg';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { grey } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

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
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const messages = [
    {
        id: 1,
        primary: 'Tokens?',
        secondary: "How can I generate new Tokens in NS",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Default Info',
        secondary: `Which  default information should I send into an oracle cloud service`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'JDE Table',
        secondary: 'How can I register a JDE table in MEP to see? Also I can I create a view in SQL joinin different tables?',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Best Practices',
        secondary: 'What are the best practices to use JD Edwards tables in DSI?',
        person: '/static/images/avatar/3.jpg',
    }
];


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
                            <Paper square className={classes.paper}>
                                <List className={classes.list}>
                                    {messages.map(({ id, primary, secondary, person }) => (
                                        <React.Fragment key={id}>
                                            {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                                            {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                                            <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar alt="Profile Picture" src={person} />
                                                </ListItemAvatar>
                                                <ListItemText primary={primary} secondary={secondary} />
                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                        </React.Fragment>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}