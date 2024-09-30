import React, { useState } from 'react';
import "./CourseMaterials.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { materials } from '../../data/material';
import { IoDocumentOutline } from "react-icons/io5";

function Index() {
    // Состояние для отслеживания видимости каждого раздела
    const [visibleSections, setVisibleSections] = useState({});

    // Функция для переключения видимости конкретного раздела
    const toggleSectionVisibility = (index) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Инвертируем видимость
        }));
    };

    return (
        <div className='materials'>
            <h2>Материалы курса</h2>
            <div className='materials__text'>
                <p>21 раздел • 217 лекций • Общая продолжительность 38 ч 48 мин</p>
                <h4>Развернуть все разделы</h4>
            </div>
            <div className='materials__div'>
                {materials.map((x, index) => (
                    <div key={index}>
                        <div className='div__mini'>
                            <div className='mini__img'>
                                <button onClick={() => toggleSectionVisibility(index)}>
                                    <MdKeyboardArrowDown />
                                </button>
                                <h3>{x.title}</h3>
                            </div>
                            <h6>{x.lesson}</h6>
                        </div>

                        {/* Условное отображение блока на основе состояния */}
                        {visibleSections[index] && (
                            <div className='div__mini'>
                                <div className='mini__img'>
                                    <button className='document'><IoDocumentOutline /></button>
                                    <p>Скачать исходный код</p>
                                </div>
                                <p>00:04</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
