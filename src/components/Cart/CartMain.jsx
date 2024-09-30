import React from 'react'
import './CartMain.css'

function CartMain() {
  return (
    <>
      <section className='cart'>
            <h1>Корзина</h1>
            <h3>0 курсов в корзине</h3>
            <div className='cartCenter'>
                <img id='cartImg' src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg"alt="" />
                <p>Корзина пуста. Продолжите поиск, чтобы найти нужный курс.</p>
                <button>Продолжить поиск</button>
            </div>
      </section>
    </>
  )
}

export default CartMain