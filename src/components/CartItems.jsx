import React from 'react';

const CartItems = ({id, name, image, totalPrice, totalCount, onRemove, onPlusProduct, onMinusProduct}) => {
  

  const handelRemove = () => {
    onRemove(id)
  }

  const handelPlusItem = () => {
    onPlusProduct(id)
  }

  const handelMinusItem = () => {
    onMinusProduct(id)
  }

  return (
    <div className="items">
      <div className="items__img">
        <img src={image} alt={name}/>
      </div>
      <div className="items__title">
        <h3>{name}</h3>
      </div>
      <div className="items__count">
        <button onClick={handelMinusItem} type="button" className="items__count-minus">-</button>
        <span>{totalCount}</span>
        <button onClick={handelPlusItem} type="button" className="items__count-plus">+</button>
      </div>
      <span onClick={handelRemove}>удалить</span>
      <p>{totalPrice} BYN</p>
    </div>
  )
}

export default CartItems;