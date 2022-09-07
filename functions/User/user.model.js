import {auth, db} from '../config/firebase/config'
import axios from 'axios'
import timestamp from '../utils/timestamp'
import rapyd_signature from'../rapyd/rapyd_signature'
import CryptoJS from 'crypto-js'
const User = function (user) {
    this.email = user.email;
    this.password = user.password;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
};

User.signup = (newUser, result) => {
    auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((userCredential) => {
            console.log(userCredential.user)
            result(userCredential.user)
        })
        .catch((error) => {
            console.log(error)
            result(error, null)
        });
    return result;
}

User.signIn = (data, result) => {
    auth.signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

User.get = (id, result) => {
    const user = auth.currentUser;
    if (user !== null) {
        result(null, {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
        })
    } else {
        result({error: 400, message: 'user not found'}, null)
    }
}

export default User
