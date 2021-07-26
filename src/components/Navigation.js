import React from 'react';
import {Link} from 'react-router-dom';

export function Navigation(){
    return(
        <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about/contact" >Contact</Link></li> 
            <li><Link to="/users" >Users</Link></li>
            <li><Link to="/list" >List</Link></li>
            <li><Link to="/albums" >Albums</Link></li>
        </ul>
    )
}