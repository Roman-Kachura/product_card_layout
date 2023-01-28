import './Item.css';
import {Title} from "../titles/Title";

export const AppItem = ({image,title,subtitle,oldPrice,price,characteristics}) => {
    return (
        <article className='offersItem'>
            <div className='offersItemInformation'>
                <div className='offersItemImage'>
                    <img alt='true' src={image}/>
                </div>
                <div className='offersItemText'>
                    <Title text={title} className='offersItemTitle'/>
                    <h4 className='offersItemSubtitle'>{subtitle}</h4>
                    <div className='offersItemOldPrice'>{oldPrice} &#8381;</div>
                    <div className='offersItemPrice'>{price} &#8381;</div>
                    <ul className='offersItemCharacteristics'>
                        {characteristics.map((c,i) => <li key={i + 'characteristic'}><b>{c.name}:</b>{c.value}</li>)}
                    </ul>
                </div>
            </div>
            <div className='offersItemLinksBlock'>
                <a href='/' className='moreInformation'>Подробнее</a>
                <a href='/' className='toBuy'>Заказать</a>
            </div>
        </article>
    )
}