import React, {useState} from 'react'
import item from '../../database/db.json';
import './Main.css';



export default function Main(props)
{
    function get_updated_price(initial_price){
        var commission = (0.20*initial_price);
        var transportation_price = 10;
        var final_price = commission + initial_price + transportation_price;
        return final_price;
    };
    
    function pseudo_updated_price(initial_price){
        var our_price = get_updated_price(initial_price);
        var commission = (0.25*our_price);
        var final_price = commission + initial_price;
        return final_price;
    };

    return <div id={props.id}>
        {
            Object.keys(item).map((key) => (
                    <div className='item'>
                    <img src={item[key].image_src} className='image' />
                    <div className='card_title'>
                        <div className='price'>Price:<strike>{pseudo_updated_price(item[key].price)}</strike>  {get_updated_price(item[key].price)}</div>
                        <div className='description'>{item[key].description}</div>
                    </div>
                    </div>
                
            ))
        }
    </div>
}