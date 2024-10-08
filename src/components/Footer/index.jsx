import React from 'react'
import "./Footer.css"
// import { CiGlobe } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";


const Footer = () => {
  return (
    <div >
        <div className='footer container'>
            <div className='info-top'>
                <div className='info-left'>


    <div className='categories'>
                            <ul>
                                <li>
                                    <a href="">Bilim-Ordo Business</a>
                                </li>
                                <li>
                                    <a href="">Преподавайде на Bilim-Ordo</a>
                                </li>
                                <li>
                                    <a href="">скачать приложение</a>
                                </li>
                                <li>
                                    <a href="">О нас</a>
                                </li>
                                <li>
                                    <a href="">Наши координаты</a>
                                </li>
                            </ul>
                        </div>
                        <div className='categories'>
                            <ul>
                                <li>
                                    <a href="">Карьера</a>
                                </li>
                                <li>
                                    <a href="">Блог</a>
                                </li>
                                <li>
                                    <a href="">Справка и поддержка</a>
                                </li>
                                <li>
                                    <a href="">Партнер</a>
                                </li>
                                <li>
                                    <a href="">Инвесторы</a>
                                </li>
                            </ul>
                        </div>

                        <div className='categories'>
                            <ul>
                                <li>
                                    <a href="">Условия использования</a>
                                </li>
                                <li>
                                    <a href="">Политика конфиденциальности</a>
                                </li>
                                <li>
                                    <a href="">Настройки файлов cookie</a>
                                </li>
                                <li>
                                    <a href="">Карта сайта</a>
                                </li>
                                <li>
                                    <a href="">Заявление о доступности</a>
                                </li>
                            </ul>
                        </div>
                   


                    </div>
                    <div className='info-right'>
                        <button className='b1'>
                            {<MdLanguage />}
                            <h3>Русский</h3>
                        </button>
                    </div>
                </div>
                <div className='info-bottom'>
                    <h2><span>B</span>ILIM-ORDO</h2>
                    <p>© 2024 Bilim-Ordo, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
