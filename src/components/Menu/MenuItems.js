import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuItems.scss';

const MenuItems = ({ pizza }) => {

    const { name, price, toppings, id, tags, short_description, long_description } = pizza;

    const [tag, setTag] = useState([]);
    const [topping, setTopping] = useState([]);

    return (
        <div className="MenuItems">
            <h2>{name}</h2>
            <div>{short_description}</div>
            <div>
                Toppings: {toppings}
            </div>
            <Link to={`/menu/${id}`} >
                See Details
            </Link>
        </div>
    )
}

export default MenuItems;