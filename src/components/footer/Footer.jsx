import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
// images 
import vk from '../../images/vk.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import logo from '../../images/Logo-big.png';

export default function Footer() {

 
  return (
    <>
      {/* home contact */}
      <div className="home-contact">
        <div className="container">
              <div className="home-contact-title">
                Мы Вам перезвоним
              </div>
              <p className="home-contact-text">
                Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.
              </p>
              <div className="home-contact-form">
                <form>
                  <input type="text" name="name" id="name" placeholder='Ваше имя' autoComplete='off' required/>
                  <input type="email" name="email" id="email" placeholder='Ваш Email' autoComplete='off' required/>
                  <button type='submit' className='home-contact-btn'>Отправить</button>
                </form>
              </div>
          </div>
        </div>
        {/* home contact end */}
     <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className='footer-logo'>
              <img src={logo} alt="logotype"/>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <img src={vk} alt="vk" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
              </ul>
            </div>
            {/* links */}
            <div className="footer-links">
              <ul>
                <p>Навигация</p>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/catalog'>Каталог</NavLink></li>
                <li><NavLink to='/trade'>Оптовая продажа</NavLink></li>
                <li><NavLink to='/about'>О нас</NavLink></li>
              </ul>
              <ul>
                <p>Наши контакты</p>
                <span>Телефоны</span>
                <li><a href="tel:+998933572014">+998 (93) 357 20 14</a></li>
                <li><a href="tel:+998933572014">+375 33 662 82 56</a></li>
                <span>Email</span>
                <li><a href="email:kadirovbrucelee@gmail.com">
                   kadirovbrucelee@gmail.com
                </a></li>
                <li><a href="email:kadirovbrucelee@gmail.com">
                   lorem@gmail.com
                </a>
                </li>
              </ul>
              <ul>
                <p>Наш адрес</p>
                <li>Россия,</li>
                <li>Ростов-на-Дону ул.</li>
                <li>Богачева, 16</li>
              </ul>
              <ul>
                <p>информация</p>
                <li>
                  <NavLink to="/shipping-payment">
                    Доставка и оплата
                  </NavLink>
                </li>
                <li><NavLink to="/shipping-payment">Гарантии</NavLink></li>
                <li><NavLink to="/shipping-payment">Возврат товара</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2021 Golden Soft All rights reserved.
          </div>
        </div>
      </footer> 
    </>
  )
}
