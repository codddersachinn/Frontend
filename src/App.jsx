import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [product, setProduct] = useState([])
  useEffect(()=>{
   const response= 
      axios.get('/api/products')
  .then(function (response) {
    setProduct(response.data);
   console.log(response.data);
   console.log(product);
   
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .finally(function () {
   // console.log('you api is not working');
  });
  
  },[])

  //  product.map((pdct)=>{
  //     console.log(pdct.id);
  //     console.log(pdct.name);
  //     console.log(pdct.price);
  //  })
 
//   product.map((pdct)=>{
//     console.log(pdct.id);
//    <p>The id of the product is:{pdct.id}</p>
//     console.log(pdct.name);
//     <p>The name of the product is {pdct.name} </p>
//     console.log(pdct.price);
//     <p>the price of the product is '{pdct.price}</p>

//     }
  
//  )


  return (
    <>
    <p>The id of the product is:{product[0].id}</p>
    <p>The name of the product is {product[0].name} </p>
    <p>the price of the product is '{product[0].price}</p>
      
      
     
   
 
    
   
    </>
  )
}

export default App
