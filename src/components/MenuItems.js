import React, { useState } from 'react';
import './MenuItems.scss';

const MenuItems = ({ pizza }) => {

    const { name, price, toppings, id, tags, short_description, long_description } = pizza;

    const [tag, setTag] = useState([]);
    const [topping, setTopping] = useState([]);

    return (
        <div className="MenuItems">
            <h2>{name}</h2>
            <div>{short_description}</div>
            <ul>
                <li>{long_description}</li>
                <li>id: {id}</li>
            </ul>
            <div>
                Toppings: {toppings}
            </div>
            <div>
                Tags: {tags}
            </div>
            <div>
                Price: ${price}
            </div>
        </div>
    )
}

export default MenuItems;