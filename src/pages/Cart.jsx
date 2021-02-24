import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { minusItem, plusItem, removeItemInCart, removeItemsInCart } from '../redux/actions/cart';

import CartItems from '../components/CartItems';

const Cart = () => {

  const dispatch = useDispatch();
  const {items, totalCount, totalPrice} = useSelector(({cart}) => cart);
  const products = Object.keys(items).map(key => items[key].items[0]);

  const removeAllCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')){
      dispatch(removeItemsInCart());
    } 
  }

  const removeProduct = (id) => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItemInCart(id))
    }
  }

  const plusProduct = (id) => {
    dispatch(plusItem(id))
  }

  const minusProduct = (id) => {
    dispatch(minusItem(id))
  }

  return (
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

      {
        totalCount ? (<main className="main">
        <div className="container">
          <div className="main__top">
            <h1>Корзина</h1>
            <span onClick={removeAllCart}>Очистить корзину</span>
          </div>
          {products.map((obj, i) => 
            <CartItems 
              key={i}
              id={obj.id}
              name={obj.name}
              image={obj.imageUrl}
              totalPrice={items[obj.id].totalPrice}
              totalCount={items[obj.id].items.length}
              onRemove={removeProduct}
              onPlusProduct={plusProduct}
              onMinusProduct={minusProduct}
            />)}
          <div className="items__bottom">
            <div className="items__bottom-details">
              <span>Всего <b>{totalCount}</b> шт</span>
              <span>Сумма заказа <b>{totalPrice}</b> BYN</span>
            </div>
            <div className="items__bottom-buttons">
            <Link to="/">
              <button type="button">Назад</button>
            </Link>
              <button type="button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </main>) : (<main className="main">
        <div className="container">
          <div className="empty">
            <h1>Корзина пустая</h1>
            <p>Для того, чтобы сделать закать, перейдите на главную страницу!</p>
            <Link to="/">
              <button type="button">Назад</button>
            </Link>
          </div>
        </div>
      </main>)
      }
    </>
  )
}

export default Cart;