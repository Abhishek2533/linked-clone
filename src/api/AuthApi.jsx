import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig';


const LoginApi = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        return err;
    }
};

const RegisterApi = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        return err;
    }
};

const GoogelSignInApi = (email, password) => {
    try {
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider);
        return res;
    } catch (err) {
        return err;
    }
};

const onLogout = () => {
    try {
      signOut(auth);
    } catch (err) {
      return err;
    }
  };

export { LoginApi, RegisterApi, GoogelSignInApi, onLogout };