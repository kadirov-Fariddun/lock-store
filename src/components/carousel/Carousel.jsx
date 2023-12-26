import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
// short documentation
// children
// porps settings
// class


export default function Carousel(props) {
  const settings = props.settings;
  return (
    <>
      <div className={`carousel ${props.class}`}>
        <Slider {...settings}>
            {props.children}
        </Slider>
      </div>
    </>
  )
}
