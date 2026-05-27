import React from 'react'

export default function Checkout() {

  let carItem=
  { 
    "cartItmes": 
    [
          {
        "id": 1 ,
        "name": "蘋果", 
        "image": "apple.jpg", 
        "price":5 ,
        "description": "新鮮蘋果50克"
        },
        {
        "id": 2 ,
        "name": "橙子", 
        "image": "orange.jpg", 
        "price":15 ,
        "description": "新鮮橙150克"
        },
        {
        "id": 3 ,
        "name": "西瓜", 
        "image": "xigua.jpg", 
        "price":15 ,
        "description": "新西瓜50克"
        }
   ]
   }

  let {cartItmes}=carItem
  let cartEmpty=cartItmes.length>=0?true:false

  return (
    <div>
      <title mainTitle='Pay'/>
     {
       !cartEmpty&&
      <div>
        <div id="carSection">
            {cartItmes[0].description}     
        </div>
        <div id="checkOutSection">
            {
                
            }
            
        </div>
    </div>
     }
    </div>
  )
}




