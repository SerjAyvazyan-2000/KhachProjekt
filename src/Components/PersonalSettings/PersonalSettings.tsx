import React, {useState} from 'react';
import personalSettingsImage1 from '../../assets/images/personal-settings-1.png'
import personalSettingsImage2 from '../../assets/images/personal-settings-2.png'
import personalSettingsImage3 from '../../assets/images/personal-settings-3.png'
import personalSettingsImage4 from '../../assets/images/personal-settings-4.png'
import {IPersonalSettings} from "../../models/personal-settings.model";
import './style.scss'
import {MainTitle} from "../MainTitle";
import {EngineCard} from "../EngineCard/EngineCard";
const PersonalSettings = () => {

    const [openModal, setOpenModal] = useState(false)
    const [selectedInfo, setSelectedInfo] = useState<number | null>(null)
    const settingsList: IPersonalSettings[] = [
        {
            title: 'Дизельный двигатель',
            description: 'Опытный образец одноцилиндрового дизельного двигателя 1Д35',
            image: personalSettingsImage1
        },
        {
            title: 'Кросс-эндуро мотоцикл',
            description: 'Опытный образец кросс-эндуро мотоцикла с электрической трансмиссией и временной главной передачей ',
            image: personalSettingsImage2
        },
        {
            title: 'Блок управления',
            description: 'Опытный образец электронного блока управления дизельным двигателем ',
            image: personalSettingsImage4
        },
        {
            title: 'Подвеска',
            description: 'Пневматическая подвеска для прицепов-автодромов',
            image: personalSettingsImage3
        }
    ]

    return (
        <section id={'projects'} className={'personal_settings_section'}>
             <div className='G-container'>
                 <MainTitle tittle='Наши разработки'/>

                  <div className='personal_settings_list'>

                      {settingsList.map((item, index) => {
                          return <EngineCard onClick={() => {
                              setOpenModal(true)
                              setSelectedInfo(index)
                          }} item={item} key={index}/>
                      })}
                  </div>

             </div>
        </section>
    );
};

export default PersonalSettings;