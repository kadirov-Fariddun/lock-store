import React,{useState,useEffect} from 'react';
import logo from '../../images/Logo.png';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props) {
    const {onClickLiked,onClickBasket,data} = props;
    const [imageActive,setImageActive] = useState(0);
    const [downMenu,setDownMenu] = useState(false);
    const [catalogMenuShow,setCatalogMenuShow] = useState(false)
    const [headerMobileShow,setHeaderMobileShow] = useState(false)
    const menuDownP = document.querySelectorAll('.menu-down-flex p');
    const [isBasket,setIsBasket] = useState(false);
    const [isLiked,setIsLiked] = useState(false);
    for (let i = 0; i < menuDownP.length; i++) {
        menuDownP[i].onclick = () => {
            for (let j = 0; j < menuDownP.length; j++) {
                menuDownP[j].classList.remove('active');
            }
            menuDownP[i].classList.add('active');
        }
    };
    function lsCheck(objName,setter){
        if(localStorage.getItem(objName) && JSON.parse(localStorage.getItem(objName)).length !== 0){
        return setter(true);
        }else setter(false);
    }
    useEffect(() => {
        lsCheck('basket',setIsBasket); 
        lsCheck('favorites',setIsLiked); 
    }, []);
  
  return (
    <>
    <header className='header'>
        {/* header sectop  */}
        <div className="header-desc">
            <div className="header-top">
                <div className="container">
                    <p>Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09</p>
                    <a href="tel:+998933572014" className="header-top-feedback">Обратный звонок</a>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-bottom-flex">
                   
                    <NavLink to="/" className='header-logo'>
                        <img src={logo} alt="LOGOTYPE" />
                    </NavLink>
                    <nav className="header-navbar">
                        <ul>
                            <li>
                                <NavLink to="/">Главная</NavLink>
                            </li>
                            <li className='desctop-catalog-menu'>
                            <p onClick={()=>setDownMenu(!downMenu)}>
                                Каталог 
                                <svg className={`${downMenu ? 'active-down-menu-svg':''}`}  width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                            <div className={`menu-down ${downMenu ? 'active-down-menu':''}`}>
                                <div className="menu-down-flex">
                                    <div>
                                        <p className='active' onClick={()=>{setImageActive(0);}}>Накладные электронные замки</p>
                                        <p onClick={()=>{setImageActive(1);}}>Врезные электронные замки</p>
                                        <p onClick={()=>{setImageActive(2);}}>Замки для квартиры</p>
                                        <p onClick={()=>{setImageActive(3);}}>Замки для дома</p>
                                        <p onClick={()=>{setImageActive(4);}}>Замки для отелей</p>
                                        <p onClick={()=>{setImageActive(5);}}>Замки для офиса</p>
                                        <p onClick={()=>{setImageActive(6);}}>Замки для шкафчиков</p>
                                        <p onClick={()=>{setImageActive(7);}}>Накладные электронные замки</p>
                                        <NavLink to="/catalog" className='menu-down-btn'
                                        onClick={()=>setDownMenu(false)}>
                                        Смотреть все
                                        </NavLink>
                                    </div>
                                    <div>
                                       <img src={data[imageActive].images[0]} alt="image" />
                                    </div>
                            </div>
                            </div>
                            </li>
                            <li className="mobile-catalog-menu">
                                
                            </li>
                            <li>
                                <NavLink to="/trade">Оптовая продажа</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">О нас</NavLink>
                            </li>
                        </ul>
                    </nav>
                        <a href="tel:+998933572014" className='header-bottom-feedback'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.7719 14.125C18.7206 14.0844 15 11.4025 13.9787 11.595C13.4912 11.6812 13.2125 12.0138 12.6531 12.6794C12.5631 12.7869 12.3469 13.0444 12.1788 13.2275C11.8252 13.1122 11.4804 12.9718 11.1469 12.8075C9.42533 11.9694 8.03437 10.5784 7.19625 8.85687C7.03179 8.52339 6.89143 8.17855 6.77625 7.825C6.96 7.65625 7.2175 7.44 7.3275 7.3475C7.99 6.79125 8.32312 6.5125 8.40938 6.02375C8.58625 5.01125 5.90625 1.265 5.87812 1.23125C5.75653 1.05754 5.59784 0.913039 5.41355 0.808189C5.22925 0.70334 5.02395 0.640768 4.8125 0.625C3.72625 0.625 0.625 4.64813 0.625 5.32562C0.625 5.365 0.681875 9.3675 5.6175 14.3881C10.6331 19.3181 14.635 19.375 14.6744 19.375C15.3525 19.375 19.375 16.2737 19.375 15.1875C19.3594 14.9768 19.2972 14.7722 19.1929 14.5884C19.0886 14.4047 18.9448 14.2464 18.7719 14.125Z" fill="#4295E4"/>
                            </svg>
                            +998 (93) 357 20 14
                        </a>
                        <button className='like-product' onClick={onClickLiked}>
                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 1C3.57485 1 1 3.60947 1 6.82891C1 9.42778 2.00625 15.5958 11.9112 21.831C12.0886 21.9415 12.2923 22 12.5 22C12.7077 22 12.9114 21.9415 13.0888 21.831C22.9937 15.5958 24 9.42778 24 6.82891C24 3.60947 21.4251 1 18.25 1C15.0748 1 12.5 4.53267 12.5 4.53267C12.5 4.53267 9.92515 1 6.75 1Z" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {isLiked?<span></span>:''}
                        </button>
                        <button className='basket' onClick={onClickBasket}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6665 9.33334H25.0532C25.4257 9.33336 25.7942 9.41144 26.1347 9.56255C26.4752 9.71366 26.7803 9.93446 27.0303 10.2107C27.2803 10.4869 27.4696 10.8125 27.5861 11.1664C27.7026 11.5203 27.7436 11.8946 27.7065 12.2653L26.9065 20.2654C26.8407 20.9234 26.5328 21.5334 26.0425 21.9772C25.5522 22.4209 24.9145 22.6667 24.2532 22.6667H11.5198C10.9031 22.6669 10.3054 22.4534 9.82843 22.0625C9.35145 21.6716 9.02471 21.1274 8.90384 20.5227L6.6665 9.33334Z" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.6665 9.33333L5.5865 5.00933C5.51427 4.721 5.34777 4.46508 5.11345 4.28221C4.87912 4.09934 4.59041 4.00001 4.29317 4H2.6665" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.6665 28H13.3332" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.3335 28H24.0002" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {isBasket?<span></span>:''}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* header desctop end */}
        {/* header mobile */}
        <div className={`header-mobile ${headerMobileShow?'header-mobile-show':''}`}>
            <div className="header-mobile-top">
                Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
            </div>
            
            <div className={`header-mobile-bottom ${catalogMenuShow ? 'header-mobile-bottom-none':''}`}>
               <button className={`header-mobile-btn ${headerMobileShow?'header-mobile-btn-active':''}`} onClick={()=>setHeaderMobileShow(!headerMobileShow)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                    </svg>
                    <p>&times;</p>
               </button>
               <button className='like-product' onClick={onClickLiked}>
                    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.75 1C3.57485 1 1 3.60947 1 6.82891C1 9.42778 2.00625 15.5958 11.9112 21.831C12.0886 21.9415 12.2923 22 12.5 22C12.7077 22 12.9114 21.9415 13.0888 21.831C22.9937 15.5958 24 9.42778 24 6.82891C24 3.60947 21.4251 1 18.25 1C15.0748 1 12.5 4.53267 12.5 4.53267C12.5 4.53267 9.92515 1 6.75 1Z" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {isLiked?<span></span>:''}
                </button>
                <button className='basket' onClick={onClickBasket}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.6665 9.33334H25.0532C25.4257 9.33336 25.7942 9.41144 26.1347 9.56255C26.4752 9.71366 26.7803 9.93446 27.0303 10.2107C27.2803 10.4869 27.4696 10.8125 27.5861 11.1664C27.7026 11.5203 27.7436 11.8946 27.7065 12.2653L26.9065 20.2654C26.8407 20.9234 26.5328 21.5334 26.0425 21.9772C25.5522 22.4209 24.9145 22.6667 24.2532 22.6667H11.5198C10.9031 22.6669 10.3054 22.4534 9.82843 22.0625C9.35145 21.6716 9.02471 21.1274 8.90384 20.5227L6.6665 9.33334Z" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.6665 9.33333L5.5865 5.00933C5.51427 4.721 5.34777 4.46508 5.11345 4.28221C4.87912 4.09934 4.59041 4.00001 4.29317 4H2.6665" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6665 28H13.3332" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.3335 28H24.0002" stroke="#454F5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {isBasket?<span></span>:''}
                </button>
            </div>
            <nav className={`header-mobile-navbar ${catalogMenuShow ? 'header-mobile-navbar-none':''}`}>
                <ul>
                
                        <li>
                            <NavLink to="/" onClick={()=>setHeaderMobileShow(false)}>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <a onClick={()=>setCatalogMenuShow(!catalogMenuShow)}>
                                Каталог 
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <NavLink to="/trade" onClick={()=>setHeaderMobileShow(false)}>Оптовая продажа</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={()=>setHeaderMobileShow(false)}>О нас</NavLink>
                        </li>
                        <div className="header-mobile-feedback">
                            <a href="tel:+998933572014">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.7719 14.125C18.7206 14.0844 15 11.4025 13.9787 11.595C13.4912 11.6812 13.2125 12.0138 12.6531 12.6794C12.5631 12.7869 12.3469 13.0444 12.1788 13.2275C11.8252 13.1122 11.4804 12.9718 11.1469 12.8075C9.42533 11.9694 8.03437 10.5784 7.19625 8.85687C7.03179 8.52339 6.89143 8.17855 6.77625 7.825C6.96 7.65625 7.2175 7.44 7.3275 7.3475C7.99 6.79125 8.32312 6.5125 8.40938 6.02375C8.58625 5.01125 5.90625 1.265 5.87812 1.23125C5.75653 1.05754 5.59784 0.913039 5.41355 0.808189C5.22925 0.70334 5.02395 0.640768 4.8125 0.625C3.72625 0.625 0.625 4.64813 0.625 5.32562C0.625 5.365 0.681875 9.3675 5.6175 14.3881C10.6331 19.3181 14.635 19.375 14.6744 19.375C15.3525 19.375 19.375 16.2737 19.375 15.1875C19.3594 14.9768 19.2972 14.7722 19.1929 14.5884C19.0886 14.4047 18.9448 14.2464 18.7719 14.125Z" fill="#4295E4"/>
                                </svg>
                                +998 (93) 357 20 14
                            </a>
                            <a href="tel:+998933572014">Обратный звонок</a>
                       </div>
                </ul>
            </nav>
            <div className={`catalog-menu-show ${catalogMenuShow?'catalog-menu-show-active':''}`}>
                <h1 className="catalog-menu-show-title">
                    <button className="catalog-menu-show-back" onClick={()=>setCatalogMenuShow(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg>
                    </button>
                    Каталог
                </h1>
                <div className="catalog-menu-show-products">
                    <div className="catalog-menu-show-product">
                        <img src={data[0].images[0]} alt="image" />
                        <p>Накладные электронные замки</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[1].images[0]} alt="image" />
                        <p>Врезные электроные замки</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[2].images[0]} alt="image" />
                        <p>Замки для квартиры</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[3].images[0]} alt="image" />
                        <p>Замки для дома</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[4].images[0]} alt="image" />
                        <p>Замки для отелей</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[5].images[0]} alt="image" />
                        <p>Замки для офиса</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[6].images[0]} alt="image" />
                        <p>Замки для шкафчиков</p>
                    </div>
                    <div className="catalog-menu-show-product">
                        <img src={data[7].images[0]} alt="image" />
                        <p>Замки для раздевалок</p>
                    </div>
                </div>
                <NavLink to="/catalog" className='catalog-menu-show-btn'
                onClick={()=>{
                    setCatalogMenuShow(false);
                    setHeaderMobileShow(false);
                }}>
                   Смотреть все
                </NavLink>
            </div> 
        </div>
        {/* header mobile end */}
    </header>
    
    </>
  )
}


Header.propTypes = {
    onClickLiked:PropTypes.func.isRequired,
    onClickBasket:PropTypes.func.isRequired
}
Header.defaultProps = {
    onClickLiked(){},
    onClickBasket(){}
}