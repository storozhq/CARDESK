import React, { useState } from 'react';
import widget from '../../assets/left_widget_img.jpg'
import { Link } from 'react-router-dom';
const Navigation = () => {

    const [json, setJson] = useState({});

    React.useEffect(() => {
        fetch('https://demo-api.vsdev.space/api/brom/left_widget')
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);


    return (
        <div className='flex justify-center bg-sky'>
            <div className='text-xl h-screen mx-20 '>
                <ul className='flex my-auto flex-col'>
                    <li className='text-xl my-8'><Link to="/">Главная</Link></li>
                    <li className='text-xl'><Link to="/about">О нас</Link></li>
                    <li className='text-xl my-8'><Link to="/ads">Объявления</Link></li>
                </ul>
                <div className='my-4 text-xl w-270px'>Количество объявлений<br /> в базе brom.ru</div>
                <img src={widget} />
                <ul>
                    <li>Автомобили: {json.cars}</li>
                    <li>Квартиры: {json.apartments}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;