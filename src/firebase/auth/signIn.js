import firebaseApp from '../config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (email, password) => {
    const auth = getAuth(firebaseApp);
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
};
