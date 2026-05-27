import React from 'react' 
import {useState,useEffect}from 'react'
import QuantityBtn from './QuantityBtn'
import productsData from './data/products.json';

export default function ProductList() {
/*  let productList=[
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
 }
] */

 let [productList,setProductList]=useState([])
 let [input,setInput]=useState([''])
/**/
   /* 
useEffect(()=>{
    fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
.then(Response=>Response.json())
.then(data=>setProductList(data)) 
console.log(productList)
},[])
 */
useEffect(() => {
    // 方法1：直接使用导入的数据
    setProductList(productsData);
    // setLoading(false);
    
    console.log('本地产品数据:', productsData);
  }, []);

useEffect(()=>{
    if(input.length>4)
        console.log('enough')
    else
        console.log('not enough')
},[input])

return (
    <div>
        <input type='text' onChange={e=>setInput(e.target.value)}/>
        <h1>吃飯啦去東山湖吃</h1>
       {/*  <button onClick={()=>setProductList('change')}></button> */}
        {/* <img src={process.env.PUBLIC_URL+'/img/apple.jpg'}/> */}
        <div>
            {
                productList.map(product=>( 
                  <div key={product.id}>
                  {product.id} <br/>
                  {product.name}<br/>
                  <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/>
                  {product.description}<br/>
                 Price：   {product.price}<br/><br/>
                 <QuantityBtn></QuantityBtn>
                 
            </div>
             )
         )  
        }
        
        </div>
    </div>
  )
}

