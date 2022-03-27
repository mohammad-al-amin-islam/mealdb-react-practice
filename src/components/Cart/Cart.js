import React from 'react';

const Cart = ({ cart }) => {
    let count = 0;
    for (const meal of cart) {
        count = meal.quantity + count;
    }

    return (
        <div>
            <h2>Added Foods:{count}</h2>
            <ol>
                {
                    cart.map(food => <li>{food.strMeal}</li>)
                }
            </ol>
        </div>

    );
};

export default Cart;