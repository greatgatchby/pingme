import User from "../../../functions/User/user.model"
export default function handler(req, res) {
    switch (req.method){
        case('GET'):
            res.status(200).json({ name: 'John Doe' })
            break
        case('POST'):
            if(req.body.email && req.body.first_name && req.body.last_name)
            User.create({
                email: req.body.email,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                type: req.body.type,
                phone_number: req.body.phone_number,
                mothers_name: req.body.mothers_name,
                line_1: req.body.line_1,
                line_2: req.body.line_2,
                line_3: req.body.line_3,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                zip: req.body.zip,
                canton: req.body.canton,
                district: req.body.district,
                identification_type: req.body.identification_type,
                identification_number: req.body.identification_number,
                date_of_birth: req.body.date_of_birth,
                nationality: req.body.nationality,
            })
            res.status(200).json({body: req.body})
            break
        case('PUT'):
            res.status(200).json({body: req.body})
            break
        case('DELETE'):
            res.status(200).json({body: req.body})
            break
    }
}
