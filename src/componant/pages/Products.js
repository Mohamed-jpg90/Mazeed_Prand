import React from 'react'
import BanerOfProducts from '../BanerOfProducts'
import Product_item from '../Product_item'
import item_1 from '../../assests/img_1.jpg'
import item_2 from '../../assests/img_2.jpg'
import item_3 from '../../assests/img_3.jpg'
import item_4 from '../../assests/img_4.jpg'
import Preloader from '../Preloader'
import Footer from '../Footer'
function Products() {
  return (
    <div>

      <Preloader/>
<BanerOfProducts/>

<div className='the__Products'>
    <Product_item img__1={item_1} img__2={item_2}  price="39$"/>
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  
    <Product_item img__1={item_1} img__2={item_2}  price="39$"/>
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  
    <Product_item img__1={item_1} img__2={item_2}  price="39$"/>
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  
    <Product_item img__1={item_3} img__2={item_4}  price="39$"/>  

    
</div>


    </div>
  )
}

export default Products