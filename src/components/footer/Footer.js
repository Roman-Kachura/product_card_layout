import './Footer.css';
import {Logo} from "../utils/logo/Logo";
import {Button} from "../utils/buttons/Button";
import alfaDigitalLogo from './alfadigital.png';
import vk from './vk.png';
import instagram from './inst.png';
import facebook from './facebook.png';
import youtube from './youtube.png';

const socialIcons = [vk, instagram, facebook, youtube];

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerFirstItem'>
                <Logo className='footerLogo'/>
                <Button text='Заказать звонок' className='footerBtn'/>
            </div>
            <ul>
                <li><a href='/'>Главная</a></li>
                <li><a href='/'>Каталог</a></li>
                <li><a href='/'>Услуги</a></li>
                <li><a href='/'>Расчет стоимости</a></li>
                <li><a href='/'>Консультация архитектора</a></li>
            </ul>
            <ul>
                <li><a href='/'>Экскурсия на объект</a></li>
                <li><a href='/'>3D-макет дома</a></li>
                <li><a href='/'>О нас</a></li>
                <li><a href='/'>Блог</a></li>
                <li><a href='/'>Контакты</a></li>
            </ul>
            <div className='copyright'>
                <h5>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</h5>
                <div className='socialNetworks'>
                    {
                        socialIcons.map((s, i) => {
                            return <a href='/' key={i +'socialIcon'}><img alt='true' src={s}/></a>
                        })
                    }
                </div>
                <h5>Разработка и продвижение сайта:</h5>
                <div className='alfaDigital'>
                    <img alt='true' src={alfaDigitalLogo}/>
                </div>
            </div>
        </footer>
    )
}