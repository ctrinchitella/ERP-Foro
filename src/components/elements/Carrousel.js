import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 520,
        maxWidth: '100%',
        justifycontent: 'Center',
        display: 'flex',
        background: '#212121',
        objectFit: 'fill',
    }
});


export default function MainCarousel() {
    const classes = useStyles();
        return (
            
            <MDBContainer className={classes.root}>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className={classes.root}
                >
                    <MDBCarouselInner className={classes.root}>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className={classes.root}
                                    src="https://i2.wp.com/www.whatphone.net/wp-content/uploads/2019/11/Oracle.jpg?fit=1024%2C576&ssl=1"
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className={classes.root}
                                    src="https://www.computerworld.es/archivos/201809/oracle-cloud-edificio.jpg"
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className={classes.root}
                                    src="https://noblue.es/wp-content/uploads/2019/02/netsuite-5-star-award-2019.jpg"
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    
};

