import Wallet from "../../../functions/rapyd/wallet/wallet";
export default function handler(req, res) {
    let data
    let response
    switch (req.method){
        case('GET'):
            res.status(200).json({ name: 'John Doe' })
            break
        case('POST'):

            if(req.body.type === "company") {
                data = {
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
                    business_line_1: req.body.business_line_1,
                    business_line_2: req.body.business_line_2,
                    business_line_3: req.body.business_line_3,
                    business_city: req.body.business_city,
                    business_state: req.body.business_state,
                    business_country: req.body.business_country,
                    business_zip: req.body.business_zip,
                    business_phone_number: req.body.business_phone_number,
                    business_name: req.body.business_name,
                    registration_number: req.body.registration_number,
                    industry_category: req.body.industry_category,
                    industry_sub_category: req.body.industry_sub_category
                }
                response = Wallet.createBusiness(data)
            } else {
                data = {
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
                }
                response = Wallet.createPersonal(data)
            }
            res.status(200).json({body: response})
            break
        case('PUT'):
            let updatedUser = {
                email: req.body.email,
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                phone_number: req.body.phone_number,
            }
            response =  Wallet.update(updatedUser)
            res.status(200).json({body: response})
            break
        case('DELETE'):
            response = Wallet.delete(req.body.id)
            res.status(200).json({body: {
                message: response
                }})
            break
    }
}
