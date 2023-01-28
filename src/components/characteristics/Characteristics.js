import './Characteristics.css';
import {Title} from "../utils/titles/Title";

const characteristics = [
    {name: 'Количество пользователей', value: '4 человека'},
    {name: 'Производительность', value: '0.8 м3/сут'},
    {name: 'Объем залпового сброса', value: '175 л.'},
    {name: 'Глубина подводящей трубы', value: '40-80 см'},
    {name: 'Потребляемая электроэнергия', value: '1500 Вт/сут.'}
]

export const Characteristics = () => {
    return (
        <div className='characteristics'>
            <ul className='list'>
                {
                    characteristics.map((c, i) =>
                        <li className='listItem' key={i + 'listItem'}>
                            <div className='name'>{c.name}:</div>
                            <div>{c.value}</div>
                        </li>
                    )
                }
            </ul>
            <div className='price'>Цена: <span>78 030 &#8381;</span></div>
            <div className='description'>
                <Title text='Описание модели' className='descriptionTitle'/>
                <div>
                    Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного модельного
                    ряда, очищают стоки до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до
                    0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в районе 175 литров.
                    Уже отработанную воду можно накапливать в отдельном резервуаре и в дальнейшем использовать
                    для хозяйственных нужд или производить сброс очищенной воды в ливневую канаву (для моделей Пр со встороенным насосом).
                </div>
            </div>
        </div>
    )
}