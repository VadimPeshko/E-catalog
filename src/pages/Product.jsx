import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/product";
import { addItemsToCart } from "../redux/actions/cart";

const Product = ({match}) => {
  
  const dispatch = useDispatch();
  const { product } = useSelector(({ product }) => product);
  const { totalCount } = useSelector(({ cart }) => cart);

  const { id, name, price,  imageUrl, imageLarge, display, camera, memory } = product;
  
  useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, [match.params.id]);

  const setProduct = () => {
    const newObject = {
      id,
      imageUrl,
      name,
      price
    }

    dispatch(addItemsToCart(newObject));
  }
  
  return (
    product ? (
      <>
        <header className="header">
          <div className="container">
            <div className="header__content">
              <Link to='/'>
                <div className="header__logo">
                  E-catalog
                </div>
              </Link>
              <Link to="/cart">
                <div className="cart">
                  <h3>Корзина</h3>
                  <span>{totalCount}</span>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main className="main">
          <div className="container">
              <h1>{name}</h1>
              <div className="product">
                <div className="product__left">
                  <img src={imageLarge} alt={name} />
                </div>
                <div className="product__right">
                  <h3>Основные характеристики</h3>
                  <ul>
                    <li>Диагональ дисплея {display}</li>
                    <li>Объем встроенной памяти {memory} ГБ</li>
                    <li>Основная камера {camera} Мп</li>
                  </ul>
                  <p>{price} BYN</p>
                  <button 
                    type="button"  
                    className="product__right-btn"
                    onClick={() => setProduct()}
                  >
                    В корзину
                  </button>
                </div>
              </div>
              <div className="characteristic">
                <h2>Характеристики</h2>
              </div>
          </div>
        </main>
      </>
    ) : (<h1>Такой страницы нет!</h1>)
  )
}

export default Product;