import React from 'react';
import {MainTitle} from "../MainTitle";

import partnerImage1 from '../../assets/images/partner-1.svg'
import partnerImage2 from '../../assets/images/partner-2.svg'
import partnerImage3 from '../../assets/images/partner-3.svg'
import partnerImage4 from '../../assets/images/partner-4.svg'
import './style.scss'
import Slider from "react-slick";
const OurPartners = () => {

    let settings = {
        infinite: true,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    return (
        <section className='our_partners'>
            <div className='G-container'>
                <h3>Наши партнёры</h3>
            </div>

            <Slider {...settings}>

                <div className={'partner-slider-component'}>
                    <div className={'partner-slider-item G-justify-center'}>
                        <img src={partnerImage1} alt="partners"/>
                    </div>
                </div>
                <div className={'partner-slider-component'}>
                    <div className={'partner-slider-item G-justify-center'}>
                        <img src={partnerImage2} alt="partners"/>
                    </div>
                </div>
                <div className={'partner-slider-component'}>
                    <div className={'partner-slider-item G-justify-center'}>
                        <img src={partnerImage3} alt="partners"/>
                    </div>
                </div>
                <div className={'partner-slider-component'}>
                    <div className={'partner-slider-item  G-justify-center'}>
                        <img src={partnerImage4} alt="partners"/>
                    </div>
                </div>

            </Slider>
        </section>
    );
};

export default OurPartners;