import './Button.css';

export const Button = ({className, text, type}) => {
    const finalClassName = className ? `button ${className}` : `button`;
    return (
        <button type={type} className={finalClassName}>{text}</button>
    )
}