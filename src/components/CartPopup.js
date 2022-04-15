import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';


const CartPopup = () => {

    const {cart} = useCartContext();
    const [isPopup, setIsPopup] = useState('false');

    useEffect(()=>{
        console.log(cart.length);
        if(cart.length > 0){
            setIsPopup('true');
        }
        if(cart.length === 0){
            setIsPopup('false');
        }
    },[cart, isPopup])

    
      

  return (<Wrapper>
      <div className={`${isPopup=='true' ? 'code-block-49' : 'no-code-block'}`} >
      <div className='cart-popup'>
          <h5>Cart Items</h5>
          {cart.map((item, index)=>{
              return <div key={index} className='cart-popup-item'>
                      <img src={item.image} alt={item.name} />
                      <Link to='/cart' style={{color: 'white'}}>{item.name}</Link>
                      <br/>
                      <br/>
                      </div>
          })}
      </div>
      </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
.code-block-49 {
    z-index: 10;
    display: block;
    margin: 0 !important;
    position: fixed;
    width: 23%;
    
    bottom: 0;
    left: 0;
    background: transparent;
    filter: drop-shadow(7px 0px 20px #d7d7d7);
}  
.no-code-block{
    display: none;
}
.cart-popup{
   
  background: rgb(255, 255, 255);
  width:  40%;
  height: 150px;
  padding: 5px;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  font-size: 10px;
  color: white;
  position: relative;
 
}
.cart-popup img{
    width: 30px;
    height: 30px;
}
.cart-popup-item{
    color:white;
    display: flex;
}
.cart-popup-item p{
    color:white;
    justify-content: center;
    font-size: 15px;
}
`

export default CartPopup