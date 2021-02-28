import React, { useState } from 'react';
import './Profile.css';

const Profile = (props) => {
    const {first_name, email, gender, img} = props.info;
    const [request, setRequest] = useState([]);
    const handleRequest = () => {
        ;
    }
    return (
        <div className='container'>
            <div className="subContainer">
            <div className="img">
                <img src={img} alt="profile"/>
            </div>
            <div className="info">
                <h5>Name: {first_name} </h5>
                <h5>Email: {email} </h5>
                <h5>Gender: {gender} </h5>
                <button onClick={handleRequest}>add me</button>
            </div>
            </div>
            
        </div>
    );
};

export default Profile;













