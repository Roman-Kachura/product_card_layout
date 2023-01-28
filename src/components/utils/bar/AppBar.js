import './AppBar.css';
import img1 from './Vector (4).png';
import img2 from './Vector (5).png';
import img3 from './Vector (6).png';
import img4 from './Group 1090.png';

const barIcons = [img1, img2, img3, img4];

export const AppBar = () => {
    return (
        <aside className='appBar'>
            {
                barIcons.map((b, i) => <a className='appBarLink' key={i + 'appBarLink'} href='/'><img alt='' src={b}/></a>)
            }
        </aside>
    )
}