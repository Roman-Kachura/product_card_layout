import './Modal.css';

export const Modal = ({img, isActiveModal, closeModal}) => {
    return (
        <div className={isActiveModal ? 'modal active' : 'modal'}>
            <button onClick={closeModal}>&#10006;</button>
            <img alt='true' src={img}/>
        </div>
    )
}