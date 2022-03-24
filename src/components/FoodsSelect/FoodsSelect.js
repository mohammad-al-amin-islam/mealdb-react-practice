import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './FoodsSelect.css'

const FoodsSelect = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, []);
    const foodButtonHandle = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
    }
    return (
        <div className='foods-select'>
            <div className="food-view">
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        foodButtonHandle={foodButtonHandle}
                    ></Food>)
                }
            </div>
            <div className="food-cart">
                <h2>Added Foods</h2>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default FoodsSelect;