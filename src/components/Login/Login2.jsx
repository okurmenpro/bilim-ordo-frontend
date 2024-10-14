import React, { useState } from 'react';
import { useAuth } from "./../../context/AuthContext";
import "./Login.scss";

function Login2() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Массив пользователей
  const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      login(user);
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <div className='register'>
      <div className='register-left'>
        <img src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x1.webp" alt="" />
      </div>

      <div className='register-right'>
        <h1>Вход в учетную запись Udemy</h1>
        <input
          type="text"
          placeholder='Адрес электронной почты'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Войти</button>
        <h3>или Забыли пароль?</h3>
        <h3>Другие варианты выхода</h3>

        <div className='register-ali'>
          <button>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
          </button>
          <button>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png" alt="" />
          </button>
          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="" />
          </button>
        </div>

        <div className='b2'>
          <h3>Не зарегистрированы? Регистрация</h3>
          <h3>Войдите в систему, указав свою организацию</h3>
        </div>
      </div>
    </div>
  );
}

export default Login2;
