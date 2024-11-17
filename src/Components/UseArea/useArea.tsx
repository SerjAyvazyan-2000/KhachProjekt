import React, {useEffect, useState} from 'react';
import {MainTitle} from "../MainTitle";
import {IconVehicles} from "../../assets/icons/IconVehicles";
import tractorImage from "../../assets/images/Tractor.jpg";
import {IconTractor} from "../../assets/icons/IconTractor";
import {IconGenerators} from "../../assets/icons/IconGenerators";
import IconRobot from "../../assets/images/robot.svg";
import {IconMotorcycles} from "../../assets/icons/IconMotorcycles";
import  './style.scss'
interface IAreaItem {
    title: string
    description: string
    image: string
    icon: React.ReactNode,
    id: number
}
const UseArea = () => {

    const [selectedArea, setSelectedArea] = useState<IAreaItem | null>(null)

    const useAreaList = [
        {
            title: 'Транспортные средства',
            description: 'Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <IconVehicles/>,
            id: 0
        },
        {
            title: 'Тракторы',
            description: 'Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <IconTractor/>,
            id: 1

        },
        {
            title: 'Генераторы',
            description: 'Наши двигатели пригодятся для тракторов Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <IconGenerators/>,
            id: 2

        },
        {
            title: 'Роботы',
            description: 'Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <span className={'robot-icon'} style={{backgroundImage: `url('${IconRobot}')`}}/>,
            id: 3

        },
        {
            title: 'Мотоциклы',
            description: 'Наши двигатели пригодятся для тракторов Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <IconMotorcycles/>,
            id: 4

        },
        {
            title: 'Транспортные средства',
            description: 'Наши двигатели пригодятся для тракторов',
            image: tractorImage,
            icon: <IconVehicles/>,
            id: 5

        },
    ]

    useEffect(() => {
        setSelectedArea(useAreaList[0])
    }, [])

    return (
            <section id={'about-us'}>
                <div className='G-container'>
                    <div className="usearea-section">
                        <MainTitle tittle="Области применения" className={'usearea-title'}/>

                        <div className={'usearea-options'} >
                            <div className={'usearea-list'} onMouseLeave={() => {
                                setSelectedArea(useAreaList[0])
                            }}>
                                <ul>
                                    {useAreaList.map((item, index) => {
                                        return <li key={index}
                                                   className={`G-align-center ${selectedArea?.id === item.id ? 'selected-usearea' : ''}`}
                                                   onMouseEnter={() => {
                                                       setSelectedArea(item)
                                                   }}
                                        >
                                            <div className={'usearea-icon-content'}>
                                         <span className={'usearea-icon G-center'}>
                                        {item.icon}
                                    </span>
                                                <span className={'circle-select'}/>

                                            </div>
                                            <p>{item.title}</p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div className={'usearea-selected'}
                                   style={{backgroundImage: `url('${selectedArea?.image}')`}}>
                                <p>{selectedArea?.description}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default UseArea;