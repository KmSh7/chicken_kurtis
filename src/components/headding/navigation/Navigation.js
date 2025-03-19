import React from 'react'
import './Navigation.css'

export default function Navigation(props)
{
    return <div id={props.id} className='navigation'>
    <div className='options'></div>
    <div className='logo'>Lucknow Chicken Kurtis</div>
    <div className='search'></div>
    </div>
}