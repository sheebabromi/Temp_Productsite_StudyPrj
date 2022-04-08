import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {filters:{text, company, category, color, min_price, price, max_price, shipping},
         updateFilter, clearFilter, all_products, } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  let colors = getUniqueValues(all_products, 'colors');
  
  
 
  return <Wrapper>
        <div className='content'>
          <form onSubmit={(e)=> e.prevent.Default()}>
            {/*start of Search Input */}
            <div className='form-control'>
            <input type='text' name='text' value={text} onChange={updateFilter} placeholder='Search' className='search-input'></input>
            </div>
            {/*end of Search Input */}
            {/* start of Category input */}
             <div className='form-control'>
             <h5>Categories</h5>
               {categories.map((c, index)=>{
                 return <button key={index} className={`${category === c.toLowerCase()? 'active': null}`}
                        type='button' name="category" onClick={updateFilter}>
                   {c}
                 </button>
               })}
             </div>
            {/* end of Category input */}
            {/*start of companies */}
            <div className='form-control'>
            <h5>Company</h5>
            <select  name="company" value={company} onChange={updateFilter} className='company' >
            {companies.map((c, index)=>{
              return <option key={index} value={c}>{c}</option>
            })}
            </select>
            </div>
            {/*end of companies */}
            {/* start of color*/}
            <div className='form-control'>
              <h5>Colors</h5>
              <div className='colors'>
              {colors.map((c, index)=>{
                if(c === 'all'){
                  return <button key={index} name="color" type="button" className={`${color === 'all'? 'all-btn active':'all-btn' }`}
                  onClick={updateFilter} data-color='all'>All</button>
                }
                return <button key={index} name="color" type="button" style={{background:c}}
                  className={`${color === c? 'color-btn active':'color-btn' }`} data-color={c}
                  onClick={updateFilter}>{color === c? <FaCheck/>: null}</button>
              })}
              </div>
            </div>

            {/* end of color*/}
            {/*start of price */}
            <div className='form-control'>
              <h5>Price</h5>
              <p className='price'>{formatPrice(price)}</p>
              <input type="range" name="price" onChange={updateFilter} min={min_price} max={max_price} value={price}/>
            </div>

            {/*end of price */}
            {/* start of shipping */}
            <div className='form-control shipping'>
              <label htmlFor='shipping'>Free Shipping</label>
              <input type="checkbox" onChange={updateFilter} name="shipping" id="shipping" checked={shipping} />
            </div>
            {/* end of shipping */}
            

          </form>
          <button type="button" onClick={clearFilter} className='clear-btn' >Clear Filter</button>
        </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
