import React from 'react'
import BanerOfProducts from '../BanerOfProducts'
import Product_item from '../Product_item'
import item_1 from '../../assests/product-1.jpg'
import item_2 from '../../assests/product-2.jpg'
import item_3 from '../../assests/product-3-1.jpg'
import item_4 from '../../assests/product-4.jpg'
import item_5 from '../../assests/product-5.jpg'
import item_6 from '../../assests/product-6.jpg'
import item_7 from '../../assests/product-7.jpg'
import item_8 from '../../assests/product-8.jpg'
import item_9 from '../../assests/product-9.jpg'

import item_10 from '../../assests/product-10.jpg'
import item_11 from '../../assests/product-11.jpg'
import item_12 from '../../assests/product-12.jpg'
import item_13 from '../../assests/product-13.jpg'
import item_14 from '../../assests/product-14.jpg'
import item_15 from '../../assests/product-15.jpg'
import item_16 from '../../assests/product-16.jpg'
import item_17 from '../../assests/product-17.jpg'
import item_18 from '../../assests/product-18.jpg'



import Preloader from '../Preloader'
import Footer from '../Footer'
function Products() {
  return (
    <div>

      <Preloader/>
<BanerOfProducts/>

<div className='the__Products'>
    <Product_item img__1={item_1} img__2={item_18}  price="330 EGP" discripe =" فازة، بونبونيرة، مبخرة ، صينية " direction="https://wa.me/p/10008832605829777/201282093234" />
    <Product_item img__1={item_2} img__2={item_18}  price="280 EGP" discripe =" فازة، بونبونيرة، صدفه ،صينية " direction="https://wa.me/p/9763759003738957/201282093234"  />
    <Product_item img__1={item_3} img__2={item_18}  price="225 EGP" discripe ="فازة، بونبونيرة، كوستر، ريشه " direction="https://wa.me/p/9029823257146289/201282093234"  />
    <Product_item img__1={item_4} img__2={item_18}  price="135 EGP" discripe ="فازة،  كوستر  "direction="https://wa.me/p/29003466072600441/201282093234"  />
    <Product_item img__1={item_5} img__2={item_18}  price="200 EGP" discripe ="فازة، بونبونيرة، كوستر  "direction="https://wa.me/p/8740963686009920/201282093234"  />
    <Product_item img__1={item_6} img__2={item_18}  price="150 EGP" discripe ="فازة مدرج" direction="https://wa.me/p/9621280864628371/201282093234" />
    <Product_item img__1={item_7} img__2={item_18}  price="125 EGP" discripe =" فازة مفرغه" direction="https://wa.me/p/9733677506726795/201282093234" />
    <Product_item img__1={item_8} img__2={item_18}  price="175 EGP" discripe =" مبخره، كوستر"direction="https://wa.me/p/9812762182116073/201282093234"  />
    <Product_item img__1={item_9} img__2={item_18}  price="40 EGP" discripe ="ريشه" direction="https://wa.me/p/10023538881002086/201282093234" />
    <Product_item img__1={item_10} img__2={item_18}  price="40 EGP" discripe ="صدف"direction="https://wa.me/p/29447988871481785/201282093234"  />
    <Product_item img__1={item_11} img__2={item_18}  price="110 EGP" discripe ="فازه ،كوستر" direction="https://wa.me/p/8881451941959312/201282093234" />
    <Product_item img__1={item_12} img__2={item_18}  price="230 EGP" discripe ="فازه ،مبخره،كوستر" direction="https://wa.me/p/9224662487611449/201282093234" />
    <Product_item img__1={item_13} img__2={item_18}  price="220 EGP" discripe =" طقم فازات حرف n" direction="https://wa.me/p/29242203665395286/201282093234" />
    <Product_item img__1={item_14} img__2={item_18}  price="50 EGP" discripe ="كوستر" direction="https://wa.me/p/28993990790192036/201282093234" />
    <Product_item img__1={item_15} img__2={item_18}  price="275 EGP" discripe =" فازه، كوستر، مبخره، ريشه"direction="https://wa.me/p/29911700635140702/201282093234"  />
    <Product_item img__1={item_16} img__2={item_18}  price="270 EGP" discripe ="فازه ،مبخره ،كوستر،ريشه "direction="https://wa.me/p/9584059405031237/201282093234"  />
    <Product_item img__1={item_17} img__2={item_18}  price="360 EGP" discripe ="صينيه ،بنبونيره ،مبخره ،فازه" direction="https://wa.me/p/9947775405329809/201282093234" />

    
    
</div>


    </div>
  )
}

export default Products