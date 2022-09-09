import User from "../../../functions/firebase/user.model"
export default function handler(req, res) {
    switch (req.method){
        case('GET'):
            let user = User.signIn({
                email: req.body.email,
                password: req.body.password,
            })
            res.status(200).send(user)
            break
    }
}
