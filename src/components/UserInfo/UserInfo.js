import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserInfo = () => {
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState([])


    useEffect(()=>{
        fetch(`http://localhost:5000/userinfo/${user?.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    },[user])

    return (
        <div className='max-w-screen-lg mx-auto my-10'>
            <h2 className='text-center text-2xl font-bold my-5'>User Info</h2>
            {
                userData.map(info => <>
                <p>Name: {info.name}</p>
                <p>Name: {info.email}</p>
                <p>Name: {info.phone}</p>
                <p>Name: {info.address}</p>
                </>)
            }
        </div>
    );
};

export default UserInfo;