import React from 'react'
import "./Programmingexercises.css"
import Programmingimg from "../../assets/images/Programmingimg.png"

function Programmingexercises() {
  return (
    <div>
      <div className='Programming-Exercises container'>
        <div className='Exercises'>
          <h2>Упрожнения по 
          написанию кода</h2>
          <p>Этот курс включает в себя наши 
новые упражнения по написанию 
кода, позволяющие практиковать 
навыки во время обучения.</p>
          <button>Посмотреть демонстрацию</button>
        </div>
        <img src={Programmingimg} alt="" />
      </div>
      
    </div>
  )
}

export default Programmingexercises