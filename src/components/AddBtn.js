import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { grey } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MultiTabBar from './MultiTabsAddNew.js';

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
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 'auto'
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
        <div style={{width:'100%', height:'100%'}}>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="Add">
                        <IconButton style={{ padding: 0 }}>
                            <NoteAddIcon className={classes.iconStyle} />
                        </IconButton>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Add New
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
                        <h2>Add New</h2>
                        <MultiTabBar/>
                        
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}