import './Button.css';

export const CircleButton = ({className, icon, onClick}) => {
    const finalClassName = className ? `circleButton ${className}` : `circleButton`;
    return (
        <button className={finalClassName} onClick={onClick}><img alt='true' src={icon}/></button>
    )
}