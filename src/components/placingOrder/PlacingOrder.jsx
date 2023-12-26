import React from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
// styles 
import './placingOrder.scss';

export default function PlacingOrder({product,shopCount}) {
  return (
    <>
      <div className="placing-order">
        <div className="container">
            <div className="placing-order-title title">
              Оформление заказа
            </div>
            <div className="placing-order-flex">
                <form className="placing-order-form">
                    <div className="placing-order-form-title">
                        .1. Контактные данные
                    </div>
                    <div className="placing-order-form-flex">
                        <Input 
                        title='Фамилия'
                        type='text'
                        placeholder='Зайцев'/>
                        <Input 
                        title='Имя'
                        type='text'
                        placeholder='Михаил'/>
                    </div>
                    <div className="placing-order-form-flex">
                        <Input 
                        class='w300'
                        title='Телефон'
                        typeTel={true}/>
                        <Input 
                        class='w300'
                        title='E-mail'
                        type='email'
                        placeholder='example@mail.ru'/>
                    </div>
                    <div className="placing-order-form-title">
                       2. Доставка
                    </div>
                    <Input 
                    type='radio'
                    class='placing-order-form-radio'
                    title='Сдек'
                    value='Сдек'
                    name='placing'
                    />
                    <Input 
                    type='radio'
                    class='placing-order-form-radio'
                    title='Почта России'
                    value='Почта-России'
                    name='placing'
                    />
                    <Input 
                    type='radio'
                    class='placing-order-form-radio'
                    title='Деловые линии'
                    value='Деловые-линии'
                    name='placing'
                    />
                    <div className="placing-order-form-title">
                      3. Оплата
                    </div>
                    <Input 
                    type='radio'
                    class='placing-order-form-radio'
                    title='Оплата при получении товара'
                    value='Оплата-при-получении-товара'
                    name='payment'
                    />
                    <Input 
                    type='radio'
                    class='placing-order-form-radio'
                    title='Банковская карта'
                    value='Банковская-карта'
                    name='payment'
                    />
                </form>
                <div className="placing-order-card">
                    <div className="placing-order-card-title">Итого</div>
                    <div className="placing-order-card-flex">
                        <img src={product.images[0]} alt="description" width='135px' height='120px' />
                        <div className="placing-order-card-titles">
                            <div className="placing-order-card-titles-title">{product.title}</div>
                            <div className="placing-order-card-titles-text">
                            + Подарок: <span>“Приложение к замкам Golden Service”</span>
                            </div>
                            <div className="placing-order-card-count-price">
                        <p>Количество: <span>{shopCount}шт</span></p>
                        <p>К оплате: <span>{product.discount * shopCount}₽</span></p>
                    </div>
                    </div>
                    </div>
                   
                 <div className="placing-order-card-form">
                    <div className="placing-order-form-title">
                    Комплектация
                    </div>
                    <div className="placing-order-form-flex">
                    <Input 
                    type='checkbox'
                    class='placing-order-card-form-checkbox'
                    title='Нужна установка'
                    value='Нужна-установка'
                    />
                    <Input 
                    type='checkbox'
                    class='placing-order-card-form-checkbox'
                    title='Настройка софта'
                    value='Настройка-софта'
                    />
                    </div>
                    <label className='placing-order-card-form-privacy'>
                    <input type="checkbox" name='privacy' />
                       Оформляя заказ, я принимаю условия <span>пользовательського соглашения</span>
                    </label>
                   <Button thisClass="placing-order-card-form-btn" text='Подтвердить заказ' width='300px'/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
