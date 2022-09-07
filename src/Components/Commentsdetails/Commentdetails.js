import React from 'react';

const Commentdetails = (props) => {
    const {name, email} = props.commetn;
    return (
        <div>
            <h4>{name}</h4>
            <p>The comment mail: {email}</p>
        </div>
    );
};

export default Commentdetails;