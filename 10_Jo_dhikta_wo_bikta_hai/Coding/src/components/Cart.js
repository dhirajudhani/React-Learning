import React from 'react'
import {useSelector} from 'react-redux'
import ItemList from './ItemList'
import {useDispatch} from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () => {
      dispatch(clearCart())
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>
            Cart    
        </h1>
        <div className='w-6/12 m-auto'>
          <button className="p-2 bg-white shadow-xl m-auto font-bold text-lg text-green-600 rounded-lg w-20" onClick={handleClearCart}>
            Clear
          </button>
          {cartItems.length === 0 && <h1>Cart is empty, Add Items into the cart!!</h1>}
          <ItemList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart