import React from 'react'
import {Link} from 'react-router-dom'

export default function Checkout() {

  let carItem=
  { 
    "cartItems": 
    [
        {
        "id": 1 ,
        "name": "蘋果", 
        "image": "apple.jpg", 
        "price":5 ,
        "description": "新鮮蘋果50克",
         "quantity": 1
        },
        {
        "id": 2 ,
        "name": "橙子", 
        "image": "orange.jpg", 
        "price":15 ,
        "description": "新鮮橙150克" ,
         "quantity": 3

        },
        {
        "id": 3 ,
        "name": "西瓜", 
        "image": "xigua.jpg", 
        "price":15 ,
        "description": "新西瓜50克",
         "quantity": 1
        }
   ]
   }

  let {cartItems}=carItem
  let cartEmpty=cartItems.length<=0?true:false
  /*  let grandTotal=cartItmes.reduce((total,product)=>{
     return total+=product.price*product.quantity
   },0) */

   let grandTotal = cartItems.reduce((total, product)=>{
        return total += product.price*product.quantity
    },0)

    const freeShippingPrice = 99

 

  return (
    <div>
      <title mainTitle='Pay'/>
      {
        cartEmpty &&
        <div id="carEmpty">
           <Link to="/">去產品頁</Link>
        </div>
      }
      {
        !cartEmpty &&
      <div>
        <div id="carSection">
           {/*  {cartItmes[0].description}     */} 
           {cartItems.map((product)=>(
             <div key={product.id}>
               <img src = {process.env.PUBLIC_URL+'/img/'+product.image}/> 
                {product.name} 
                描述: {product.description}
                價錢: {product.price}
                購買數量：{product.quantity}
             </div>

           ))}
        </div>
        <div id="checkOutSection">
          <div>
            全部貨品合共
          </div>
          <div>
            {grandTotal}
          </div>
            {
                grandTotal>=freeShippingPrice?
                <div>免費送貨</div>:<div>還差{freeShippingPrice-grandTotal}</div>
            }
            
        </div>
    </div>
     }
    </div>
  )
}




