import React from 'react'
import "./Sidebar.css"
import { ImAlarm } from "react-icons/im";
import { EmotionalData } from '../../data/Emotional';
import { HiMiniXMark } from "react-icons/hi2";
import video from "../../assets/video/Python3.mp4"

function Saidbar() {
    return (
        <div className='  container1 Emotional'>
            <div className='image'>
                <video src={video} controls></video>
            </div>

            <div className='list5'>
                <div className='number'>
                    <h1>13,99$</h1>
                    <h2>74,99$</h2>
                    <h3>Скидка 81%</h3>
                </div>
                <div className='day'>
                    <ImAlarm className='f1' />
                    <h1>Данная цена доступна ище  <a href="">2 дней!</a></h1>
                </div>

                <button className='b4'>Добавить в корзину</button>

                <button className='b5'>Купить сейчас</button>

                <p>Гарантия возраста денег — 30 дней</p>

                <div className='discount'>
                    <div className='b3'>
                        <h1>Дополнительная <br /> скидка 15%  <a href="">курсы </a> </h1>
                        <h2 className='n'>15BONUS24DAY10NLY</h2>
                    </div>
                    <p className='x'>Применить</p>
                </div>

                <div className='discont__course'>
                    <h1>Этот курс включает:</h1>

                    <div className='discont__map1'>
                        {EmotionalData.map((item) => (

                            <div key={item.id} className='discont__map'>
                                <img src={item.img} alt="" />
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='share_it1'>
                    <h1 className='share__it-title'>Поделиться</h1>
                    <h2 className='share__it-title'>Подарить этот курс</h2>
                </div>
                <h2 className='share__it-title'>Использовать купон</h2>

                <div className='emotional_input_ess'>
                    <h3>Использован купон <a href="">ST15MT100124B</a><br />
                        Купон Udemy</h3>
                    <HiMiniXMark className='x1' />
                </div>

                <div className='input'>
                    <input type="text" placeholder='Введите купон 
' />
                    <button>Применить</button>
                </div>
                <div className='hr'></div>
                <div className='training'>
                    <h2>Планируете обучение 5 или<br/> более человек?</h2>
                    <p>Получите доступ к более чем 27 000 лучших курсов на Udemy для своей команды — когда угодно, где угодно.</p>
                </div>
                <button className='try'>Попробуйте Udemy Business</button>



            </div>



        </div>
    )
}

export default Saidbar
