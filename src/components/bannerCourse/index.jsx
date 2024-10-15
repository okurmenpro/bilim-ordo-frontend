import React from 'react'
import "./BannerCourse.css"
import { GrLanguage } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { BsExclamationOctagon } from "react-icons/bs";

function index() {
    return (
        <div className='course__banner'>
            <div className='img__text'>
                <p>Разработка</p>
                <img src="" alt="" />
                <p>Языки программирования</p>
                <img src="" alt="" />
                <p>Python</p>
            </div>
            <h1>Полное руководство по Python 3: от новичка до специалиста</h1>
            <h3>Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL</h3>
            <div className='banner__rating'>
                <div className='banner__star'>
                    <button><FaRegStar /></button>
                    <button><FaRegStar /></button>
                    <button><FaRegStar /></button>
                    <button><FaRegStar /></button>
                    <button><FaRegStar /></button>
                </div>
                <h5>(9185 оценок)</h5>
                <p>27 208 студента</p>
            </div>
            <h4>Авторы: Илья Фофанов,DevSchool.Progressive Training Solutions</h4>
            <div className='course__update'>
                <button><BsExclamationOctagon /></button>
                <div>
                <p>Последнее обновление:</p>
                <h5> 04.2023</h5>
                </div>
                <button><GrLanguage /></button>
                <p>русский</p>
            </div>
        </div>
    )
}

export default index
