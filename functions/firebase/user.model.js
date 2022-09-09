import 'firebase/auth'
import {signUp} from "./firebaseAuth";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "./config";
import timestamp from "../utils/timestamp";
const User = function (user) {
    this.email = user.email;
    this.password = user.password;
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
};

User.signup = (newUser, result) => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
        .then((userCredential) => {
            // Signed in
            result(null, userCredential.user)
            console.log(result)
            return result
        })
        .catch((error) => {
            result = error
            console.log(result)
            return result
        });
}

User.signIn = (data, result) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in
            result = userCredential.user
            console.log(result.uid + ' signed in @ ' + timestamp())
            return result
        })
        .catch((error) => {
            result = error
            console.log(result)
            return result
        });
}

User.get = (result) => {
    const user = auth.currentUser;
    if (user !== null) {
        result = {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
        }
        console.log(result)
        return result
    } else {
        result = {error: 400, message: 'user not found'}
        console.log(result)
        return result
    }
}

User.update = (data, result) => {
    updateProfile(auth.currentUser, {
        displayName: data.displayName, photoURL: data.photoURL
    }).then(() => {
        result = auth.currentUser
        console.log(auth.currentUser)
        return result;
    }).catch((error) => {
        result = error
        return result;
    })
}
export default User
