import React from 'react';
import { NavLink } from 'react-router-dom';
//components
import Card from '../card/Card';
import Carousel from '../carousel/Carousel';

export default function Popular(props) {
  return (
    <>
      {/* popular product */}
      <div className="popular-product">
        <div className="popular-product-title">
          {props.title}
        </div>
        <Carousel key={props.key} class='popular-product-slider'
        
        settings={{
          slidesToShow:4,
          slidesToScroll:4,
          infinite:false,
          responsive:[
          {
            breakpoint:1025,
            settings:{
              slidesToShow:3,
              slidesToScroll:3,
            }
          },
          {
            breakpoint:769,
            settings:{
              slidesToShow:2,
              slidesToScroll:2,
            }
          },
          {
            breakpoint:501,
            settings:{
              slidesToShow:1.5,
              slidesToScroll:1,
            }
          },
          {
            breakpoint:401,
            settings:{
              slidesToShow:1.2,
              slidesToScroll:1,
            }
          },
        ]
        }}
      >
          
          {
            props.data.map(card=>{
              return(
              <NavLink to={`/product-`+card.id}
              className='popular-product-card'>
                <Card 
                id={card.id}
                key={card.id}
                image={card.images[0]}
                count={true}
                countProduct={card.count}
                gift={true}
                sale={true}
                stars={card.stars}
                feedback={card.feedback}
                name={card.name}
                price={card.price}
                discount={card.discount}
                />
              </NavLink>)
            })
          }
        </Carousel>
    </div>
    {/* popular product end */}
    </>
  )
}
