import firebaseApp from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { checkSignUpError } from '@/utils/auth/checkError';

export const signUp = async (email, password) => {
    const auth = getAuth(firebaseApp);
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        toast.success('Sign up successful', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        const user = userCredential.user;
        console.log(user);
        return user;
    } catch (error) {
        checkSignUpError(error);
        console.log(error);
        return error;
    }
};
