import React, { useEffect, useState } from 'react';


export function Posts () {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        return(
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp=>resp.json())
            .then(json=>setPosts(json))
            .catch(err=>alert(err))
        )
    },[])

    return(
        <div id='posts'>
            <h2>Posts</h2>
            {posts.length>0?
            <table border='1'>
                <thead>
                    <tr>
                        <td>Author</td>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post=>{
                        return(
                            <tr key={post.id}>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
                :<h2>Loading...</h2>
            }
        </div>
    )
}