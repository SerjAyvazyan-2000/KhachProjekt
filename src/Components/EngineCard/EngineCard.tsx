import './style.scss'
import {IPersonalSettings} from "../../models/personal-settings.model";
import {IconArrowRight} from "../../assets/icons/IconArrowRight";
import {IconMoreInfo} from "../../assets/icons/IconMoreInfo";
import {useState} from "react";

interface Props{
    item:IPersonalSettings,
    onClick():void
}
export const EngineCard = ({item, onClick}:Props) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={'engine-card G-flex-column G-justify-between'}>
            <div  className={'engine-info'} >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{backgroundImage:`url(${item.image})`}} className={'engine-image'}/>
            </div>

            <div className={'mobile-show-more'} onClick={onClick}>
                <IconMoreInfo size={45}/>
            </div>

            <div className='more-info' onClick={onClick} >
                <p>Подробнее</p>
                <IconArrowRight size={16}/>
            </div>
        </div>
    )
}