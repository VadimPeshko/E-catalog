import React from 'react';
import Card from './Card';
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../redux/actions/cart";

const Main = () => {

  const dispatch = useDispatch();
  const { products, isLoaded } = useSelector(({ products }) => products);
  
  const addProduct = (obj) => {
    dispatch(addItemsToCart(obj))
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          {products.length !== 0 ? 
            (isLoaded ? products.map(items => (
              <Card key={`${items.id}_${items.name}`}
                        {...items}
                    addObjToCart={addProduct}
              />
            )) : <Loader />) : <h1>Тавар не найден</h1> }
        </div>
      </div>
    </main>
  )
}

export default Main;