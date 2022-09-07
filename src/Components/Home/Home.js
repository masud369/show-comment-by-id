import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [userId, setUserId] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserId(data))
    })
    return (
        
        <div>
            <h2>This is home</h2>
            {
                userId.map(user=><User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Home;