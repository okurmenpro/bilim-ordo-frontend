import React from 'react'
import "./Header.scss"
import udemy from "../../assets/images/udemy.png"
import heart from "../../assets/svg/heart.svg"
import korzina from "../../assets/svg/korzina.svg"
import notif from "../../assets/svg/notif.svg"

function Header() {
  const categories = ['Разработка', 'Бизнес', 'Финансы и бухгалтерский учет', 'ИТ и ПО', 'Офисное Программное обеспечение']

  const providers = ['Udemy Business', 'Преподавайте на Udemy', 'Мое обучение']

  return (
    <header>
      <div className="he">
        <div class="container header">
          <img src={udemy} alt="" />
          <button>Категории</button>
          <input type="search" placeholder='Поиск' />

          <div className='providers'>
            {providers.map((provider) => <a>{provider}</a>)}
          </div>

          <div className='icons'>
            <div className="icon">
              <img src={heart} alt="" />
            </div>
            <div className="icon">
              <img src={korzina} alt="" />
            </div>
            <div className="icon">
              <img className='not' src={notif} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom container'>
        {categories.map((category) => <li>{category}</li>)}
      </div>
    </header>
  )
}

export default Header
