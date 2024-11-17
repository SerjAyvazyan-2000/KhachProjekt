import './style.scss'
import {IconLogo} from "../../assets/icons/IconLogo";
import brothersImage from '../../assets/images/brothers.png'

export const WorkshopBrothers = () => {
    return <section className={'workshop-section G-flex'}>
        <div className={'G-container'}>
            <div className={'G-flex workshop-content'}>
                <div className='workshop-info'>
                    <IconLogo size={95}/>
                    <h3>Мастерская братьев Вороновых</h3>
                    <p>Мы братья Алексей и Александр Вороновы. С юных лет мы мечтали создавать технику, сочетающую в себе
                        удобство, надёжность и пользу для общества. Для нас качество – это не просто слова, а принципы,
                        воплощенные в металле. В 2021 году мы открыли свою мастерскую и собрали команду талантливых и
                        увлечённых
                        специалистов.
                    </p>
                    <p> В своей работе делаем ставку на новейшие технологии. Уже на этапе разработки конструкция опытных
                        образцов ориентирована на серийное изготовление высококачественной продукции по доступной цене.</p>
                </div>
                <img src={brothersImage} className='workshop-brothers' alt="brothersImage"/>
            </div>
        </div>
    </section>
}
