import {Logo} from "../utils/logo/Logo";
import {Container} from "../utils/Container";
import './Header.css';
import orderImage from './order.png';
import phoneImage from './Phone.png';
import whatsupImage from './Whatsup.png';
import telegramImage from './Telegram.png';
import viberImage from './Viber.png';
import {Button} from "../utils/buttons/Button";

const images = [whatsupImage, telegramImage, viberImage];

export const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className='flexContainer'>
                    <Logo className='logo'/>
                    <div className='schedule'>
                        <div>Пн-Сб: c 10:00 до 20:00</div>
                        <div>Выходной: воскресенье</div>
                    </div>
                    <div className='order'>
                        <div className='orderCircle'><img src={orderImage} alt='true'/></div>
                        <a className='orderLink' href='/'>Заказать 3D-макет дома</a>
                    </div>
                    <div className='contact'>
                        <div className='contactCircle'>
                            <div className='contactInsideCircle'>
                                <img src={phoneImage} alt='true'/>
                            </div>
                        </div>
                        <div className='contactInfo'>
                            <h3 className='contactTel'>+7 (915) 168-55-50</h3>
                            <div className='contactSocial'>
                                {
                                    images.map((b, i) =>
                                        <a
                                            key={i + 'contactSocial'}
                                            href='/'
                                            className='contactSocialLink'>
                                            <img alt='true' src={b}/>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <Button text='Заказать звонок'/>
                </div>
            </Container>
        </header>
    )
}