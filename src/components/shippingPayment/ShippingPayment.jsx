import React from 'react';
import './shippingPayment.scss';
//components
import PathHistory from '../path-history/PathHistory.jsx';
import HowWeWorkCard from '../howWeWorkCard/HowWeWorkCard.jsx';
import CheckTitle from '../checkTitle/CheckTitle.jsx';
// images
import PochtaRossiyaJpg from '../../images/pochta-rossiya.jpg';
import PochtaRossiyaMainJpg from '../../images/pochta-rossiya-main.jpg';
import delovayaLiniyaJpg from '../../images/delovaya-liniya.jpg';
import delovayaLiniyaMainJpg from '../../images/delovaya-liniya-main.jpg';
import sdekMainJpg from '../../images/sdek-main.jpg';
import sdekJpg from '../../images/sdek.jpg';


export default function ShippingPayment() {
  return (
    <>
      <div className="shipping-payment">
            <PathHistory path={[{
                path:'Доставка и оплата',
                last:true,
            }]}/>
            <div className="container">
                <div className="shipping-payment-title title">Доставка</div>
            </div>
            <div className="container">
                <div className="shipping-payment-flex">
                    <HowWeWorkCard 
                    src={PochtaRossiyaMainJpg}
                    subSrc={PochtaRossiyaJpg}
                    title='Почта России'
                    >
                        <CheckTitle 
                        title='Получение посылки согласно условиям перевозчика'/>
                        <CheckTitle 
                        title='Доставка в течении 1-2 дней'/>
                    </HowWeWorkCard>
                    <HowWeWorkCard 
                    src={delovayaLiniyaMainJpg}
                    subSrc={delovayaLiniyaJpg}
                    title='Деловые линии'
                    >
                        <CheckTitle 
                        title='Получение посылки согласно условиям перевозчика'/>
                        <CheckTitle 
                        title='Доставка в течении 1-2 дней'/>
                    </HowWeWorkCard>
                    <HowWeWorkCard 
                    src={sdekMainJpg}
                    subSrc={sdekJpg}
                    title='СДЭК'
                    >
                        <CheckTitle 
                        title='Получение посылки согласно условиям перевозчика'/>
                        <CheckTitle 
                        title='Доставка в течении 1-2 дней'/>
                    </HowWeWorkCard>
                </div>
                {/*информамции*/}
                <div className="title ">Оплата</div>
                <div className='shipping-payment-info'>
                    <div className="shipping-payment-info-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'#4295E4'}}>
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path>
                        </svg>
                        Банковская карта
                    </div>
                    <div className="shipping-payment-info-text">
                        Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ<br/>
                        на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных<br/>
                        платежей, необходимо лишь подтвердить платеж.
                    </div>
                </div>
                <div className='shipping-payment-info'>
                    <div className="shipping-payment-info-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'#4295E4'}}>
                        <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                    </svg>
                        Оплата при получении товара
                    </div>
                    <div className="shipping-payment-info-text">
                        Онлайн заказ можно оплатить с помощью банковской карты, выпущенной на территории России. Оформляя заказ<br/>
                        на сайте, в пункте «Оплата» выберите «Банковская карта». После переадресации на страницу системы безопасных<br/>
                        платежей, необходимо лишь подтвердить платеж.
                    </div>
                </div>
                {/*информамции end*/}
                {/* гарантии */}
                <div className="guarantees">
                   <div className="title">Гарантии</div>
                   <div className="guarantees-text">
                      На все товары, приобретенные в нашем магазине, предоставляется гарантия, дающая право на:
                   </div>
                   <ul className="guarantees-list">
                     <li>
                       <span></span>
                       обмен или возврат товара в срок до 14 дней с момента приобретения;
                     </li>
                     <li>
                       <span></span>
                       обмен или возврат товара на основании акта, выданного Авторизованным сервисным центром по результатам<br/>гарантийного обслуживания (в соответствии с Законом РФ «О защите прав потребителей»).
                     </li>
                   </ul>
                </div>

                {/* гарантии end */}
                {/* возврат товара */}
                <div className="guarantees">
                   <div className="title">Возврат товара</div>
                   <div className="guarantees-text">
                   Подготовьте, пожалуйста, все необходимые документы:
                   </div>
                   <ul className="guarantees-list">
                     <li>
                       <span></span>
                       выданный продавцом расчетный документ (чек / акт приема-передачи / накладная или др.), подтверждающий<br/>факт приобретения;
                     </li>
                     <li>
                       <span></span>
                       гарантийный талон;
                     </li>
                     <li>
                       <span></span>
                       документ, удостоверяющий личность;
                     </li>
                     <li>
                       <span></span>
                       идентификационный налоговый номер (ИНН);
                     </li>
                     <li style={{marginBottom:'24px'}}>
                       <span></span>
                       в случае оплаты покупки банковской картой – актуальные реквизиты карточного счета.
                     </li>
                   </ul>
                   <div className="guarantees-text">
                     Передайте товар на гарантийное обслуживание, обязательно приложите указанные выше документы.
                   </div>
                </div>
                {/* гарантии end */}
                <p style={{display:'block'}}>
                    Полезная информация о правах потребителя в случае приобретения им товара ненадлежащего качества – 
                    <span style={{borderBottom: '1px solid #4D4D4D'}}>Закона РФ<br/>«О защите прав потребителей».</span>
                </p>
                <p style={{display:'block',marginBottom:'80px'}}>
                    Уважаемый покупатель, приносим извинения за неудобства, случившиеся в связи с выходом из строя. По вашему<br/>
                    обращению будут приняты все меры для быстрого решения вашей проблемы.
                </p>
            </div>
      </div>
    </>
  )
}
