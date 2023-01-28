import image from './logo.png';

export const Logo = ({className}) => {
    return (
        <div className={className}>
            <img src={image} alt='logo' style={{width:'100%', height:'100%'}}/>
        </div>
    )
}