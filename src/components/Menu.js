import React from 'react';
import './Menu.scss';

import MenuItems from './MenuItems';

const Menu = ({ pizzaData }) => {
  return (
    <div className="Menu">
        <h1>Our Menu</h1>
        {pizzaData.map((pizza) => {
            return (
                <MenuItems pizza={pizza} />
            )
        })}
        
    </div>
  )
}

export default Menu;