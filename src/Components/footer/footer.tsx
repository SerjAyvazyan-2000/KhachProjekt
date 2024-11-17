import React from 'react';
import {IconArrowSliderLeft} from "../../assets/icons/IconArrowSliderLeft";
import './style.scss'
import {Stack} from "../Stack/stack";
import {IconLogo} from "../../assets/icons/IconLogo";
const Footer = () => {


    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function handleClick(projects: string) {

    }

    return (
        <footer id='contacts'>
            <Stack className={'footer-tittle'} width={"fill"}>
                <Stack className={'G-container'} width={"fill"} justify={"space-between"} direction={"row"}>
                    <h3>
                        Контакты
                    </h3>
                    <Stack className={'go-top-content'} direction={"row"} align={"center"} gap={30} onClick={handleScrollTop}>
                        <span><IconArrowSliderLeft size={20}/></span>
                    </Stack>
                </Stack>

            </Stack>

            <Stack className={'footer-information'}>
                <Stack className={'G-container'} width={"fill"}>
                    <Stack className={'footer-information-content'} direction={"row"} gap={20} justify={"space-between"}
                           width={"fill"} align={"end"}>
                        <Stack className={'footer-menu'}>
                            <ul>
                                <li onClick={() => {
                                    handleClick('projects')
                                }}>Проекты
                                </li>
                                <li onClick={() => {
                                    handleClick('advantages')
                                }}>Преимущества
                                </li>
                                <li onClick={() => {
                                    handleClick('about-us')
                                }}>О компании
                                </li>
                                <li onClick={() => {
                                    handleClick('our-team')
                                }}>Команда
                                </li>
                                <li onClick={() => {
                                    handleClick('contacts')
                                }}>Контакты
                                </li>
                            </ul>
                        </Stack>
                        <Stack className={'footer-address'}>
                            <span>Офис</span>
                            <p>ООО “Мастерская Вороновых”
                                119423, Москва, ул. Ленинградский проспект, 22А</p>
                            <span className={'footer-address-title'}>график работы</span>
                            <p>Пн-Пт — С 8:00 до 17:00
                                Сб-Вс — Выходной</p>
                        </Stack>
                        <Stack className={'footer-contact'} justify={"end"} align={"end"}>
                            <Stack className={'go-top-content'} direction={"row"} align={"center"} gap={30} onClick={handleScrollTop}>
                                <p>Наверх</p>
                                <span><IconArrowSliderLeft size={20}/></span>
                            </Stack>
                            <a href="tel:8 (800) 999 99 99">8 (800) 999 99 99</a>
                            <a href="mailTo:info@voronovcraft.com">info@voronovcraft.com</a>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={'footer-end'} width={"fill"}>
                <Stack className={'G-container'} width={"fill"}>
                    <div className={'footer-end-content'}>
                        <Stack className={'footer-left'} direction={"row"} align={"center"} gap={55}>
                            <IconLogo size={42}/>
                            <h3>2024, Все права защищены</h3>
                        </Stack>
                        <Stack className={'footer-right'} direction={"row"} align={"center"} gap={8}>
                            <h3>сайт разработан</h3>
                            <p>ƒ∅rmuλa</p>
                        </Stack>
                    </div>
                </Stack>
            </Stack>
        </footer>
    );
};

export default Footer;