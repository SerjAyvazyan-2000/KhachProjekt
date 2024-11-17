import React, {useEffect, useState} from 'react';
import './style.scss'

import CoverVideo from '../../assets/video/cover-video.mp4'
import CoverVideoWeb from '../../assets/video/cover-video.webm'
import coverBg from '../../assets/images/cover-bg.png'

const Cover = () => {

    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (window.innerWidth > 767) {
                setIsFixed(window.scrollY >= 101)
            } else {
                setIsFixed(window.scrollY >= 80)
            }
        })
    }, [])
    return (
        <section>
            <div className='G-container stack'>
                <div className="cover_section">
                    <h1>Разработка и исследование поршневых двигателей</h1>
                    <p>силовые установки и транспортные средства на базе силовых установок и электрической тяги</p>
                </div>

                <div className={`cover-bg ${isFixed ? 'fix-cover-image' : ''}`}
                     style={{backgroundImage: `url(${coverBg})`}}/>
            </div>


            <div className='video_block stack'>
                <video autoPlay playsInline loop preload={'true'} muted>
                <source src={CoverVideoWeb} type="video/webm"/>
                    <source src={CoverVideo} type="video/mp4"/>
                </video>
            </div>

            <div className='G-container'>
                <div className="about_engine">
                    <h3>Создаем двигатели будущего уже сегодня. Развиваем российское производство и укрепляем
                        технологическую независимость страны</h3>
                </div>
            </div>


        </section>
    );
};

export default Cover;