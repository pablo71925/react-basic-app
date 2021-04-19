import React from 'react';
import'./product-category-row.style.css';
import Productosporting from './product-row/product-row-sporting.comp';
import Pro from './product-row/product-row-sporting.comp';
import Productoelectronics from './product-row/product-rows-electonics.comp';
import Producto from './product-row/product-rows-electonics.comp';


const ProductCategoryRow = () => {
    return (
        <div >
            <div className="titulo"> <b> Name Price </b></div>
            <div className="product-category-row-container">
            <div className="categoria"> <b> Sporting  Goods</b></div>
            </div>
            <Productosporting/>
             
            <div className="product-category-row-container">
            <div className="categoria"> <b> Electronics </b></div>
            </div>
            
            <Productoelectronics/>
           </div>
    );
}
export default ProductCategoryRow;          