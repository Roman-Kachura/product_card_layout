import './Details.css';
import {Title} from "../utils/titles/Title";
import {Button} from "../utils/buttons/Button";
import {Form} from "../utils/form/Form";

export const Details = () => {
    return (
        <div className='details'>
            <Title className='detailsTitle' text='Обсудим детали?'/>
            <Form>
                <Button type='submit' text='Хочу обсудить детали'/>
            </Form>
        </div>
    )
}