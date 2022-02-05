import React, { useState } from 'react';
import Form from '../Form/Form';
import car from '../../assets/car_img.jpg'
import apart from '../../assets/home_img.jpg'

const Ads = () => {

    const [json, setJson] = useState([])

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/sales`)
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);


    return (
        <div className='flex flex-col mx-32 w-full'>
            <div className='text-3xl my-20'>Объявления</div>
            <Form setJsonAds={setJson} jsonAds={json} />
            <div className='grid grid-cols-3'>
                {json.map(x =>
                    <div key={x.id} className="w-250px">
                        <div>{x.type === "car" ? <img className='h-100px w-100px' src={car} alt="car"/> : <img className='h-100px w-100px' src={apart} alt="apart"/>}</div>
                        <div>
                            <div>Адрес: {x.address}</div>
                            {x.type === 'car' ?
                                <div>
                                    <div>Тип машины: {x.car_type}</div>
                                    <div>Мощность двигателя: {x.engine_power}</div>
                                    <div>Громкость двигателя: {x.engine_volume}</div>
                                    <div>Модель {x.model}</div>
                                </div>
                                :
                                <div>
                                    <div>Количество комнат: {x.rooms}</div>
                                    <div>Площадь: {x.square}</div>
                                </div>}
                            <div>Телефон {x.phone}</div>
                            <div>Цена: {x.price}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ads;