import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>

      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p className='text-gray-500'>Subtotal</p>
            <p className='text-gray-500'>{currency}{getCartAmount()}.00</p>
        </div>
        <hr className='text-gray-500' />
        <div className='flex justify-between'>
            <p className='text-gray-500'>Shipping fee</p>
            <p className='text-gray-500'>{currency}{delivery_fee}.00</p>
        </div>
        <hr className='text-gray-500' />
        <div className='flex justify-between'>
            <b className='text-gray-500'>Total</b>
            <p className='text-gray-500'>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
