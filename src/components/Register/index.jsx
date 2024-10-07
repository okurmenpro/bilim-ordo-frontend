import React from 'react'
import { useState } from 'react';
import "./Register.scss"

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <div className='register'>
        <div className='register-left'>
          <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp" alt="" />
        </div>
        <div className='register-right'>
          <h1>Зарегистрийтесь и начните обучение</h1>
          <input
            type="text"
            placeholder='Полное имя'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={fullName ? 'input-active' : ''}
          />
          <input
            type="text"
            placeholder='Адрес электронной почты'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='register-footer'>
            <input type="checkbox" />
            <p>Отправляйте мне специальные предложение, персонализиванные рекомендации  и совет по обучению</p>
          </div>
          <button>Регистрация</button>
          <h3>Выполняя вход, вы соглашаетесь с нашими Условиями использования и Политикой конфиденциальности.</h3>
          <div className='register-ali'>
            <p>Уже зарегистрировались?</p>
            <h5> Войти</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
