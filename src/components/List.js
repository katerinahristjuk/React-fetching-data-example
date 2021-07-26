import React, {useState, useEffect} from 'react';

export function List(props){

   
    return(
    <div id='list'>
        {props.listofusers.length>0?
        <ul>
        {
            props.listofusers.map(user => {
                return (
                    <li key={user.id}>
                        <span>ID: {user.id} </span> &nbsp;
                        <span>Name: {user.name}</span> &nbsp;
                        <span>Username: {user.username}</span>
                    </li>
                )
            })
        }
        </ul>
        : <h2>Loading...</h2>
        }
    </div>
    )
}
