import React from 'react'
import './BannerCom.css'
// import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../slider';
import Header from '../Header/Header';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import 'bootstrap/dist/css/bootstrap.min.css';


function BannerCom() {
    return (
        <>
            <Header/>
            <Slider/>
        </>
    )
}

export default BannerCom