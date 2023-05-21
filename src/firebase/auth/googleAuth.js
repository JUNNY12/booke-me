import firebaseApp from '../config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const googleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);
    try {
        const userCredential = await signInWithPopup(auth, provider);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
};
