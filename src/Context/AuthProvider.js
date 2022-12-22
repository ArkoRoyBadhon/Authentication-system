import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        signUpWithEmail,
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;