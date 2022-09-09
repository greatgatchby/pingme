import User from "../../../functions/firebase/user.model"
export default function handler(req, res) {
    switch (req.method){
        case('GET'):
            res.status(200).send(User.get())
            break
        case('POST'):
            let newUser = User.signup({
                email: req.body.email,
                password: req.body.password,
            })
            res.status(200).send(newUser)

            break
        case('PUT'):
            let user = User.update({
                displayName: req.body.displayName,
                photoURL: req.body.photoURL
            })
            res.status(200).json(user)
            break
        case('DELETE'):
            res.status(200).json({body: req.body})
            break
    }
}
