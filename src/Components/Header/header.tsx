import React, {useEffect, useState} from 'react';
import './style.scss'
import Logo from '../../assets/images/logo.svg'
import bgImage from '../../assets/images/cover-bg.png'

const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
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

    const handleClick = (elementId: string) => {
        const element = document.getElementById(elementId)
        if (element) {
            let headerOffset = 100;
            let elementPosition = element.getBoundingClientRect().top;
            let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    const handleClickMenu = (title:string)=>{
        handleClick(title)
        if(window.innerWidth<767){
            setIsOpenMenu(false)
            document.body.classList.toggle('G-hidden')
        }
    }

    return (
        <header className={`header ${isFixed ?  'fixed_header' : ''}`}>
               <div className='G-container'>
                   <div className="header_block">
                       <div className="logo_content">
                           <img src={Logo} alt="ogo"/>
                           <p>Мастерская братьев Вороновых</p>
                       </div>
                       <div className={`menu_content ${isOpenMenu ? 'show_menu' : ''}`  }>
                           <div className={'mobile_menu_bg'} style={{backgroundImage: `url('${bgImage}')`}}/>
                           <div className="header-mobile-scroll">
                               <ul className={'menu-list G-flex'}>
                                   <li onClick={() => {
                                       handleClickMenu('projects')
                                   }}>Проекты
                                   </li>
                                   <li onClick={() => {
                                       handleClickMenu('advantages')
                                   }}>Преимущества
                                   </li>
                                   <li onClick={() => {
                                       handleClickMenu('about-us')
                                   }}>О компании
                                   </li>
                                   <li onClick={() => {
                                       handleClickMenu('our-team')
                                   }}>Команда
                                   </li>
                                   <li onClick={() => {
                                       handleClickMenu('contacts')
                                   }}>Контакты
                                   </li>
                               </ul>
                               <div className={'header_links'}>
                                   <div className={'header_links_content'}>
                                       <a href="tel:8 (800) 999 99 99">8 (800) 999 99 99</a>
                                       <a href="mailTo:info@voronovcraft.com">info@voronovcraft.com</a>
                                   </div>
                               </div>

                           </div>
                       </div>

                       <div className={`toggle_menu ${isOpenMenu ? 'open_burger' : ''}`} onClick={() => {
                           setIsOpenMenu(!isOpenMenu)
                           document.body.classList.toggle('G-hidden')
                       }}>
                           <span/>
                           <span/>
                       </div>
                   </div>
               </div>
        </header>
    );
};

export default Header;