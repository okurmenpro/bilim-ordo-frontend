
import React, { useContext, useEffect } from 'react';
import './Basket.scss';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function AddCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (cartItems.length === 0) {
      navigate('/basket');
    } 
  }, [cartItems, navigate]);
  

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '').replace(',', '.')); 
      return total + price;
    }, 0).toFixed(2); 
  };


  if (cartItems.length === 0) {
    return (
      <div className='v1'>
        <h1 className='cart1'>Корзина</h1>
        <h5 className='cart2'>0 курсов в корзине</h5>
        <div className='v2'>
          <img src="https://business.udemy.com/wp-content/uploads/2022/01/Empty_Cart_Spot@2x.png" alt="Пустая корзина" />
          <p className='cart3'>Корзина пуста. Продолжите поиск, чтобы найти нужный курс.</p>
          <a href="/"><button className='cart4'>Продолжить поиск</button></a> 
        </div>
      </div>
    );
  }


  return (
    <section className='addCart'>
      <div className='leftCart'>
        <h1>Корзина</h1>
        <h3>{cartItems.length} курса в корзине</h3>
        {cartItems.map((item, index) => (
          <div className='aboutCart' key={index}>
            <img src={item.img} alt={item.name} />
            <div className='description'>
              <h1>{item.name}</h1>
              <p>Автор: Юрий Аллахвердов</p>
              <div className='price'>
                <h2>{item.price}</h2>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.name)} 
              className="remove-button"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className='cartOrder'>
        <h2>Общая сумма:</h2>
        <h1>${calculateTotalPrice()}</h1>
        <button>Оформить заказ</button>
      </div>
    </section>
  );
}

export default AddCart;