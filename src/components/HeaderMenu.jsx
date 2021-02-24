import React from 'react';
import classNames from 'classnames'

const HeaderMenu = React.memo(function HeaderMenu({items, activeCategory, onClickCategory}) {

  return (
    <nav className="menu">
      <ul className="menu__wrapper">
        <li 
          className={classNames({
            'active': activeCategory === null,
            'menu__link': true
          })}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items.map((item, index) => (
          <li 
            className={classNames({
              'active': activeCategory === index,
              'menu__link': true
            })}
            onClick={() => onClickCategory(index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
});

export default HeaderMenu;