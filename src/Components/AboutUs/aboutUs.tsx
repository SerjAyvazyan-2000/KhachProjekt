import React from 'react';
import './style.scss'
import aboutUsImage from '../../assets/images/about-us-bg.png'
import {MainTitle} from "../MainTitle";
import {IconLaboratory} from "../../assets/icons/IconLaboratory";
import {IconMarker} from "../../assets/icons/IconMarker";
import {IconPower} from "../../assets/icons/IconPower";

const AboutUs = () => {
    return <section className='about-section'>
        <div className='G-container'>
            <MainTitle tittle="Что делает нас уникальными" className={'about-us-tittle'} />
            <div className="info_content">
                <div className="info-Box">
                    <IconLaboratory size={43}/>
                    <h3>Собственная лаборатория</h3>
                    <p>
                        Мы работаем в современной производственной лаборатории, оснащенной
                        станочным парком и испытательным оборудованием.{" "}
                    </p>
                </div>
                <div className="info-Box">
                    <IconMarker size={43}/>
                    <h3>Широкая область применения</h3>
                    <p>
                        Наши двигатели пригодятся в военной, дорожной, строительной,
                        автомобильной сфере, а также в энергетике.
                    </p>
                </div>
                <div className="info-Box">
                    <IconPower size={43}/>
                    <h3>Высокая мощность</h3>
                    <p>
                        Производим опытные партии двигателей мощностью до 100 кВт, проводим
                        конструкторские и технологические испытания.
                    </p>
                </div>

            </div>
        </div>

        <div className={'about-us-bg'} style={{backgroundImage: `url('${aboutUsImage}')`}}/>

    </section>
};

export default AboutUs;