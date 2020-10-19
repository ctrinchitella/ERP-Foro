import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    firstCard: {
        background: grey[900],
        borderColor: 'white',
        maxWidth: '50%',
        color: 'white',
        width: '50%',
        height: 500,
        maxHeight: 500,
        alignItems: 'center',
        verticalAlign: 'middle',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    secondCard: {
        background: 'white',
        maxWidth: '50%',
        color: grey[900],
        width: '50%',
        alignItems: 'center',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        verticalAlign: 'middle',
    },
    textTitle: {
        fontSize: '60px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        paddingTop: 200    
    }
}); 

export default function BootstrapCards() {
    const classes = useStyles();
    return(
        <div className="NetsuiteButtons">
            <Card className={classes.firstCard}>
                <Card.Body>
                    <div className="textCards">
                        <Card.Title className={classes.textTitle}>JDE Tables</Card.Title>
                    </div>
                </Card.Body>
            </Card>
            <Card className={classes.secondCard}>
                <Card.Body>
                    <div className="textCards">
                        <Card.Title className={classes.textTitle}>DSI Integration</Card.Title>
                    </div>                    
                </Card.Body>
            </Card>
        </div>
    );
}