import React from 'react'
import "./Request.scss"
import down from '../../assets/svg/arrow_drop_down.svg'
const Request = () => {
    return (
        <div className='request'>
            <div className="faq">
                <h4>FAQ</h4>
                <div className="btns">
                {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                    Посмотреть еще

                </button> */}
                    <button className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button className='dropdown-toggle'>• Кто обучает учеников? </button>
                    <button className='dropdown-toggle'>• Кто обучает учеников? </button>
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