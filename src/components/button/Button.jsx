import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';
// props 
//thisClass
// text
// width

export default function Button(props) {
  const {thisClass ,width ,text,onClick } = props;
  return (
    <button className={`button ${thisClass?thisClass:''}`}
    style={{maxWidth:width,width:'100%'}}
    onClick={onClick}
    >
        {text}
    </button>
  )
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired
}
Button.defaultProps = {
  onClick(){}
}