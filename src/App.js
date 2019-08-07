import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collection from './pages/Collection';
import Product from './pages/Product';
import ShoppingCart from './components/ShoppingCart';
import CartIcon from './components/CartIcon';
import WishList from './pages/WishList';

function App() {
  return (
    <div className='font-body bg-gray-100 antialiased relative'>
      <Router>
        <CartIcon />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/collection' component={Collection} />
          <Route exact path='/collection/:slug' component={Product} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cart' component={ShoppingCart} />
          <Route exact path='/wishlist' component={WishList} />
          <Route exact path='/error' component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
