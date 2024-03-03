import React from 'react'
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  useEffect(()=>{
    fetchMenu(); 
  },[])

  

  const fetchMenu = async () => {
     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0343135&lng=72.52661049999999&restaurantId=149244&catalog_qa=undefined&submitAction=ENTER");

     const json =  await data.json();

     console.log(json);

     setResInfo(json.data);

  }

  if(resInfo == null){
    return <Shimmer/>
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};

  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}

  console.log(itemCards)
  
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => {
            return <li key={item.}>{item.card.info.name}</li>
          })}
            
        </ul>
    </div>
  )
}

export default RestaurantMenu;