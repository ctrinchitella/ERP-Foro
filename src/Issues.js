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

const useStyles = makeStyles({
    root: {
        background: grey[900],
        maxWidth: 345,
        color: 'white',
        width: 250,
    },
    media: {
        height: 80,
        width: 100,
        marginLeft: 80,
        marginTop: 20,
    },
    iconStyle: {
        width: 100,
        height: 100,
        marginLeft: 0,
        padding: 0,
        color: 'white'
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} title="Issues">
                    <IconButton style={{padding:0}}>
                        <BugReportIcon className={classes.iconStyle}/>
                    </IconButton>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Issues
          </Typography>
                </CardContent>
            </CardActionArea>
            
        </Card>
    );
}

/*<CardActions>
    <Button size="small" color="primary">
        PLACEHOLDER
    </Button>
</CardActions>*/