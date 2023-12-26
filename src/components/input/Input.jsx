import React,{forwardRef} from 'react';
import { InputMask} from '@react-input/mask';
import './input.scss';
// props documentation 
// class
// title
// type
// placeholder
//typeTel
// value
const Input = forwardRef((props,ref)=>
{
  return (
    <label className={props.class?props.class:''}>
      <span>{props.title}</span>
      {
      props.typeTel ?
      <InputMask mask="+998(__)___-__-__" replacement={{ _: /\d/ }} required  placeholder='+998 ( _ _ ) _ _ _  _ _  _ _' ref={ref} />:
      <input type={props.type} placeholder={props.placeholder} defaultValue={props.value} ref={ref} name={props.name}/>
      }
    </label>
  )
}
) 
export default Input;
