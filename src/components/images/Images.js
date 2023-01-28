import './Images.css';
import img1 from './Rectangle 89.png';
import img3 from './Rectangle 91.png';
import img4 from './Rectangle 92.png';
import img5 from './Rectangle 51.png';
import img6 from './Group 1144.png';
import {Details} from "../details/Details";
import {useState} from "react";
import {Modal} from "../utils/modal/Modal";

const imageArray = [img1, img5, img3, img4, img1, img5, img3, img4, img1, img5, img3, img4];

export const Images = () => {
    const [showImage, setShowImage] = useState(img5);
    const [activeElement, setActiveElement] = useState(1);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const closeModal = () => {
        document.querySelector('html').className = '';
        setIsActiveModal(false);
    }

    const openModal = () => {
        document.querySelector('html').className = 'stopScroll';
        setIsActiveModal(true);
    }
    const changeShowImage = (e, i) => {
        setActiveElement(i);
        setShowImage(e.currentTarget.src);
    }
    return (
        <div className='images'>
            <div className='itemsBlock'>
                {
                    imageArray.map((i, k) => {
                            return <img
                                alt='true'
                                src={i}
                                key={k + 'imagesItem'}
                                className={activeElement === k ? 'imagesItem active' : 'imagesItem'}
                                onClick={(e) => changeShowImage(e, k)}
                            />
                        }
                    )
                }
            </div>
            <div className='showImage'>
                <img alt='true' src={showImage}/>
                <button className='imageButton' onClick={openModal}>
                    <img alt='true' src={img6}/>
                </button>
            </div>
            <Details/>
            <Modal img={showImage} isActiveModal={isActiveModal} closeModal={closeModal}/>
        </div>
    )
}