import React, { useEffect, useState } from 'react';
//components
import PathHistory from '../path-history/PathHistory.jsx';
import RunNumber from '../run-number/RunNumber.jsx';
//images 
import aboutHeadVideo from '../../images/about-head-video.jpg';
import ourMissionJpg from '../../images/our-mission.jpg';
import ourMissionSmallJpg from '../../images/our-mission-small.jpg';
import aboutHeadPlayBtn from '../../images/about-head-play-btn.png';
import aboutContacts1Jpg from '../../images/about-contacts-1.jpg';
import aboutContacts2Jpg from '../../images/about-contacts-2.jpg';
import aboutContacts3Jpg from '../../images/about-contacts-3.jpg';
//styles
import './about.scss';


export default function About() {
  const [playBtn,setPlayBtn] = useState(false); 
  return (
    <>
      <div className="about">
        <PathHistory 
        path={[{
            path:'О нас',
            last:true
        }]}
        />
          <div className="about-head">
            <div className="container">
                <div className="about-head-flex">
                  <div className='about-head-video'>
                    <img src={aboutHeadVideo} alt="description" />
                    <div className={`about-head-play-btn ${!playBtn?'':'click'}`} onClick={()=>setPlayBtn(true)}>
                    <img src={aboutHeadPlayBtn} alt="description" />
                    <span></span>
                    </div>
                  
                  </div>
                  <div className="about-head-info">
                    <div className="about-head-sub-title">
                      о нас
                    </div>
                    <div className="about-head-title title">Компания <span>Golden Soft</span></div>
                    <div className="about-head-text">
                      Sit tempor ante justo amet duis.
                      Ultricies cras eleifend elit,<br/>
                      posuere et risus non.
                      Id et ut pellentesque consequat, amet<br/> erat gravida euismod pharetra.
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="about-run-number">
          <div className="container">
              <RunNumber
                key={15}
                  counters={[{ val:  5567, time: 1 }]}
                  title='Счастливых клиентов'
                  start={true}
                />
                <RunNumber
                key={16}
                  counters={[{ val:  1245, time: 1 }]}
                  title='Продуктов на выбор'
                  start={true}
                />
                <RunNumber
                key={17}
                  counters={[{ val:  372, time: 7 }]}
                  title='Продаж в день'
                  start={true}
                />
                <RunNumber
                key={18}
                  counters={[{ val:  20, time: 100 }]}
                  title='Лет на рынке'
                  start={true}
                />
             </div>
          </div>
          <div className="our-mission">
            <div className="container">
              <div className="about-head-flex">
                    <div className="about-head-info">
                      <div className="about-head-sub-title">
                      Наша миссия
                      </div>
                      <div className="about-head-text">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path>
                          </svg>
                        </span>
                      Sit tempor ante justo amet duis.
                      Ultricies<br/> cras eleifend elit, posuere et risus non.Id<br/>
                      et ut pellentesque consequat, amet erat<br/> gravida euismod pharetra.
                      </div>
                    </div>
                    <div className='about-head-video'>
                      <img src={ourMissionJpg} alt="description" />
                      <div className='about-head-play-btn'>
                      <img src={ourMissionSmallJpg} alt="description" />
                      <span></span>
                      </div>
                    
                    </div>
                    
                </div>
            </div>
          </div>
          <div className="about-contacts">
            <div className="container">
                <div className="about-contacts-title title">Контакты</div>
                <div className="about-contacts-flex">
                  <div className="about-contacts-item">
                    <div className="about-contacts-item-title">Наш адрес</div>
                    <div className="about-contacts-item-p">
                      Россия, Ростов-на-Дону
                      <span>ул. Богачева, 16</span>
                    </div>
                  </div>
                  <div className="about-contacts-item">
                    <div className="about-contacts-item-title">Телефоны</div>
                    <div className="about-contacts-item-p">
                      +7 (988) 565 00 38
                      <span>+375 33 662 82 56</span>
                    </div>
                  </div>
                  <div className="about-contacts-item">
                    <div className="about-contacts-item-title">Email</div>
                    <div className="about-contacts-item-p">
                      vladpertcev@mail.ru
                      <span>korobko416@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="about-contacts-flex">
                <img src={aboutContacts1Jpg} alt="description" />
                <img src={aboutContacts2Jpg} alt="description" />
                <img src={aboutContacts3Jpg} alt="description" />
                </div>
            </div>
          </div>
      </div>
    </>
  )
}
