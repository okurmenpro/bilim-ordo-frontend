import React from 'react';
import './Profile-Page-Teacher.scss';
import Autors from '../../assets/images/autor.png';
import { RiArrowRightLine as Strelka } from 'react-icons/ri';
import { HiOutlineDotsHorizontal as Dots } from 'react-icons/hi';

function Chat() {
  return (
    <section className='chat-content'>
      <h1>Messages</h1>
      <div className='chat-style'>
        <div className='header-chat'>
          <nav className='chat-box1'>
            <Strelka className='left-icon' />
            <img src={Autors} alt='Autor' />
            <h2>Ronald Richards</h2>
          </nav>
          <Dots />
        </div>

        <hr className='hr' />

        <main className='chat-main'>
          <h3>Today</h3>
          <div className='sms-right'>
            <p>10:25am</p>
            <strong className='chat-text'>Hello</strong>
            <strong className='text'>
              Just wanted to tell you that I started your course and it’s going great!!
            </strong>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Chat;
