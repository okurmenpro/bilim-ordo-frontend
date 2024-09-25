import React from 'react'
import './Carts.css'
const Carts = ({title}) => {
    return (
        <div className='carts-cont'>
            <h2 className="title-carts">{title}</h2>
            <div className="carts">
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
                <div className="cart"></div>
            </div>
        </div>
    )
}

export default Carts