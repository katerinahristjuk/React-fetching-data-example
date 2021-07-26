import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import {Posts} from './Posts';
import {Link} from 'react-router-dom';

export function Albums(props){

    const [albums, setAlbums] = useState ([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(json => setAlbums(json))
        .catch(err => alert(err))
    },[])

    return(
        <div id='albums'>
            <h2>Albums</h2>
            
            <button><Link to="/albums/posts" >Posts</Link></button>
            <Switch>
                <Route path='/albums/posts' component={Posts}/>
            </Switch>

            {albums.length>0?
            <ul>
                {albums.map(alb=>{
                    return(
                        <li key={alb.id}>
                            <span>Author: {alb.userId}   </span>
                            <span>ID: {alb.id}   </span>
                            <span>Title: {alb.title}   </span>
                        </li>
                    )
                })}
            </ul>
            :<h2>Loading...</h2>

            }
        </div>
    )
}