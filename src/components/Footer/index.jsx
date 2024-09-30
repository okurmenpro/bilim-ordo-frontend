import React from 'react'
import "./Footer.css"
// import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <div >
        <div className='footer'>
            <div className='info-top'>
                <div className='info-left'>

                    <div className='a1'>
                        <ul>
                        <li>
                                <a href="">Udemy Business</a>
                            </li>
                            <li>
                                <a href="">Преподавайде на Udemy</a>
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
                    <div className='a1'>
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

                    <div className='a1'>
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
                    {/* <CiGlobe className='icon1'/>                         */}
                    <h3>Русский</h3>
                    </button>
                </div>
            </div>
            <div className='info-bottom'>
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
                <p>© 2024 Udemy, Inc.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
