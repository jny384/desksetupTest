import React from "react";
// import left from "../dummy/leftbutton.png"
// import right from "../dummy/rightbutton.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Slider from 'react-slick';
// // import Slider from 'react'
//
export function SlideComponent() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className="container">
            {/*<Slider {...settings}>*/}
                <div>
                    <img src="man.jpg" alt="" />
                </div>
                <div>
                    <img src="man2.jpg" alt="" />
                </div>
                <div>
                    <img src="woman.jpg" alt="" />
                </div>
                <div>
                    <img src="woman2.jpg" alt="" />
                </div>
            {/*</Slider>*/}
        </div>
    );
    //
    // return(
    //     <>
    //         <div className="slide">
    //             <button className="button_left"><img src={left}/></button>
    //             <button className="button_right"><img src={right}/></button>
    //
    //         </div>
    //     </>
    // )
}