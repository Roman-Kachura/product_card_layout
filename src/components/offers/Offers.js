import './Offers.css';
import {Container} from "../utils/Container";
import {SectionTitle} from "../utils/titles/SectionTitle";
import {CircleButton} from "../utils/buttons/CircleButton";
import arrowLeft from './Arrow 2.png';
import arrowRight from './Arrow 2-1.png';
import itemImage from './Rectangle 108.png';
import {AppItem} from "../utils/item/AppItem";
import {useState} from "react";

const offersArray = [
    {
        id: 1,
        image: itemImage,
        title: 'Топас-С 4',
        subtitle: 'До 4 человек',
        oldPrice: '86 700',
        price: '78 030',
        characteristics: [
            {name: 'Очистка', value: '0,8 м3/сут'},
            {name: 'Залповый сброс', value: '175 л'}
        ]
    },
    {
        id: 2,
        image: itemImage,
        title: 'Топас-С 4 Пр',
        subtitle: 'До 4 человек',
        oldPrice: '98 300',
        price: '88 470',
        characteristics: [
            {name: 'Очистка', value: '0,8 м3/сут'},
            {name: 'Залповый сброс', value: '175 л'}
        ]
    },
    {
        id: 3,
        image: itemImage,
        title: 'Топас-С 5',
        subtitle: 'До 5 человек',
        oldPrice: '99 500',
        price: '89 550',
        characteristics: [
            {name: 'Очистка', value: '1 м3/сут'},
            {name: 'Залповый сброс', value: '220 л'}
        ]
    },
    {
        id: 4,
        image: itemImage,
        title: 'Топас-С 5',
        subtitle: 'До 5 человек',
        oldPrice: '99 500',
        price: '89 550',
        characteristics: [
            {name: 'Очистка', value: '1 м3/сут'},
            {name: 'Залповый сброс', value: '220 л'}
        ]
    },
    {
        id: 5,
        image: itemImage,
        title: 'Топас-С 5',
        subtitle: 'До 5 человек',
        oldPrice: '99 500',
        price: '89 550',
        characteristics: [
            {name: 'Очистка', value: '1 м3/сут'},
            {name: 'Залповый сброс', value: '220 л'}
        ]
    },
    {
        id: 6,
        image: itemImage,
        title: 'Топас-С 4 Пр',
        subtitle: 'До 4 человек',
        oldPrice: '98 300',
        price: '88 470',
        characteristics: [
            {name: 'Очистка', value: '0,8 м3/сут'},
            {name: 'Залповый сброс', value: '175 л'}
        ]
    },
]

export const Offers = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const gap = 30;
    const showElementsAmount = 3;

    const moveCarousel = (course) => {
        const allItemsAmount = document.querySelectorAll('.offersItem').length;
        const widthItem = document.querySelector('.offersItem').clientWidth;
        const widthCarousel = allItemsAmount * widthItem + gap * (allItemsAmount - 1);
        const widthAllShowElements = widthItem * showElementsAmount + gap * (showElementsAmount - 1);
        if (course === 'left') {
            if (-(leftPosition - widthAllShowElements) < widthCarousel) {
                setLeftPosition(leftPosition - (widthItem + gap));
            }
        }

        if (course === 'right') {
            if (leftPosition + widthAllShowElements < widthAllShowElements) {
                setLeftPosition(leftPosition + (widthItem + gap));
            }
        }
    }

    return (
        <section className='offers'>
            <Container>
                <SectionTitle text='Вам также могут понравиться' className='offersTitle'/>
                <div className='offersBlock'>
                    <CircleButton icon={arrowLeft} className='buttonLeft' onClick={() => moveCarousel('right')}/>
                    <div className='carouselBlock'>
                        <div className='carousel' style={{left: `${leftPosition}px`, gap: `${gap}px`}}>
                            {
                                offersArray.map(
                                    (o, i) => <AppItem
                                        key={o.id + 'item'}
                                        image={o.image}
                                        title={o.title}
                                        subtitle={o.subtitle}
                                        oldPrice={o.oldPrice}
                                        price={o.price}
                                        characteristics={o.characteristics}
                                    />
                                )
                            }

                        </div>
                    </div>
                    <CircleButton icon={arrowRight} className='buttonRight' onClick={() => moveCarousel('left')}/>
                </div>
            </Container>
        </section>
    )
}