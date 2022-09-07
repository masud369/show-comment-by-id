import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Commentdetails from '../Commentsdetails/Commentdetails';

const Userdetails = () => {
    const {userId} = useParams();
    const [userPost, setUserPost] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserPost(data))
    },[])
    
    const [userComments, setUserComments] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserComments(data))
    },[])
    return (
        <div>
            <p style={{width:'80%',margin:'auto',padding:'15px',display:'block'}}>This is userdetails : {userPost.body}</p>
            <p>The user commets length is : {userComments.length}</p>
            {
                userComments.map(comment=><Commentdetails commetn={comment} key={comment.id}></Commentdetails>)
            }
        </div>
    );
};

export default Userdetails;