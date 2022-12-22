import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-screen-lg mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Authentication System</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Logout</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;