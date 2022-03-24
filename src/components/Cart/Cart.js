import React from 'react';

const Cart = ({ cart }) => {

    return (
        <ol>
            {
                cart.map(food => <li>{food.strMeal}</li>)
            }
        </ol>
    );
};

export default Cart;