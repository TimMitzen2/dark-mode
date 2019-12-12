import React, { useEffect, useState } from 'react';

import axios from 'axios';


const Coins = ()=>{
   const [coins, setCoins]  = useState([])
   useEffect(()=>{
      fetchCoins();
   },[coins])
   const fetchCoins =()=>{
      axios
      .get('https://api.coingecko.com/api/v3/coins/list')
      .then(response=>{
         setCoins(response.data)
         
      })
      .catch(error=>{
         console.log('error:',error)
      })
   }
   return(
      <div>
         <h1>Coins</h1>
      {coins.map((coin,index)=>(
         <div key ={index}>
         <p>{coin.symbol}</p>
         </div>
      ))}</div>
     
   );
}
export default Coins;