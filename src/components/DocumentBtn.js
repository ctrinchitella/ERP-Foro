import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { grey } from '@material-ui/core/colors';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
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
        boxShadow: 'none',
        border: 0,
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(100),
            height: theme.spacing(70),
            padding: theme.spacing(2, 4, 3),
        },
    },
    table: {
        minWidth: 800,
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

const columns = [
    { field: 'ERP', headerName: 'ERP', width: 120 },
    { field: 'Title', headerName: 'Title', width: 200 },
    { field: 'Date', headerName: 'Uploaded Date', width: 200 },
    { field: 'Resource', headerName: 'Uploaded By', width: 200 },
];



export default function MediaCard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);

    const handleOpen = () => {
        var files = db.collection("files")
        files.onSnapshot((snapShots) => {
            setRows(snapShots.docs.map(doc => {
                return { id: doc.id, url: doc.data().FileID, ERP: doc.data().ERP, Title: doc.data().Title, Time: doc.data().Date.substring(8, 10) + ":" + doc.data().Date.substring(10, 12), Date: doc.data().Date.substring(6, 8) + "-" + doc.data().Date.substring(4, 6) + "-" + doc.data().Date.substring(0, 4), Resource: doc.data().UploadedBy }
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
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title="Documents"
                    >
                        <IconButton style={{ padding: 0 }}>
                            <FolderIcon className={classes.iconStyle} />
                        </IconButton>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h1">
                                Documents
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
                        <Paper style={{ width: 900}}>
                            <div>
                                <h2>Documents</h2>
                            </div>
                            <div style={{ height: 400, width: '100%', verticalalign: 'middle', marginTop: 40 }}>
                                <DataGrid rows={rows} columns={columns} onSelectionChange={(data) => {
                                    if (data.rows[0] !== undefined) {
                                        document.location.href = data.rows[0].url
                                    }
                                }} pageSize={10} disableMultipleSelection={true} hideFooterSelectedRowCount />
                            </div>
                            <div>
                                <Button variant="contained" onClick={handleClose} className={classes.ButtonStyle}>
                                Close
                                </Button>
                            </div>
                        </Paper>                               
                    </div>
                    
                </Fade>
            </Modal>            
        </div>
    );
}