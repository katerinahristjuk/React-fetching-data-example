import React, {useState, useEffect} from 'react';

export function Users(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp=> resp.json())
        .then(json=>setUsers(json))
        .catch(err => alert(err))
    },[])
    
    return(
    <div id='users'>
        <h2>Users</h2>
        {/* <h2>{users.length >0 && users[0].name}</h2> */}
        {users.length>0?
        <table border='1'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>street</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, i)=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
        :<h2>Loading...</h2>}
        

    </div>
    )
}

//pred da baras ribiu bure, proveri prvo dali ima voda: <h2>{users.length >0 && users[0].name}</h2>
//