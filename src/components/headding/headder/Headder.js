import React from 'react'
import './Headder.css'

export default function Headder(props)
{
    return <div id={props.id}>
    <img src="/images/chicken_kurti_icon.png" alt="icon" className='icon'></img><div className='title'>Chicken Kurtis Inventory</div>
    </div>
} 
