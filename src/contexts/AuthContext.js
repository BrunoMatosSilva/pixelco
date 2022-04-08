import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const AuthContext = createContext({
    currentUser: null,
    register: () => Promise,
    login: () => Promise,
})

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return () => {
            unSubscribed()
        }
    }, []);

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const value = {
        currentUser,
        register,
        login
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}