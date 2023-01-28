import './Feedback.css';
import {Container} from "../utils/Container";
import {SectionTitle} from "../utils/titles/SectionTitle";
import {Form} from "../utils/form/Form";
import {Button} from "../utils/buttons/Button";

export const Feedback = () => {
    return (
        <section className='feedback'>
            <Container>
                <div className='feedbackBlock'>
                    <div>
                        <SectionTitle text='Не нашли то, что искали?'/>
                        <h4 className='feedbackSubtitle'>Заполните форму и мы перезвоним вам в течение 30 минут!</h4>
                        <Form className='feedbackForm'>
                            <textarea placeholder='Ваш вопрос  (необязательно)'/>
                            <Button type='submit' text='Отправить' className='feedbackBtn'/>
                        </Form>
                    </div>
                </div>
            </Container>
        </section>
    )
}