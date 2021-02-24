import React from "react";
import { Route } from 'react-router-dom';

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Route path='/' exact component={Home} />
      <Route path='/catalog/:id' component={Product} />
      <Route path='/cart' exact component={Cart} />
    </>
  );
}

export default App;
