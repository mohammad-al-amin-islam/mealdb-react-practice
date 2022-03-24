import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './FoodsSelect.css'

const FoodsSelect = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setCart(data.meals));
    }, []);
    return (
        <div className='foods-select'>
            <div className="food-view">
                {
                    cart.map(food => <Food
                        key={food.idMeal}
                        food={food}
                    ></Food>)
                }
            </div>
            <div className="food-cart">
                <h2>Added Foods</h2>
            </div>
        </div>
    );
};

export default FoodsSelect;