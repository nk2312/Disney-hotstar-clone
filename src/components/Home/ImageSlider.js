import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src="/images/slider-scale.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/slider-scales.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/slider-badging.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/slider-badag.jpg"/>
        </Wrap>
        <Wrap>
            <img src="/images/slider-scales.jpg"/>
        </Wrap>
    </Carousel>
  )
}


const Carousel=styled(Slider)`
margin-top:20px;

.slick-dots li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:visible;
}
button{
    z-index:1;
}
`

const Wrap=styled.div`
img{
    width:100%;
    height:100%;
    over-flow:visibile;
    border-radius:10px;
    box-shadow: 0px 2px 8px rgb(0 0 0 / 50%);
    border:1px solid transparent;
    transition-duration:500ms;
}
&:hover{
    border:4px solid #fff;
}`

export default ImageSlider