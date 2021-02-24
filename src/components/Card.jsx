import React from 'react';
import { Link } from "react-router-dom";

const Card = ({id, imageUrl, name, price, addObjToCart}) => {

  const setObject = () => {
    const newObj = {
      id,
      imageUrl,
      name,
      price
    }
    addObjToCart(newObj)
  }

  return (
    <div className="card">
      <div className="card__img">
        <img src={imageUrl} alt={name}/>
      </div>
      <div className="card__info">
        <div className="card__description">
          <h3>{name}</h3>
          <p>{price} BYN</p>
        </div>
        <div className="card__btn">
          <Link to={`/catalog/${id}`}>
            <button 
              type="button" 
              className="card__btn-info"
            >
              Описание
            </button>
          </Link>
          <button 
            type="button" 
            className="card__btn-cart"
            onClick={() => setObject()}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;