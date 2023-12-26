import React, { useEffect, useRef, useState } from 'react';
// components
import Input from '../input/Input';
import Button from '../button/Button.jsx';
import HowWeWorkCard from '../howWeWorkCard/HowWeWorkCard.jsx';
import WhyChooseUs from '../whyChooseUs/WhyChooseUs.jsx';
import InfoCard from '../infoCard/InfoCard.jsx';
import Carousel from '../carousel/Carousel.jsx';
import CheckTitle from '../checkTitle/CheckTitle.jsx';
// styles
import './trade.scss';
// images 
import howWeWork1 from '../../images/how-we-work-1.jpg'; 
import howWeWork2 from '../../images/how-we-work-2.jpg';
import howWeWork3 from '../../images/how-we-work-3.jpg';
import whyChooseUsJpg from '../../images/why-choose-us.jpg';
import returnCashSvg from '../../images/icons/product-return.svg';
import installSvg from '../../images/icons/install.svg';
import gallerySvg from '../../images/icons/gallery.svg';
import bigProjectJpg from '../../images/big-project.jpg';
import cardLogo from '../../images/card-logo.png';
import succesPng from '../../images/succes.png';


export default function Trade() {
  const inputName = useRef(null);
  const inputCompanyName = useRef(null);
  const inputNumber = useRef(null);
  const inputProductName = useRef(null);
  const inputProductCount = useRef(null);
  const [applicationShow,setApplicationShow] = useState(false); 
  useEffect(()=>{
    inputName.current.setAttribute('required','');
    inputCompanyName.current.setAttribute('required','');
  },[])
  return (
    <>
    <div className="trade">
      <div className="container">
        {/* trade head */}
        <div className="trade-head">
          <div className="trade-head-flex">
            {/* trade head info */}
            <div className="trade-head-info">
              <div className="trade-head-info-title">Оформите заявку и мы вам перезвоним</div>
              <div className="trade-head-info-text">
                Vitae, urna, massa dictumst morbi ut id dui nulla.
                Purus a velit sem viverra. Nunc ac quis donec nunc eu blandit ante nibh.
                Sit felis nulla donec mauris quis nulla velit.
              </div>
            </div>
            {/* trade head info end */}
            {/* trade head form */}
            <div className="trade-head-form">
              <form onSubmit={(e)=>{
                e.preventDefault();
                setApplicationShow(true);
                inputName.current.value = '';
                inputCompanyName.current.value = '';
                inputNumber.current.value = '';
              }}>
                <div className="trade-head-form-title">
                  Оформление заявки
                </div>
                <div className="trade-head-form-flex">
                  <Input 
                    title='Имя'
                    placeholder='Ваше имя'
                    type='text'
                    ref={inputName}
                    required
                  />
                  <Input 
                    title='Название компании'
                    placeholder='Имя Вашей компании'
                    type='text'
                    ref={inputCompanyName}
                    required
                  />
                   <Input 
                    title='Номер телефона'
                    typeTel={true}
                    type='text'
                    ref={inputNumber}
                    required
                  />
                </div>
                <div className="trade-head-form-flex">
                  <div className="search-input">
                    <Input 
                    title='Название товара'
                    type='text'
                    placeholder='Введите название или артикул товара'
                    ref={inputProductName}
                    required
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                    </svg> 
                  </div>
                  <Input 
                    title='Количество'
                    type='number'
                    placeholder='Количество товара'
                    ref={inputProductCount}
                    required
                    />
                </div>
                <div className="trade-head-form-checked">
                  <Input 
                  type='checkbox'
                  title='Нанесение персонального логотипа (бесплатно)'
                  value='logotype'
                  required
                  />
                  <Input 
                  type='checkbox'
                  title='Помощь в монтажных работах (бесплатно)'
                  value='montaj'
                  required
                  />
                </div>
                <div className="trade-head-form-btn">
                   <span>Приблизительная стоимость</span>
                   <Button 
                   text='Отправить заявку'
                   width='250px'
                   />
                </div>
              </form>
            </div>
            {/* trade head form end */}
          </div>
        </div>
        {/* trade head end */}
         {/* howWeWorking */}
         <div className="how-we-work">
              <div className="how-we-work-title title">
                Как мы работаем
              </div>
              <div className="how-we-work-flex">
                <HowWeWorkCard 
                src={howWeWork1}
                number={1}
                title='Оформление заявки'
                text='Вы оставляете заявку на сайте или связываетесь с нами по указанному на сайте номеру телефона'
                />
                <HowWeWorkCard 
                src={howWeWork2}
                number={2}
                title='Согласование'
                text='Мы консультируем Вас, согласовываем стоимость и точное время приезда нашего специалиста'
                />
                <HowWeWorkCard 
                src={howWeWork3}
                number={3}
                title='Отправка товара и установка'
                text='Наш специалист по монтажу замков выезжает к Вам в точно зазначеное время по  согласованному адресу'
                />
              </div>
          </div>
          {/* howWeWorking end */}
      </div>
          
          {/* WhyChooseUs */}
          <WhyChooseUs 
          src={whyChooseUsJpg}
          title='Почему стоит выбрат нас'
          >
            <InfoCard 
            src={returnCashSvg}
            title='Возврат удвоенной стоимости'
            text='За каждый отправленый товар который окажеться бракованным, мы вернем вам двойную стоимость.'
            />
            <InfoCard 
            src={installSvg}
            title='Монтаж'
            text='Проводим монтажные работы любой сложности и в любое удобное для Вас время'
            />
            <InfoCard 
            src={gallerySvg}
            title='Брендирование продукта'
            text='Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности'
            />
            <InfoCard 
            src={returnCashSvg}
            title='Брендирование продукта'
            text='Мы нанесем Ваш логотип любой сложности на свою продукцию, чтобы прибавить ей эксклюзивности'
            lineNone={true}
            />
          </WhyChooseUs>
          {/* WhyChooseUs end */}
          {/* Big project */}
          <div className="big-project">
            <div className="container">
              <div className="big-project-title title">
                Наши крупные проекты
              </div>
              <Carousel settings={{
                slidesToShow:1,
                slidesToScroll:1,
                arrows:false,
                dots:true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      dots: false
                    }
                  }
                ]
              }}>
                {/* item 1 */}
                <div className="big-project-item">
                  <div className="big-project-item-image">
                    <img src={cardLogo} alt="description" className="big-project-item-image-mobile"/>
                    <img src={bigProjectJpg} alt="description" className="big-project-item-image-main" />
                  </div>
                  <div className="big-project-item-info">
                    <div className="big-project-item-info-logo">
                      <img src={cardLogo} alt="description"/>
                    </div>
                    <div className="big-project-item-info-title">
                       Проект для гостинницы Radisson Hotels
                    </div>
                    <ul className="big-project-item-info-list">
                        <li>
                            <CheckTitle title='Установлено 123 Вариативных замка Golden Soft для отеля'/>
                        </li>
                        <li>
                            <CheckTitle title='Было нанесено личный брендинг на все замки'/>
                        </li>
                        <li>
                            <CheckTitle title='Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе'/>
                        </li>
                    </ul>
                    <div className="big-project-item-info-budget">
                      Бюджет - <span>$5000</span>
                    </div>
                  </div>
                </div>
                {/* item 1 end */}
                {/* item 2 */}
                <div className="big-project-item">
                  <div className="big-project-item-image">
                    <img src={cardLogo} alt="description" className="big-project-item-image-mobile"/>
                    <img src={bigProjectJpg} alt="description" className="big-project-item-image-main" />
                  </div>
                  <div className="big-project-item-info">
                    <div className="big-project-item-info-logo">
                      <img src={cardLogo} alt="description"/>
                    </div>
                    <div className="big-project-item-info-title">
                       Проект для гостинницы Radisson Hotels
                    </div>
                    <ul className="big-project-item-info-list">
                        <li>
                            <CheckTitle title='Установлено 123 Вариативных замка Golden Soft для отеля'/>
                        </li>
                        <li>
                            <CheckTitle title='Было нанесено личный брендинг на все замки'/>
                        </li>
                        <li>
                            <CheckTitle title='Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе'/>
                        </li>
                    </ul>
                    <div className="big-project-item-info-budget">
                      Бюджет - <span>$5000</span>
                    </div>
                  </div>
                </div>
                {/* item 2 end */}
                {/* item 3 */}
                <div className="big-project-item">
                  <div className="big-project-item-image">
                    <img src={cardLogo} alt="description" className="big-project-item-image-mobile"/>
                    <img src={bigProjectJpg} alt="description" className="big-project-item-image-main" />
                  </div>
                  <div className="big-project-item-info">
                    <div className="big-project-item-info-logo">
                      <img src={cardLogo} alt="description"/>
                    </div>
                    <div className="big-project-item-info-title">
                       Проект для гостинницы Radisson Hotels
                    </div>
                    <ul className="big-project-item-info-list">
                        <li>
                            <CheckTitle title='Установлено 123 Вариативных замка Golden Soft для отеля'/>
                        </li>
                        <li>
                            <CheckTitle title='Было нанесено личный брендинг на все замки'/>
                        </li>
                        <li>
                            <CheckTitle title='Были проведны монтажные работы, также была произведена помощь в пкделючении замков к системе'/>
                        </li>
                    </ul>
                    <div className="big-project-item-info-budget">
                      Бюджет - <span>$5000</span>
                    </div>
                  </div>
                </div>
                {/* item 3 end */}
              </Carousel>
            </div>
          </div>
          {/* Big project end */}
          <div className={`application-show ${applicationShow?'application-show-true':''}`}>
            <div className="application-show-wrapper">
                <img src={succesPng} alt="description" />
                <div className="application-show-titles">
                  <div className="application-show-title">
                    Ваша заявка успешно принята
                  </div>
                  <div className="application-show-text">
                    Porttitor vitae ornare aliquet euismod nunc, tincidunt.
                    In non<br/> elementum, ornare elementum nisi egestas vel ut. 
                  </div>
                </div>
                <Button width='250px' text='Хорошо' onClick={()=>setApplicationShow(false)}/>
            </div>
          </div>
    </div>
    </>
  )
}
