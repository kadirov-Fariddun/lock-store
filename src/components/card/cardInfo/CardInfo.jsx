import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import './cardInfo.scss';
import PathHistory from '../../path-history/PathHistory';
import { NavLink,Route,Routes } from 'react-router-dom';
import DropDown from '../../dropDown/DropDown';
import JustLooked from '../../justLooked/JustLooked';
import Ceo from '../../ceo/Ceo';
import fDb from './fDb';
import Button from '../../button/Button.jsx'
// image 
import replySvg from '../../../images/icons/reply.svg';
import commentSvg from '../../../images/icons/comment.svg';
import refreshPng from '../../../images/reset.png';



export default function CardInfo({product,onClick}) {
  const [feedbackDb] = useState(fDb);
  const [activeMainImage,setActiveMainImage] = useState(0);
  const [favorites,setFavorites] = useState(false);
  const [characteristic,setCharacteristic] = useState(1);
  const [formStars,setFormStars] = useState(0);
  const [reviewSlice,setReviewSlice] = useState(3);
  const [favoritesNotification,setFavoritesNotification] = useState(false);
  const [reviewsFormShow,setReviewsFromShow] = useState(false);
  let basket = [];
  function getBasketArray(ls,basket,product){
    if(!ls.getItem('basket')) {
      basket.push(product.id);
      ls.setItem('basket',JSON.stringify(basket));
    }else{
      basket = JSON.parse(ls.getItem('basket'));
      basket = [];
      basket.push(product.id);
      let uniq = [...new Set(basket)]
      ls.setItem('basket',JSON.stringify(uniq));
    }
  }
  useEffect(()=>{
    if(localStorage.getItem('favorites')){
      const arr = JSON.parse(localStorage.getItem('favorites'));
      arr.forEach(item=>{
        if(item == product.id){
          setFavorites(true)
        }
      });
    };
    // проверяем есть ли массив basket в localestorage и очищаем все дубликаты 
  },[]);
  // created function stars 
  function stars(stars){
    let arr = [];
    for(let i = 1;i<=5;i++){
      if(stars >= i){
        arr.push(
          <svg key={i} width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.38272 1.25533C6.59605 0.692662 7.40338 0.692662 7.61738 1.25533L8.99738 5.07799C9.09405 5.33133 9.34005 5.5 9.61472 5.5H13.0061C13.6327 5.5 13.9061 6.28 13.4134 6.662L11.0001 8.83333C10.8919 8.91643 10.8129 9.03165 10.7744 9.16243C10.7358 9.29322 10.7397 9.43287 10.7854 9.56133L11.6667 13.2967C11.8814 13.8967 11.1867 14.412 10.6614 14.0427L7.38338 11.9627C7.27113 11.8838 7.13726 11.8414 7.00005 11.8414C6.86284 11.8414 6.72898 11.8838 6.61672 11.9627L3.33872 14.0427C2.81405 14.412 2.11872 13.896 2.33338 13.2967L3.21472 9.56133C3.26044 9.43287 3.26429 9.29322 3.22572 9.16243C3.18716 9.03165 3.10816 8.91643 3.00005 8.83333L0.586718 6.662C0.0933844 6.28 0.368051 5.5 0.993384 5.5H4.38472C4.51825 5.50044 4.64876 5.46033 4.759 5.38498C4.86923 5.30962 4.95399 5.20257 5.00205 5.07799L6.38205 1.25533H6.38272Z" fill="#F7AB3A"/>
          </svg>
        );
      }else{
      arr.push(
        <svg key={i} width="20" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.38272 1.25533C6.59605 0.692662 7.40338 0.692662 7.61738 1.25533L8.99738 5.07799C9.09405 5.33133 9.34005 5.5 9.61472 5.5H13.0061C13.6327 5.5 13.9061 6.28 13.4134 6.662L11.0001 8.83333C10.8919 8.91643 10.8129 9.03165 10.7744 9.16243C10.7358 9.29322 10.7397 9.43287 10.7854 9.56133L11.6667 13.2967C11.8814 13.8967 11.1867 14.412 10.6614 14.0427L7.38338 11.9627C7.27113 11.8838 7.13726 11.8414 7.00005 11.8414C6.86284 11.8414 6.72898 11.8838 6.61672 11.9627L3.33872 14.0427C2.81405 14.412 2.11872 13.896 2.33338 13.2967L3.21472 9.56133C3.26044 9.43287 3.26429 9.29322 3.22572 9.16243C3.18716 9.03165 3.10816 8.91643 3.00005 8.83333L0.586718 6.662C0.0933844 6.28 0.368051 5.5 0.993384 5.5H4.38472C4.51825 5.50044 4.64876 5.46033 4.759 5.38498C4.86923 5.30962 4.95399 5.20257 5.00205 5.07799L6.38205 1.25533H6.38272Z" stroke="#C4CDD5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );
      }
    };
    return arr;
  };
// clear favorite card


// add favorite card
function addToFavorites(id){
  const ls = localStorage;
  setFavorites(true)
    if(ls.getItem('favorites')){
      let arr = JSON.parse(ls.getItem('favorites'));
      arr.push(id);
      // добавляем в локал сторедж
      ls.setItem('favorites',JSON.stringify(arr))
    }else {
      let arr = []
      arr.push(id);
      // добавляем в локал сторедж
      ls.setItem('favorites',JSON.stringify(arr))
    }
};
function removeIsFavorites(id){
  setFavorites(false);
  const arr = JSON.parse(localStorage.getItem('favorites'));
  console.log(arr);
    arr.forEach((item,index) => {
      if(item == id){
        arr.splice(index,1);
       // добавляем в локал сторедж
       localStorage.setItem('favorites',JSON.stringify(arr))
      }
    });
}
  return (
    <>
    <div className="card-info">
      <div className="container">
      <PathHistory path={[{
        last:false,
        path:'Каталог'
      },
      {
        last:true,
        path:product.name
      }]}/>
      {/* flex */}
      <div className="card-info-flex">
        {/* images */}
        <div className="card-info-images">
        <div className="card-info-image-main">
            <img src={product.images[activeMainImage]} alt="image" />
        </div>
          {
            product.images.length > 1?
           <ul className='card-info-image-list'>
            {
            product.images.map((src,i)=>(
                <li className="card-info-image" onClick={()=>setActiveMainImage(i)}>
                  <img src={src} alt="image" />
                </li>
            ))
            }
            </ul>
            :
            ''
          }
        </div>
        {/* content */}
        <div className="card-info-content">
          {/* serial door */}
          <div className="card-info-serial">
            <span>{product.serialNumber}</span>
            <span>{stars(product.stars)}</span>
            <span className="card-info-serial-feedback">
              ({product.feedback}) отзывов
            </span>
          </div>
          {/* serial door end */}
          {/* title door lock  */}
          <div className="card-info-title">{product.name}</div>
          {/* title door lock end*/}
          {/* door installation */}
          <div className="card-info-installation">
            <p>Подходит для установки на:</p>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
              </svg>
              Деревянную дверь
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
              </svg>
              Межкомнатную дверь
            </span>
          </div>
          {/* door installation end */}
          {/* door Equipment */}
          <div className="card-info-equipment">
            <div>
              <span>Комплектация</span>
                <p>Smart замок без приложения</p>
            </div>
            <div>
              <span>Цвет</span>
              <div className="card-info-equipment-color">
                {
                  product.color.map((color,i)=>{
                    return <div style={{
                    backgroundColor:color,
                  }}>
                    {i==0?
                     '✓':''}
                  </div>
                  })
                }
              </div>
            </div>
          </div>
          {/* door Equipment end */}
          {/* door price */}
          <div className="card-info-price">
            {product.discount}₽
            <span>{product.price}₽</span>
          </div>
          {/* door price end */}
          {/* info btn */}
          <div className="card-info-btns">
            <Button thisClass='card-info-btn-shop' text='Купить' width='288px'
            onClick={
              ()=>{
                getBasketArray(localStorage,basket,product);
                onClick;
              }
            }
            />
            <button className='card-info-btn-like' onClick={
              ()=>{
                let timeOut = setTimeout(() => {
                  setFavoritesNotification(false);
                }, 1500);
              !favorites?
              addToFavorites(product.id):
              removeIsFavorites(product.id);
              if(!favoritesNotification){
                setFavoritesNotification(true);
                timeOut;
              }else{
                clearTimeout(timeOut);
              }
              }}>
              {
                favorites?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'red'}}>
                  <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                </svg>
              }
              <span>В избранное</span>
            </button>
          </div>
          {/* info btn end */}
          {/* drop down info */}
          <DropDown 
          title='Оплата'
          text='
          Оплата при получении товара, Картой онлайн, Google Pay,
          Акционная оплата картой Visa,
          Безналичными для юридических лиц,
          Безналичными для физических лиц, Apple Pay, PrivatPay,
          Оплата картой в отделении
          '
          />
          <DropDown 
          title='Монтаж и доставка'
          text='
          Оплата при получении товара, Картой онлайн, Google Pay,
          Акционная оплата картой Visa,
          Безналичными для юридических лиц,
          Безналичными для физических лиц, Apple Pay, PrivatPay,
          Оплата картой в отделении
          '
          />
          <DropDown 
          title='Гарантии и выгода'
          text='
          Оплата при получении товара, Картой онлайн, Google Pay,
          Акционная оплата картой Visa,
          Безналичными для юридических лиц,
          Безналичными для физических лиц, Apple Pay, PrivatPay,
          Оплата картой в отделении
          '
          />
          {/* drop down info end */}
        </div>
      </div>
      {/* card info characteristic */}
      <div className="card-info-characteristic">
        <ul className="card-info-characteristic-menu">
          <li className={`card-info-characteristic-menu-item 
          ${characteristic ==1?'card-info-characteristic-menu-item-active':''}`} onClick={()=> setCharacteristic(1)}>
            Характеристики
          </li>
          <li className={`card-info-characteristic-menu-item 
          ${characteristic ==2?'card-info-characteristic-menu-item-active':''}`}  onClick={()=> setCharacteristic(2)}>
            Описание
          </li>
          <li className={`card-info-characteristic-menu-item 
          ${characteristic ==3?'card-info-characteristic-menu-item-active':''}`}  onClick={()=> setCharacteristic(3)}>
            Отзывы
          </li>
        </ul>
        {/* card-info-characteristic content */}
        {
          // 1
          characteristic == 1?
        <div className="card-info-characteristic-content">
              <div className="card-info-characteristic-content-grid">
                <ul>
                  <li>Память на количество карт<span>{product.memoryOfCard}</span></li>
                  <li>Приложение<span>Нет</span></li>
                  <li>Материал<span>{product.material}</span></li>
                  <li>Цвет<span>Черный, хром</span></li>
                  <li>Питание<span>{product.nutrition}</span></li>
                  <li>Разблокировка<span>Пин-код, карта или браслет Mifaire, ключ, приложение, отпечаток пальца</span></li>
                </ul>
                <ul>
                  <li>Тип двери<span>{product.doorType}</span></li>
                  <li>Толщина двери<span>{product.doorWidth}</span></li>
                  <li>Размеры<span>{product.size}</span></li>
                  <li>Вес<span>{product.weight}</span></li>
                  <li>Комплектация<span>{product.equipment}</span></li>
                </ul>
              </div>
        </div>:
        // 2
        characteristic == 2?
        <div className="card-info-characteristic-content">
              <div className="card-info-characteristic-content-flex">
                <div>
                  <p>
                    Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск,
                     четкие линии, красивые формы – этот замок сразу заявляет о своем высоком статусе.
                     Изысканный черный цвет корпуса в обрамлении из золота мгновенно притягивает взгляды.
                     Функционален, удобен в работе и легок в уходе:
                     для сохранения блеска достаточно лишь протереть поверхность салфеткой.
                     <span>Подходит для установки на деревянную/межкомнатную дверь.</span>
                  </p>
                  <div className="card-info-characteristic-content-title">
                  Преимущества умного замка от Golden Soft с приложением:
                  </div>
                  <ul className="card-info-characteristic-content-list">
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
                      </svg>
                      <span>Минимизирует кражи среди персонала</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
                      </svg>
                      <span>Сложно взломать, высокая надежность</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
                      </svg>
                      <span>Можно отказаться от создания физических карт или ключей и высылать электронный ключ новым сотрудникам прямо на смартфон</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
                      </svg>
                      <span>Отслеживание статистики открытий с информацией о каждом открывавшем замок человеке</span>
                    </li>
                  </ul>
                  <p>
                      Каждый ключ записывается в память замка с уникальным токеном,
                      что делает почти невозможным подделку цифрового ключа.
                      Замки программируются с помощью Bluetooth-соединения с приложением
                        на вашем устройстве или с помощью мастер – карты,
                        которая переводит замок в режим программирования,
                      а после получения ключа вы сможете выставить для себя уникальный
                        пин-код или настроить отпечаток пальца прямо через приложение.
                      Также, вы всегда можете выписывать карты или браслеты стандарта
                        Mifare с помощью Энкодера в связке с приложением на ПК либо Android
                  </p>
                </div>
                <div>
                  <img src={product.images[0]} alt="image" />
                </div>
              </div>
        </div>:
        // 3 
         <div className="card-info-characteristic-content">
            {/* reviews section */}
            <div className="reviews">
              <div className="reviews-flex">
                {/* reviews comments */}
                <div className="reviews-comments">
                  {
                    feedbackDb.slice(0,reviewSlice).map((item,index)=>{
                      return(
                      <div className="reviews-comment-card" key={index}>
                        {/* title */}
                        <div className="reviews-comment-card-title">
                          <div className="reviews-comment-card-title-name">
                            <span>{item.name}</span>
                            <span>{item.date}</span>
                          </div>
                          <div className="reviews-comment-card-title-stars">
                            {stars(item.stars)}
                          </div>
                        </div>
                        {/* title end */}
                        {/* text */}
                        <div className="reviews-comment-card-text">
                          {item.comment}
                        </div>
                        {/* text end */}
                        {/* reply */}
                        <div className="reviews-comment-card-reply">
                          <button className='reply-btn'>
                            <img src={replySvg} alt="reply" width='20px' height='20px'/>
                            Ответить
                          </button>
                          <div className="reply-comment">
                          <img src={commentSvg} alt="comment" width='20px' height='20px'/>
                          1 комментарий
                          </div>
                        </div>
                        {/* reply end */}
                      </div>
                      )
                      })
                  }
                  <button className="refresh-btn" onClick={()=>setReviewSlice(6)}>
                    <img src={refreshPng} alt="refresh" width='20px' height='20px' />
                    <span>Показать еще</span>
                  </button>
                </div>
                {/* reviews comments end */}
                {/* reviews form feedback */}
                <btn className="reviews-form-mobile-btn" onClick={()=>{
                  setReviewsFromShow(true);
                }}>Оставить отзыв</btn>
                <div className={`reviews-form ${reviewsFormShow?'reviews-form-active':''}`} onClick={(e)=>{
                  e.target.className === 'reviews-form reviews-form-active' ?
                  setReviewsFromShow(false):''
                }}>
                  <div className="reviews-form-backdrop">
                      <div className="reviews-form-close-btn">
                          <span>Оставить отзыв</span> <button onClick={()=>setReviewsFromShow(false)}>&times;</button>
                      </div>
                      <div className="reviews-form-stars">
                        <span>Ваша оценка</span>
                        <ul>
                            {
                              stars(formStars).map((star,i)=>{
                                return (
                                  <li onClick={()=>{setFormStars(i+1)}}>{star}</li>
                                )
                              })
                            }
                        </ul>
                      </div>
                      <label>
                        <span>Ваше имя</span>
                        <input type="text" name="name" required placeholder='Введите Ваше имя' autoComplete='off'/>
                      </label>
                      <label>
                        <span>Ваш Email</span>
                        <input type="text" name="email" required placeholder='Введите Ваш Email' autoComplete='off'/>
                      </label>
                      <label>
                        <span>Ваш комментарий</span>
                        <textarea name="comment" placeholder='Введите Ваш комментарий' autoComplete='off'></textarea>
                      </label>
                      <button className='reviews-form-btn'>Оставить отзыв</button>
                    </div>
                </div>
                {/* reviews form feedback end */}
              </div>
            </div>
            {/* reviews section end */}
      </div>
        }
        {/* card-info-characteristic content end */}
      </div>
      {/* card info characteristic end */}
      {/* just looked  */}
      <JustLooked />
      {/* just looked end */}
      {/* ceo */}
      <Ceo 
      ceoList={true}
      image={1}
      />
      <Ceo 
      ceoList={false}
      image={2}
      class='ceo-flex-rev'
      />
      {/* ceo end */}
      </div>
    </div>
    {
      favoritesNotification?
      <div className="favorites-notification">
        {favorites?
        <>
          Товар добавлен в избранное
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='#42e4a0'>
              <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path>
              <path d="m11 17.414 5.707-5.707-1.414-1.414L11 14.586l-2.293-2.293-1.414 1.414z"></path>
          </svg>
        </>
        :
        <>
        Товар удалён из списка избранных
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='red'>
          <path d="M8 13h8v2H8z"></path>
          <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"></path>
        </svg>
        </>
        }
      </div>:''
    }
    </>
  )
};
CardInfo.propTypes = {
  onClick: PropTypes.func.isRequired
}
CardInfo.defaultProps = {
  onClick(){}
}
