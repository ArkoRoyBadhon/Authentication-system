import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }

    // console.log("user details", user);
    console.log("user phone", user?.userInfo);

    return (
        <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Authentication System</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/'>Home</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to='/userinfo'>User Info</Link></li>
                                <li><Link onClick={handleLogOut}>Logout</Link></li>
                            </>
                            :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/register'>Register</Link></li>
                            </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;