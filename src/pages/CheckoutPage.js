import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import PaymentCompletePage from './PaymentCompletePage'

const CheckoutPage = () => {
      const {cart} = useCartContext();

  return <main>
        <PageHero title="checkout" />
        <Wrapper className='page'>
         {cart.length < 1 ? (<div className='empty'><h1>Your Cart is empty</h1> <Link to='/products' className='btn'>Fill it</Link></div>)
         : (<StripeCheckout />) }
         
        </Wrapper>
  </main>
}
//(<PaymentCompletePage/>)
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
.empty{
  text-align: center;
}
`
export default CheckoutPage
