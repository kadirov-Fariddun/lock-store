import React,{useState,useEffect} from 'react';
import Card from '../card/Card';
import PaginationBtns from './PaginationBtns';
import { NavLink } from 'react-router-dom';
// short documentation 
//props
// counViewProduct | number


export default function Pagination(props) {
    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [productPerPage] = useState(9);
    // index первой странички 
    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage;
    const currentProduct = products.slice(firstProductIndex,lastProductIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber) ;
    const data = JSON.parse(props.db);
    useEffect(()=>{
        // получаем все продукты 
        setProducts(data);
    },[]);
   
  return (
    <>
      <div className="pagination">
        <div className="pagination-grid">
            {
            currentProduct.map(product=>(
            <NavLink to={`/product-${product.id}`} key={product.id}>
                <Card 
                id={product.id}
                class='pagination-card'
                image={product.images[0]}
                count={true}
                countProduct={product.count}
                gift={true}
                sale={true}
                stars={product.stars}
                feedback={product.feedback}
                name={product.name}
                discount={product.discount}
                price={product.price}
                />
            </NavLink>
            ))
            }
        </div>
        <PaginationBtns 
            productPerPage={productPerPage}
            totalProducts={products.length}
            paginate={paginate}
            />
      </div>
    </>
  )
}
