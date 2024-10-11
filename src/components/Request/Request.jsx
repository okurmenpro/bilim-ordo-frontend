import React, { useState } from 'react'
import "./Request.scss"

const Request = () => {
    const[shtoto1,setShoto1]=useState(false)
    const[shtoto2,setShoto2]=useState(false)
    const[shtoto3,setShoto3]=useState(false)
    const[shtoto4,setShoto4]=useState(false)
    const[shtoto5,setShoto5]=useState(false)
    function showShtoto(num) {
        switch (num) {
            case '1':
                setShoto1(true)
            case '2':
                setShoto2(!shtoto2)
            case '3':
                setShoto3(!shtoto3)
            case '4':
                setShoto4(!shtoto4)
            case '5':
                setShoto5(!shtoto5)
            default:
                return num
        }
    }
    return (
        <div className='request'>
            <div className="faq">
                <h4>FAQ</h4>
                <div className="btns">
                    <button onClick={()=>showShtoto(1)} className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <p className={shtoto1+"-text"}>GGGGGGGG</p>
                    <button onClick={()=>showShtoto(2)} className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button onClick={()=>showShtoto(3)} className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button onClick={()=>showShtoto(4)} className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button onClick={()=>showShtoto(5)} className='dropdown-toggle'>• Кто обучает учеников? </button>
                </div>
            </div>
            <div className="leave-request">
                <h4>Оставить заявку</h4>
                <div className="inf">
                    <input type="text" placeholder='Имя' />
                    <input type="text" placeholder='Фамилия' />
                    <input type="text" placeholder='Gmail' />
                    <input type="text" placeholder='Номер телефона' />
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default Request