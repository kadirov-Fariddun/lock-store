import React from 'react';
import ceo1 from '../../images/ceo1.jpg';
import ceo2 from '../../images/ceo2.jpg';
import CheckTitle from '../checkTitle/CheckTitle';
import './ceo.scss';


export default function Ceo(props) {
  return (
    <>
      <div className={`ceo ${props.class?props.class:''}`}>
        <div className="container">
            <div className="ceo-flex">
                <div className="ceo-info">
                <div className="ceo-title">
                    Eget quis quam metus, scelerisque.
                </div>
                <div className="ceo-text">
                    Odio felis sit leo, massa, mauris, at pulvinar ultrices.
                    Eu porttitor molestie massa porttitor.
                    Quisque at turpis ut proin eu et magna etiam rhoncus.
                </div>
                {props.ceoList?
                <ul className="ceo-list">
                    <li>
                        <CheckTitle title='Межкомнатую дверь'/>
                    </li>
                    <li>
                        <CheckTitle title='Межкомнатую дверь'/>
                    </li>
                    <li>
                        <CheckTitle title='Деревянную дверь'/>
                    </li>
                    <li>
                        <CheckTitle title='Деревянную дверь'/>
                    </li>
                </ul>:''
                }
                    <div className="ceo-bottom-text">
                        Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo.
                        Nullam ullamcorper id enim fermentum integer praesent bibendum.
                        In ullamcorper purus scelerisque malesuada et egestas.
                        Ac dictumst mauris sed facilisis.
                    </div>
                </div>
                <div className="ceo-image">
                    <img src={props.image===1?ceo1:props.image===2?ceo2:''} width='50%' height='auto' alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
