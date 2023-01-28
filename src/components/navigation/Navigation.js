import './Navigation.css';
import {Container} from "../utils/Container";

export const Navigation = () => {
    return (
        <section>
            <Container>
                <nav className='navigation'>
                    <a href='/' className='navSelection'>Каталог домов</a>
                    <a href='/' className='navSelection'>Услуги</a>
                    <a href='/' className='navSelection'>О нас</a>
                    <a href='/' className='navLink'>Контакты</a>
                    <a href='/' className='navSelection'>Блог</a>
                </nav>
            </Container>
        </section>
    )
}