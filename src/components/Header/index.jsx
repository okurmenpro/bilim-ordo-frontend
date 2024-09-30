import React from 'react'
import "./Header.scss"
import udemy from "../../assets/images/udemy.png"
import heart from "../../assets/svg/heart.svg"
import korzina from "../../assets/svg/korzina.svg"
import notif from "../../assets/svg/notif.svg"
import LogIn from '../LogIn'


function Header() {
  const categories = ['Разработка', 'Бизнес', 'Финансы и бухгалтерский учет', 'ИТ и ПО', 'Офисное Программное обеспечение']

  const providers = [ 'Udemy Business', 'Преподавайте на Udemy','Мое обучение']
  return (
    <header>
        <div class="container">
            <img src={udemy} alt="" />
           <h3>Категории</h3>
           <input type="search" placeholder='Ищите что угодно' />

           <div className='providers'>
            {providers.map((provider) => <a>{provider}</a>)}
            </div> 

            <div className='icons'>
                <img src={heart} alt="" />
                <img src={korzina} alt="" />
                <img className='not' src={notif} alt="" />
                <LogIn/>
            </div>

        </div>
        <hr />
        <div className='bottom container'>
          {categories.map((category) => <li>{category}</li>)}
        </div>
    </header>
  )
}

export default Header
