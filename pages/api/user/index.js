import User from "../../../functions/User/user.model"
export default function handler(req, res) {
    switch (req.method){
        case('GET'):
            res.status(200).send(User.get())
            break
        case('POST'):
            res.status(200).send(
                User.signup({
                    email: req.body.email,
                    password: req.body.password,
                })
            )
            break
        case('PUT'):
            res.status(200).json({body: req.body})
            break
        case('DELETE'):
            res.status(200).json({body: req.body})
            break
    }
}
