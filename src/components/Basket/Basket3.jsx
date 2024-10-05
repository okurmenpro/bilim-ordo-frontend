import React from 'react'
import "./Basket.scss"

function Basket3() {
  return (
    <div className='v1'>
      <h1 className='cart1'>Корзина</h1>
      <h5 className='cart2'>0 курсов в корзине</h5>
      <div className='v2'>
        <img src="https://business.udemy.com/wp-content/uploads/2022/01/Empty_Cart_Spot@2x.png" alt="" />
        <p className='cart3'>Корзина пуста. Продолжите поиск, чтобы найти нужный курс.</p>
       <a href="/"><button className='cart4'>Продолжить поиск</button></a> 
      </div>
    </div>
  )
}

export default Basket3