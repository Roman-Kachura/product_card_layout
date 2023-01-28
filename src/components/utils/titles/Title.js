import './Title.css';

export const Title = ({className, text}) => {
    const finalClassName = className ? `${className} title` : `title`;
    return (
        <h4 className={finalClassName}>{text}</h4>
    )
}