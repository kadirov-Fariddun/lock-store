import React,{useState,useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom';

export default function PaginationBtns({productPerPage,totalProducts,paginate}) {
  const [paginationButtons,setPaginationButtons] = useState([]);
    const pageNumbers = []
    for(let i = 1; i<= Math.ceil(totalProducts/productPerPage); i++){
        pageNumbers.push(i);
    }
//     useEffect(()=>{
//       setPaginationButtons(document.querySelectorAll('.pagination-buttons li'));
//   },[paginationButtons]);

    
//   for(let i = 0; i < paginationButtons.length; i++){
//     paginationButtons[i].onclick = () => {
//         for(let j = 0; j < paginationButtons.length; j++){
//             paginationButtons[j].classList.remove('active');
//             paginationButtons[0].classList.remove('active');
//         };
//         paginationButtons[i].classList.add('active');
//     }
// }

  return (
    <>
      <ul className="pagination-buttons">
        {
        pageNumbers.map(num => (
            <li className={`${num==1?'active':''}`} key={num} onClick={()=>{paginate(num)}}>
              {num==1?
              <input type="radio" name='pagination-btn' defaultChecked/>:
              <input type="radio" name='pagination-btn'/>
              }
              <button name='pagination-btn'>{num}</button>
            </li>
        ))
        }
      </ul>
    </>
  )
}
