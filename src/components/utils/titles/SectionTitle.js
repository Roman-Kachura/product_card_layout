import './Title.css';

export const SectionTitle = ({className, text}) => {
    const finalClassName = className ? `${className} sectionTitle` : `sectionTitle`;
    return (
        <h4 className={finalClassName}>{text}</h4>
    )
}