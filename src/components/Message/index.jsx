import React from 'react'
import "./Message.scss"
import Autor from "../../assets/images/autor.png"
import Autor2 from "../../assets/images/tacher2.png"
import Filter from "../Filter"

function MessagePage() {
    return (
        <section className='section message'>
            <Filter name="Messages" />
            <div className='direct'>
                <div className='first-direct'>
                    <div className='info-direct'>
                        <img src={Autor} alt="" />
                        <div className='date-direct'>
                            <h1>Ronald Richards</h1>
                            <p>18th March, 2024</p>
                        </div>

                    </div>
                    <strong>Thank you for asking your doubt, I’ll send you a pdf file which cover the problems you are facing. If you have any...</strong>
                </div>

                <div className='first-direct' >
                    <div className='info-direct'>
                        <img className='Autor2' src={Autor2} alt="" />
                        <div className='date-direct'>
                            <h1>Devon Lane</h1>
                            <p>18th March, 2024</p>
                        </div>
                    </div>
                    <strong>I’ll Get back to you as soon as possbile.</strong>
                </div>
            </div>
        </section>
    )
}

export default MessagePage