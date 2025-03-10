import React from 'react'
import './TeachDashboard.scss'
import { BsThreeDots } from "react-icons/bs";
import { PiTrendUp } from "react-icons/pi";
import chrtYellow from "../../assets/images/chrt-yellow.png"
import chrtBlue from "../../assets/images/chrt-blue.png"
import chrtGreen from "../../assets/images/chrt-green.png"
import { NavLink } from 'react-router-dom';

const TeachDashboard = () => {
    return (
        <div className='teach-dashboard'>
            <div className="hero-dash">
                <h2>Dashboard</h2>
                <NavLink to={"/instructor/courses"}>
                    <button>Add Course</button>
                </NavLink>
                <BsThreeDots className='three-dots' />
            </div>

            <div className="all-dash">

                <div className="price-dash">
                    <div className="profits-dash">
                        <div className="profit shadow">
                            <PiTrendUp className='trend-up' />
                            <div className="profit-text">
                                <strong>$1K</strong>
                                <p>Life Time Courses Commission</p>
                            </div>
                        </div>
                        <div className="profit shadow">
                            <PiTrendUp className='trend-up' />
                            <div className="profit-text">
                                <strong>$800.0</strong>
                                <p>Life Time Courses Commission</p>
                            </div>
                        </div>
                        <div className="profit shadow">
                            <PiTrendUp className='trend-up' />
                            <div className="profit-text">
                                <strong>$200.00</strong>
                                <p>Life Time Courses Commission</p>
                            </div>
                        </div>
                    </div>
                    <div className="sales-dash shadow">
                        <h4>Life Time Sales</h4>
                        <div className="chrt">
                            <div className="left-chrt">
                                <p>unit</p>
                                <div className="units">
                                    <p>1,000.00</p>
                                    <p>800.00</p>
                                    <p>600.00</p>
                                    <p>400.00</p>
                                    <p>200.00</p>
                                    <p>0</p>
                                </div>
                            </div>
                            <div className="right-chrt">
                                <div className="lins-chrt">
                                    <img src={chrtYellow} alt="" />
                                    <img src={chrtGreen} alt="" />
                                    <img src={chrtBlue} alt="" />
                                </div>
                                <hr />
                                <div className="bottom-nums">
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>4</p>
                                    <p>5</p>
                                    <p>6</p>
                                    <p>7</p>
                                    <p>8</p>
                                    <p>9</p>
                                    <p>10</p>
                                    <p>11</p>
                                    <p>12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reviews-dash">
                    <h3>Reviews</h3>
                    <div className="carts-dash">
                        <div className="cart-dash shadow">
                            <p>Total Reviews</p>
                            <strong>1000</strong>
                        </div>
                        <div className="cart-dash shadow">
                            <p>1 star reviews</p>
                            <div className="b-cart">
                                <strong>100</strong>
                                <div className="per"
                                    style={{ background: "#EF4444" }}
                                >1.0</div>
                            </div>
                        </div>
                        <div className="cart-dash shadow">
                            <p>2 star reviews</p>
                            <div className="b-cart">
                                <strong>100</strong>
                                <div className="per"
                                    style={{ background: "#CA8A04" }}
                                >2.0</div>
                            </div>
                        </div>
                        <div className="cart-dash shadow">
                            <p>3 star reviews</p>
                            <div className="b-cart">
                                <strong>100</strong>
                                <div className="per"
                                    style={{ background: "#FACC15" }}
                                >3.0</div>
                            </div>
                        </div>
                        <div className="cart-dash shadow">
                            <p>4 star reviews</p>
                            <div className="b-cart">
                                <strong>100</strong>
                                <div className="per"
                                    style={{ background: "#4ADE80" }}
                                >4.0</div>
                            </div>
                        </div>
                        <div className="cart-dash shadow">
                            <p>5 star reviews</p>
                            <div className="b-cart">
                                <strong>100</strong>
                                <div className="per"
                                    style={{ background: "#16A34A" }}
                                >5.0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachDashboard