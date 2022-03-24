import React from 'react';
import './Food.css'

const Food = (props) => {
    const { strMealThumb, strMeal, strYoutube } = props.food
    return (
        <div className='food-area'>
            <div className='food'>
                <img src={strMealThumb} alt="" />
                <div className="food-details">
                    <h3>Name:{strMeal}</h3>
                    <a href={strYoutube}>Youtube Link</a>
                </div>
                <button onClick={() => props.foodButtonHandle(props.food)} className='btn-cart'>Add To Cart</button>

            </div>
        </div>
    );
};

export default Food;