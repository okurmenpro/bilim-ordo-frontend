import React from 'react'
import "./Footer.scss"

import { MdLanguage } from "react-icons/md";
import Nasdaq from "../../assets/images/nasdaq.png"
import Volkswagen from "../../assets/images/volkswagen.png"
import Box from "../../assets/images/box.png"
import NetApp from "../../assets/images/netApp.png"
import Eventbrite from "../../assets/images/eventbrite.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const image  = [
    {
        image: ""
    }
]

const Footer = () => {
  return (
    <footer className='footer  active' >
        <div className='footer-business'>
            <div className='top-footer-media'>
                <strong>Follow us</strong>
                <div className='footer_media_icons'>
                    <span><FaLinkedinIn/></span>
                    <span><FaFacebookF/></span>
                    <span><FaTwitter/></span>
                    <span><FaInstagram/></span>
                </div>
            </div>
        <div className='lines'></div>
        <div className='footer-business2'>
         <div className='footer-business-strong'>
                <strong className='media-top'>Top companies choose <span> Bilim-ordo Business</span> to build in-demand career skills. </strong>
                <div  className='media-code'>
                    <span   id='media-icon'>
                {<MdLanguage />}
                    </span>
                <strong className='media_top'> English</strong>
                </div>
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
       <div className='categories'>
                        <ul>
                        <li>
                                <a href="">Bilim-Ordo Business</a>
                            </li>
                            <li>
                                <a href="">Преподавайте на Bilim-Ordo</a>
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
                    <div>Русский</div>
                    </button>
                </div>
            </div>
            <div className='info-bottom'>
                <strong><span className='first-letter'>B</span>ILIM-ORDO</strong>
                <p>© 2024 Bilim-Ordo, Inc.</p>
            </div>
        </div>   
    </footer>
  )
}

export default Footer
