import React from 'react'
import "./Sidebar.css"
import { ImAlarm } from "react-icons/im";
import { SidebarData } from '../../data/Sidebar';
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
function Sidebar({ price, originalPrice, discount, daysLeft, coupon, videoSrc }) {
    return (
        <div className='  container1 Sidebar'>
            <div className='video'>
                <video src={videoSrc} controls></video>
            </div>

            <div className='list5'>
                <div className='price1'>
                    <div className="price-value">{price}$</div>
                    <div className='original-price'>{originalPrice}$</div>
                    <div className='discount-div'>Скидка {discount}%</div>
                </div>
                <div className='day'>
                    <ImAlarm className='watch' />
                    <div className='watch-text'>Данная цена доступна eще  <a href="">{daysLeft}дней!</a></div>
                </div>

                <button className='add-btn'>Добавить в корзину</button>

                <button className='buy_now-btn'>Купить сейчас</button>

                <p>Гарантия возраста денег — 30 дней</p>

                <div className='discount'>
                    <div className='discount_price'>
                        <span>Дополнительная <br /> скидка 15%  <a href="">курсы </a> </span>
                        <div className='bonus'>15BONUS24DAY10NLY</div>
                    </div>
                    <button className='apply-btn'>Применить</button>

                </div>

                <div className='discont__course'>
                    <h3>Этот курс включает:</h3>

                    <div className='discont__map1'>
                        {SidebarData.map((item) => (
                            <div key={item.id}     className='discont__map'>
                                <img src={item.img} alt={item.title} />
                                <h5>{item.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='share_it'>
                    <button>Поделиться</button>
                    <Link to="/path/to/course" className="share_it-title">Подарить этот курс</Link>
                </div>
                <span>Использовать купон</span>

                <div className='used_coupon'>
                    <p>Использован купон <a href="">{coupon}</a><br />
                        Купон Udemy</p>
                    <button className='icons_x'> <HiMiniXMark /></button>
                </div>

                <div className='enter_coupon'>
                    <input type="text" placeholder='Введите купон ' />
                    <button>Применить</button>
                </div>
                <div className='line'></div>
                <div className='training'>
                    <h4>Планируете обучение 5 или<br /> более человек?</h4>
                    <p>Получите доступ к более чем 27 000 лучших курсов на Udemy для своей команды — когда угодно, где угодно.</p>
                </div>
                <button className='try_btn'>Попробуйте Udemy Business</button>
            </div>
        </div>
    )
}

export default Sidebar
