import React from 'react'
import "./Header.scss"
import udemy from "../../assets/images/udemy.png"
import heart from "../../assets/svg/heart.svg"
import korzina from "../../assets/svg/korzina.svg"
import notif from "../../assets/svg/notif.svg"

function Header() {
  return (
    <header>
        <div class="container">
            <img src={udemy} alt="" />
           <h3>Категории</h3>
           <input type="search" placeholder='Ищите что угодно' />
           <h3>Udemy Business</h3>
           <h3>Преподавайте на Udemy</h3>
           <h3>Мое обучение</h3>
            <div className='icons'>
                <img src={heart} alt="" />
                <img src={korzina} alt="" />
                <img className='not' src={notif} alt="" />
            </div>
        </div>
        <hr />
        <div className='bottom container'>
            
                <li>Разработка</li>
                <li>Бизнес</li>
                <li>Финансы и бухгалтерский учет</li>
                <li>ИТ и ПО</li>
                <li>Офисное Программное обеспечение</li>
                <li>Личностный рост</li>
                <li>Дизайн</li>
                <li>Маркетинг</li>
                <li>Здоровье и фитнес</li>
                <li>Музыка</li>
        </div>
    </header>
  )
}

export default Header
