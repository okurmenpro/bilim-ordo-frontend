import React from 'react'
import "./Sidebar.css"
import { ImAlarm } from "react-icons/im";
import { SidebarData } from '../../data/Sidebar';
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import video from "../../assets/video/Python3.mp4";

import { MdLiveTv } from "react-icons/md";
import { IoCode } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { FaRegFolderClosed } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";

function Sidebar() {
    return (
        <div className='container'>
        <div className='  container1 Sidebar'>
            <div className='video'>
                <video src={video} controls></video>
            </div>

            <div className='list5'>
                <div className='price1'>
                    <div className="price-value">{SidebarData.price}$</div>
                    <div className='original-price'>{SidebarData.originalPrice}$</div>
                    <div className='discount-div'>Скидка {SidebarData.discount}%</div>
                </div>
                <div className='day'>
                    <ImAlarm className='watch' />
                    <div className='watch-text'>Данная цена доступна eще  <a href="">{SidebarData.daysLeft}дней!</a></div>
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
                        <div className='discont__map'>
                            <MdLiveTv className='map1-icon' /><h5>{SidebarData.video}</h5>
                        </div>
                        <div className='discont__map'>
                            <IoCode className='map1-icon' /><h5>{SidebarData.exercises}</h5>
                        </div>
                        <div className='discont__map'>
                            <VscFiles className='map1-icon' /><h5>{SidebarData.article}</h5>
                        </div>
                        <div className='discont__map'>
                            <FaRegFolderClosed className='map1-icon' /><h5>{SidebarData.download}</h5>
                        </div>
                        <div className='discont__map'>
                            <MdOutlinePhoneAndroid className='map1-icon' /><h5>{SidebarData.phone}</h5>
                        </div>
                        <div className='discont__map'>
                            <CgInfinity className='map1-icon' /><h5>{SidebarData.access}</h5>
                        </div>
                        <div className='discont__map'>
                            <TfiCup className='map1-icon' /><h5>{SidebarData.certificate}</h5>
                        </div>
                    </div>

                </div>
                <div className='share_it'>
                    <button>Поделиться</button>
                    <Link to="/path/to/course" className="share_it-title">Подарить этот курс</Link>
                </div>
                <span>Использовать купон</span>

                <div className='used_coupon'>
                    <p>Использован купон <a href="">{SidebarData.coupon}</a><br />
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
        </div>
    )
}

export default Sidebar
