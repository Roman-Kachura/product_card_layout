import './Product.css';
import {Container} from "../utils/Container";
import {Images} from "../images/Images";
import {Characteristics} from "../characteristics/Characteristics";

export const Product = () => {
    return (
        <section className='product'>
            <Container>
                <h3 className='productTitle'>Топас-С 4</h3>
                <div className='information'>
                    <Images/>
                    <Characteristics/>
                </div>
            </Container>
        </section>
    )
}