import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
   if(action.type === LOAD_PRODUCTS){
     let max_price = action.payload.map((p)=>
     p.price)
     max_price = Math.max(...max_price)
     
     return {...state, all_products: [...action.payload], filtered_products: [...action.payload],
             filters: {...state.filters, max_price: max_price, price: max_price}}
   }
   if(action.type === SET_GRIDVIEW){
     return {...state, grid_view: true}
   }
   if(action.type === SET_LISTVIEW){
    return {...state, grid_view: false}
  }
   if(action.type === UPDATE_SORT){
     return {...state, sort: action.payload}
   }
   if(action.type === SORT_PRODUCTS){
     const {filtered_products, sort} = state;
     let tempProducts = [...filtered_products];
     if(sort === 'price-lowest'){
       tempProducts = tempProducts.sort((a,b)=> a.price - b.price)
     }
     if(sort === 'price-highest'){
      tempProducts = tempProducts.sort((a,b)=> b.price - a.price)
    }
    if(sort === 'name-a'){
      tempProducts = tempProducts.sort((a,b)=> {
        return a.name.localeCompare(b.name)
      })
    }
    if(sort === 'name-z'){
      tempProducts = tempProducts.sort((a,b)=> {
        return b.name.localeCompare(a.name)
      })
    }
     return {...state, filtered_products: tempProducts}
   }
   if(action.type === UPDATE_FILTERS){
     const {name, value} = action.payload;
     return {...state, filters: {...state.filters, [name]: value}}
   }
   if(action.type === FILTER_PRODUCTS){
     const {all_products} = state;
     const {text, company, category, color, price, shipping} = state.filters;
     let temp_products = [...all_products];
     //filtering
     //text
     if(text){
     temp_products = temp_products.filter((product)=>{
       return product.name.toLowerCase().startsWith(text)
     })}
     //category
     if(category !== 'all'){
       temp_products = temp_products.filter((product)=>
          product.category === category
       )
     }
     //company
     if(company !== 'all'){
       temp_products = temp_products.filter((product)=>
       product.company === company)
     }
     //color
     if(color !== 'all'){
       temp_products = temp_products.filter((product)=>{
         return product.colors.find((c)=> c === color)
       })
     }
     //price
     if(price){
       temp_products = temp_products.filter((product)=>
       product.price <= price)
     }
     //shipping
     if(shipping){
       temp_products = temp_products.filter((product)=> 
       product.shipping === true)
     }
     return {...state, filtered_products: temp_products}
   }
   if(action.type === CLEAR_FILTERS){
     const {max_price} = state.filters;
     return {...state, filters:{...state.filters, text: '',
     company: 'all',
     category: 'all',
     color: 'all',
     price: max_price,
     shipping: false,}}
   }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
