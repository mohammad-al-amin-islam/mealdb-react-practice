import React, { useEffect, useState } from 'react';
import { addToDb, storedCart } from '../../utilities/fakedb';
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
    useEffect(() => {
        const added = storedCart();
        let newCart = [];
        for (const id in added) {
            const exits = foods.find(food => food.idMeal === id);
            if (exits) {
                const quantity = added[id];
                exits.quantity = quantity;
                newCart.push(exits);
            }
        }
        setCart(newCart);

    }, [foods])
    const foodButtonHandle = (food) => {
        let newCart = [];
        const exists = cart.find(m => m.idMeal === food.idMeal);
        if (exists) {
            const rest = cart.filter(m => m.idMeal !== food.idMeal);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        else {
            food.quantity = 1;
            newCart = [...cart, food];
        }
        // const newCart = [...cart, food];
        setCart(newCart);
        addToDb(food.idMeal);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default FoodsSelect;