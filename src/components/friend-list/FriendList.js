import React, { useEffect, useState } from 'react';
import data  from '../../fakeData';
import FriendCount from '../FriendCount/FriendCount';
import Profile from '../Profile/Profile';
import './FriendList.css';


const FriendList = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        setProfile(data);
    })
    return (
        <div className='friendContainer'>
            <div className="profile">
                {
                    profile.map(info => <Profile info={info}></Profile>)
                }
            </div>
            <div className="friend-count">
                <FriendCount></FriendCount>
            </div>
        </div>
    );
};

export default FriendList;