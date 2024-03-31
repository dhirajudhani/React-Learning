import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
    const [shoeItems, setShowItems] = useState(false);
    const {data} = props;
    // console.log(data)
    const handleClick = () => {
      setShowItems(!shoeItems)
      console.log("clicked")
    }
  return (
    <>
    <div className='w-6/12 p-4 my-6 shadow-lg mx-auto bg-gray-50 '>
        <div className='flex justify-between'>
            <span className='font-bold text-lg cursor-pointer' onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
            <span className='text-xl font-bold align-middle'>⌄</span>
        </div>
        <div>
         { shoeItems && <ItemList items={data?.itemCards}/>}
        </div>
    </div>
    </>
  )
}

export default RestaurantCategory