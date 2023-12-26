import React, { useEffect, useState } from 'react';
import './filter.scss';
// dataBase 
import db from '../../db/db'
export default function Filter() {
    // для того что бы управлять слайдером цены 
    const [valMin,setValMin] = useState(1000);
    const [valMax,setValMax] = useState(50000);
    // это для того что бы управлять состоянием цены развернуто или завернуто
    // database 
    const data = JSON.parse(db);
    // филтруем по типу 
    const [priceShow,setPriceShow] = useState(false);
    const [peculiaritiesShow,setPeculiaritiesShow] = useState(false);
    const [colorShow,setColorShow] = useState(false);
    const [materialShow,setMaterialShow] = useState(false);
    const [filterShow,setFilterShow] = useState(false);
    // tags all checked
    const [isChecked,setIsChecked] = useState([]);
    console.log('ischecked: '+isChecked);

    // filter по типу 
    function filterTypes(db,key){
        let data = [];
        db.forEach(obj => {
            if(obj.type === key){
                data.push(obj)
            };
        });
        return data;
    };
    
  return (
    <>
    <div className="filter">
        <div className={`filter-desc ${filterShow?'filter-desc-show':''}`}>
            <button className="filter-reset-btn">
             Сбросить фильтры
            </button>
            <div className="filter-list">
                <div className="filter-list-title">
                Фильтр
                </div>

                {/* price filter */}
                <div className={`filter-price ${priceShow?'filter-price-show':''}`}>
                    <div className="filter-price-title filter-sub-title" onClick={()=>{
                        !priceShow?setPriceShow(true):setPriceShow(false);
                    }}>
                        <span>Цена</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="filter-price-action">
                        <div className="filter-price-values">
                            <span>От {valMin}</span>
                            <span>До {valMax}</span>
                        </div>
                        <div className="filter-price-scrollBar">
                            <span  style={{
                                left:((valMin/50000)*100)+"%",
                                right:(100-(valMax/50000)*100)+'%',
                        }}></span>
                            <input type="range" name="price-scrollBar-min" min={1000} max={50000} step={1000} defaultValue={1000}
                            value={valMin}
                            onInput={(e)=> {
                                if(valMax - e.target.value < 9000){
                                setValMin(valMax - 10000);
                                e.target.value = valMin;
                                }else{
                                    setValMin(e.target.value); 
                                    e.target.value = valMin;
                                }
                            }}
                            />
                            <input type="range" name="price-scrollBar-max" min={1000} max={50000} step={1000} defaultValue={50000}
                            value={valMax}
                            onInput={(e)=> {
                                if(e.target.value - valMin < 10000){
                                    setValMax(valMax);
                                    e.target.value = valMax;
                                }else{
                                    setValMax(Number(e.target.value)); 
                                    e.target.value = valMax;
                                }
                            }}
                            />
                        </div>
                    </div>
                </div>
                {/* filter price end */}
                {/* Peculiarities */}
                <div className={`filter-peculiarities ${peculiaritiesShow?'filter-peculiarities-show':''}`}>
                    <div className="peculiarities-title filter-sub-title" onClick={() => {
                        !peculiaritiesShow?setPeculiaritiesShow(true):setPeculiaritiesShow(false);
                    }}>
                    <span>Особенности</span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div className="filter-peculiarities-action">
                        <form action="#" 
                        // сначала проверяем  какие инпуты чеккед
                        
                        onInput={(e) => {
                            if(e.target.checked){
                                setIsChecked([...isChecked,e.target.value])
                            }else{
                                isChecked.forEach((i,index)=>{
                                    if(i == e.target.value){
                                        isChecked.splice(index,1);
                                        setIsChecked([...isChecked])
                                    }
                                })
                            }
                        }}>
                            <label>
                                <input type="checkbox" name='lock-type' value={data[0].type}/>
                                Электронные кодовые замки
                                <span>({filterTypes(data,'electronic-codes-locks').length})</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value={data[1].type}/>
                                Биометрические замки
                                <span>({filterTypes(data,data[1].type).length})</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value={data[2].type}/>
                                Замок с отппечатком
                                <span>({filterTypes(data,data[2].type).length})</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Замок с бесконтактной картой
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Программируемые замки
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Замки на батарейках
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Замки с удаленным доступом
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Bluetooth замки
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Электронные замки для квартиры
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Замки для стеклянных дверей
                                <span>(0)</span>
                            </label>
                            <label>
                                <input type="checkbox" name='lock-type' value='none'/>
                                Электронные цилиндры
                                <span>(0)</span>
                            </label>
                        </form>
                    </div>
                </div>
                {/* Peculiarities end */}
                {/* filter color */}
                <div className={`filter-color ${colorShow? 'filter-color-show':''}`}>
                    <div className="filter-color-title filter-sub-title" onClick={() => {
                            !colorShow?setColorShow(true):setColorShow(false);
                        }}>
                        <span>Цвет</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="filter-color-action">
                        <form action="">
                            <label>
                                <input type="checkbox" name="#fff" />
                                <span>✓</span>
                            </label>
                            <label>
                                <input type="checkbox" name="1B1A20" />
                                <span>✓</span>
                            </label>
                            <label>
                                <input type="checkbox" name="E2C355" />
                                <span>✓</span>
                            </label>
                        </form>
                        
                    </div>
                </div>
                {/* filter color end */}
                {/* filter material */}
                <div className={`filter-material ${materialShow?'filter-material-show':''}`}>
                    <div className="filter-material-title filter-sub-title" onClick={() => {
                                !materialShow?setMaterialShow(true):setMaterialShow(false);
                            }}>
                            <span>Материал</span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </div>
                    <div className="filter-material-action">
                        <input type="checkbox" checked />
                        <span>{data[0].material}</span>
                    </div>
                </div>
                {/* filter material end */}
                <button className="filter-show-btn" onClick={()=>setFilterShow(false)}>
                    Показать
                </button>
            </div>
        </div>
        <div className="filter-mob">
            <button className="filter-mob-btn" onClick={()=>setFilterShow(true)}>
                Фильтр
            </button>
        </div>
    </div>
    </>
  )
}
