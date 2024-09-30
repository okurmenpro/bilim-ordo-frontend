import React from 'react'
import "./Header.scss"
import udemy from "../../assets/images/udemy.png"
// import heart from "../../assets/svg/heart.svg"
import korzina from "../../assets/svg/korzina.svg"
import notif from "../../assets/svg/notif.svg"
import { Link } from 'react-router-dom'

function Header() {
  const categories = ['Разработка', 'Бизнес', 'Финансы и бухгалтерский учет', 'ИТ и ПО', 'Офисное Программное обеспечение']

  const providers = [ 'Преподавайте на Udemy', ]
  // 'Udemy Business,','Мое обучение'
  return (
    <header>
        <div class="container">
            <img src={udemy} alt="" />
           <h3>Категории</h3>
           <input type="search" placeholder='Ищите что угодно' />

           <div className='providers'>
            <Link to={"/"}>
            {providers.map((provider) => <a>{provider}</a>)}
            </Link>
            </div> 

            <div className='icons'>
                {/* <img src={heart} alt="" /> */}
                <Link to={"/basket"}>
                <img src={korzina} alt="" />
                </Link>
                <Link to={"/login"}>
                <button className='b1'>Войти</button>
                </Link>

                <Link to={"/register"}>
                <button className='b2'>Регистрация</button>
                </Link>
                <img className='not' src={notif} alt="" />
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
