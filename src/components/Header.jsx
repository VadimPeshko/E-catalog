import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearch } from "../redux/actions/category";
import { Link } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";

const categoryNames = ['Телефоны', 'Ноутбуки', 'Акссесуары', 'Часы']

const Header = () => {

  const searchRef = useRef();
  const dispatch = useDispatch();
  const category = useSelector(state => state.category.category);
  const totalCount = useSelector(state => state.cart.totalCount);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch(setSearch(searchRef.current.value))
    
    searchRef.current.value = '';
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            E-catalog
          </div>
        <HeaderMenu 
          items={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />     
        <div className="search">
          <form className="search__form" onSubmit={onSubmit}>
            <input ref={searchRef} className="search__input" type="search"/>
            <button type="submit" className="search__btn">Go</button>
          </form>
        </div>
        <Link to="/cart">
          <div className="cart">
            <h3>Корзина</h3>
            <span>{totalCount}</span>
          </div>
        </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;