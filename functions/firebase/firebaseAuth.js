import {auth} from "./config";
import {createUserWithEmailAndPassword} from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
// ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export const signIn = (email, password) => {

}
