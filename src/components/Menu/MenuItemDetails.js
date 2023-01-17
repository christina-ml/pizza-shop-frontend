import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './MenuItemDetails.scss';

const API = process.env.REACT_APP_API_URL;

const MenuItemDetails = () => {

  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      fetch(`${API}/pizzas/${id}`)
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          setPizza(data);
        });   
    } catch (err){
      console.log(err)
    }
  }, [API, id])

  const { name, price, toppings, tags, short_description, long_description } = pizza;

  return (
    <div className="MenuItemDetails">
      <h2>{name}</h2>
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

export default MenuItemDetails;