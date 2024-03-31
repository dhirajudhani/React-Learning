import React from 'react'
import ItemList from './ItemList';

const RestaurantCategory = (props) => {
    const {data} = props;
    // console.log(data)
  return (
    <>
    <div className='w-6/12 p-4 my-6 shadow-lg mx-auto bg-gray-50 '>
        <div className='flex justify-between'>
            <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
            <span className='text-xl font-bold align-middle'>⌄</span>
        </div>
        <div><ItemList items={data?.itemCards}/></div>
    </div>
    </>
  )
}

export default RestaurantCategory