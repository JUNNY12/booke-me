import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import firebaseApp from '@/firebase/config';

const auth = getAuth(firebaseApp);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }

            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    );
};
