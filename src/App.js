import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer, CartPopup } from './components'
import {About, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct, AuthWrapper } from './pages'
function App() {
  return (
  <AuthWrapper>  
    <Router>
       <Navbar />
       <CartPopup />
       <Sidebar />
       <Switch>
          <Route exact path='/'>
             <Home />
          </Route>
          <Route exact path='/about'>
             <About />
          </Route>
          <Route exact path='/cart'>
             <Cart />
          </Route>
          <Route exact path='/products'>
             <Products />
          </Route>
          <Route  path='/products/:id' children={<SingleProduct />}>
          </Route>
          <PrivateRoute exact path='/checkout'>
             <Checkout />
          </PrivateRoute>
          <Route path='*'>
             <Error />
          </Route>
       </Switch>
       <Footer />
    </Router>
    </AuthWrapper>
  )
}

export default App
