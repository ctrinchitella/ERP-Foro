import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Doc from 'C:/Users/Augus/ERP-Foro/src/qa.jpg';

const useStyles = makeStyles({
    root: {
        background: 'black',
        maxWidth: 345,
        color: 'white',
        width: 250,
    },
    media: {
        height: 80,
        width: 100,
        marginLeft: 75,
        marginTop: 20,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Doc}
                    title="QA"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Q&A
          </Typography>
                    <Typography variant="body2" component="p">
                        PLACEHOLDER
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    PLACEHOLDER
        </Button>
            </CardActions>
        </Card>
    );
}