import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Doc from './NS.png';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 350,
        maxWidth: '100%'
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
                    className="z-depth-1"
                    className={classes.root}
                >
                    <MDBCarouselInner className={classes.root}>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src={Doc}
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://www.esan.edu.pe/apuntes-empresariales/2018/09/14/1500x844_erp_gestion_proyectos.jpg"
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                                    alt="Max-width 100%"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    
};

