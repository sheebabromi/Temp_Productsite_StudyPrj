import React from 'react'
import { useEffect } from 'react';
import { PageHero } from '../components'
import {useCartContext} from '../context/cart_context';

const PaymentCompletePage = () => {
    //const {clearCart} = useCartContext();

    // useEffect(()=>{
    //   setInterval(()=>{
    //     clearCart()
    //   }, 1000)
          
    // }, [])
  return (
    <div>
    <h1>Your Payment is complete</h1>
    
    </div>
  )
}

export default PaymentCompletePage