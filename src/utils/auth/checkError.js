import { toast } from 'react-toastify';

export const checkSignUpError = (error) => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            toast.error('Email already in use', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/invalid-email':
            toast.error('Invalid email', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/weak-password':
            toast.error('Weak password', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        default:
            toast.error('Something went wrong', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
    }
};

export const checkGoogleAuthError = (error) => {
    switch (error.code) {
        case 'auth/account-exists-with-different-credential':
            toast.error('Account already exists with different credential', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/invalid-credential':
            toast.error('Invalid credential', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/operation-not-allowed':
            toast.error('Operation not allowed', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/user-disabled':
            toast.error('User disabled', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/user-not-found':
            toast.error('User not found', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        case 'auth/wrong-password':
            toast.error('Wrong password', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            break;
        default:
            toast.error('Something went wrong', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
    }
};
