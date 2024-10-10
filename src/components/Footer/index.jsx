import React from 'react'
import "./Footer.css"

import { MdLanguage } from "react-icons/md";
import Nasdaq from "../../assets/images/nasdaq.png"
import Volkswagen from "../../assets/images/volkswagen.png"
import Box from "../../assets/images/box.png"
import NetApp from "../../assets/images/netApp.png"
import Eventbrite from "../../assets/images/eventbrite.png"


const Footer = () => {
  return (
    <footer className='footer' >
        <div className='footer-business'>
        <div className='footer-business2'>
         <div className='footer-business-strong'>
                <strong>Top companies choose <span> Bilim-ordo Business</span> to build in-demand career skills. </strong>
            </div>
            <div className='footer-business-img'>
             <img className='footer-png1' src={Nasdaq} alt="nasdaq" />
              <img className='footer-png2' src={Volkswagen} alt="volkswagen" />
              <img className='footer-png3' src={Box} alt="box" />
              <img className='footer-png4' src={NetApp} alt="netApp" />
              <img className='footer-png4' src={Eventbrite}alt="eventbrite" />
            </div>
         </div>
        </div>
        <div className='footer '>
            <div className='info-top'>        
       <div className='info-left'>
       <div className='categori'>
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
                    <div className='categori'>
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
                    <div className='categori'>
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
                    <button className='btn'>
                    {<MdLanguage    />}
                    <h3>Русский</h3>
                    </button>
                </div>
            </div>
            <div className='info-bottom'>
                <strong><span>B</span>ILIM-ORDO</strong>
                <p>© 2024 Bilim-Ordo, Inc.</p>
            </div>
        </div>      
    </footer>
  )
}

export default Footer
