import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contact } from './Contact';
import { Navigation } from './Navigation';
import { Users } from './Users'
import { List } from './List'
import { Albums } from './Albums'


export function App() {

  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=> resp.json())
    .then(json=>setList(json))
    .catch(err => alert(err))
},[])

  return (
    <div id="app">
      
      <Navigation />

      <Switch>
        <Route exact path="/about/contact" component={Contact} />
        <Route path="/users" component={Users}/>
        <Route path="/list" render = {()=>{
          return <List listofusers={list}/>
        }}/>
        <Route path="/albums" component={Albums}/>
      </Switch>

    </div>
  )
}