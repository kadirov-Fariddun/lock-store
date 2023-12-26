import React from 'react';

const WhyChooseUs = (props) => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="title why-choose-us-title">{props.title}</div>
      </div>
      <div className="why-choose-us-flex">
        <div className="why-choose-us-images">
          <img src={props.src} alt="Description" />
        </div>
        <div className="why-choose-us-info">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;