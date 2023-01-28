import './Form.css';

export const Form = ({children, className}) => {
    const finalClassName = className ? `${className} form` : 'form';
    return (
        <form className={finalClassName}>
            <input name='name' placeholder='Ваше имя'/>
            <input name='phone' placeholder='Номер телефона'/>
            {children}
        </form>
    )
}