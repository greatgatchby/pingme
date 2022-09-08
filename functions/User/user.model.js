import {auth} from '../config/firebase/config'
const User = function (user) {
    this.email = user.email;
    this.password = user.password;
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

User.get = (result) => {
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
