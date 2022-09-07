import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const {id,title} = props.user;
    const navigation = useNavigate();
    const cliskHandeler = (id)=>{
        navigation(`/home/user/${id}`);
    }
    return (
        <div style={{border:'1px solid red',backgroundColor:'gray',padding:'10px',margin:'10px',color:'white'}}>
            <h2>The title of user: {title}</h2>
            <p>The id of user: {id}</p>
            <button onClick={()=>cliskHandeler(id)}>Details</button>
        </div>
    );
};

export default User;