import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const UserInfo = () => {
    const { user, passwordReseting, AllnewUpdatePass } = useContext(AuthContext);
    const [userData, setUserData] = useState([])




    const handleResetPassword = (event) => {
        event.preventDefault();
        const pass = event.target.password.value;
        AllnewUpdatePass(pass)
        .then(()=> {
            alert('password changed')
        })
        .catch(error => alert('something wrong'))
    }

    useEffect(() => {
        fetch(`http://localhost:5000/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user])

    return (
        <div className='max-w-screen-lg mx-auto my-10'>
            <h2 className='text-center text-2xl font-bold my-5'>User Info</h2>
            {
                userData.map(info => <div key={info._id}>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <p>Address: {info.address}</p>
                </div>)
            }

            <form onSubmit={handleResetPassword} className="mt-10 shadow-lg w-3/5 mx-auto p-10 rounded-lg">
                <h2 className="text-2xl">Password Update Form</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">New Password</span>
                    </label>
                    <input type="password" name='password' placeholder="enter a new password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">change</button>
                </div>
            </form>
        </div>
    );
};

export default UserInfo;