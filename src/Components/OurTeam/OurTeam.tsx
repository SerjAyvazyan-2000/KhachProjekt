import React, {useEffect, useRef, useState} from 'react';
import './style.scss'
import teamMemberImage1 from '../../assets/images/team-member-1.png'
import teamMemberImage2 from '../../assets/images/team-member-2.png'
import teamMemberImage3 from '../../assets/images/team-member-3.png'
import Slider from "react-slick";
import {IconArrowSliderRight} from "../../assets/icons/IconArrowSliderRight";
import {IconArrowSliderLeft} from "../../assets/icons/IconArrowSliderLeft";
import {Stack} from "../Stack/stack";

interface ITeamItem {
    name: string;
    position: string;
    image: string;
}

const OurTeam = () => {
    const slider = useRef<Slider>(null);
    let settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (data: number) => {
            setActiveSlider(data + 1)
        },

        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 2,
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

    const [activeSlider, setActiveSlider] = useState(1)
    const ourTeamList: ITeamItem[] = [
        {
            name: 'Алексей Воронов',
            position: 'Основатель',
            image: teamMemberImage1
        }, {
            name: 'Александр Воронов',
            position: 'Основатель',
            image: teamMemberImage2
        }, {
            name: 'Михаил Сидоров',
            position: 'Главный инженер',
            image: teamMemberImage3
        },
        {
            name: 'Алексей Воронов',
            position: 'Основатель',
            image: teamMemberImage1
        }, {
            name: 'Александр Воронов',
            position: 'Основатель',
            image: teamMemberImage2
        }, {
            name: 'Михаил Сидоров',
            position: 'Главный инженер',
            image: teamMemberImage3
        },
    ]



    return (
        <section className='our-team-section'>
            <div className='G-container'>
                <div className='our-team-content'>

                    <div className={'our-team-info'}>

                        <div className={'our-team-title'}>
                            <h3>Наша команда</h3>
                            <p>Действуем быстро и эффективно.</p>
                        </div>

                    </div>
                    <Stack className="slider-options">

                        <Stack direction={'row'} align={'end'} className="slider-counter">
                            <h3>0{activeSlider}</h3>
                            <p>/ 0{ourTeamList.length}</p>
                        </Stack>
                        <Stack direction={'row'} gap={15} className="slider-row">
                            <div className='arrow-left'   onClick={() => {
                                slider?.current?.slickNext()
                            }}>
                                <IconArrowSliderLeft size={16}/>
                            </div>
                            <div className='arrow-right' onClick={() => {
                                slider?.current?.slickPrev()
                            }}>

                                <IconArrowSliderRight size={16}/>
                            </div>
                        </Stack>

                    </Stack>

                    <div className={'our-team-slider'}>
                        <Slider {...settings} ref={slider}>
                            {ourTeamList.map((item, index) => {
                                return <div className={'team-member-content'} key={index}>
                                    <Stack className={'team-member-item'}>
                                        <img src={item.image} alt="team-member"/>
                                        <h3>{item.name}</h3>
                                        <p>{item.position}</p>
                                    </Stack>
                                </div>
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;