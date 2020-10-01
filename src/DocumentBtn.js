import React from 'react';
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
        minWidth: 650,
    },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'docName', headerName: 'Document Name', width: 150 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'createdBy', headerName: 'Created By', width: 200 },
];

const rows = [
    { id: 1, date: '9/30/2020', docName: 'Test1.docx', createdBy: 'Augusto Hontalvilla' },
    { id: 2, date: '9/30/2020', docName: 'Test2.docx', createdBy: 'Augusto Hontalvilla' },
    { id: 3, date: '9/30/2020', docName: 'Test3.docx', createdBy: 'Augusto Hontalvilla' },
    { id: 4, date: '9/30/2020', docName: 'Test4.docx', createdBy: 'Augusto Hontalvilla' },
    { id: 5, date: '9/30/2020', docName: 'Test5.docx', createdBy: 'Augusto Hontalvilla' },
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
        <div>
            <Card className={classes.root} onClick={handleOpen}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title="Documents"
                    >
                        <IconButton style={{ padding: 0 }}>
                            <FolderIcon className={classes.iconStyle} />
                        </IconButton>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Documents
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
                                <h2>Documents</h2>
                            </div>
                            <div style={{ height: 400, width: '100%', verticalalign:'middle',  marginTop: 40 }}>
                                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                            </div>
                        </Paper>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}