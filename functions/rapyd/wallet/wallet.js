import axios from 'axios'
import timestamp from '../../utils/timestamp'
import CryptoJS from "crypto-js";
import rapyd_signature from "../rapyd_signature";
const Wallet = function (user) {
    this.email = user.email;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.type = user.type;
    this.phone_number = user.phone_number;
    this.mothers_name = user.mothers_name;
    this.line_1 = user.line_1;
    this.line_2 = user.line_2;
    this.line_3 = user.line_3;
    this.city = user.city;
    this.state = user.state;
    this.country = user.country;
    this.zip = user.zip;
    this.canton = user.canton;
    this.district = user.district;
    this.identification_type = user.identification_type;
    this.identification_number = user.identification_number;
    this.date_of_birth = user.date_of_birth;
    this.country = user.country;
    this.nationality = user.nationality;
};

const create = (newWallet, response) => {
    const salt = CryptoJS.lib.WordArray.random(12)
    // create user wallet
    const wallet = JSON.stringify({
        "first_name": newWallet.first_name,
        "last_name": newWallet.last_name,
        "email": newWallet.email,
        "ewallet_reference_id": `${newWallet.first_name}-${newWallet.last_name}-${timestamp}`,
        "metadata": {
            "merchant_defined": true
        },
        "phone_number": newWallet.phone_number,
        "type": "person",
        "contact": {
            "phone_number": newWallet.phone_number,
            "email": newWallet.email,
            "first_name": newWallet.first_name,
            "last_name": newWallet.last_name,
            "mothers_name": newWallet.mothers_name,
            "contact_type": "personal",
            "address": {
                "name": `${newWallet.first_name} ${newWallet.last_name}`,
                "line_1": newWallet.line_1,
                "line_2": newWallet.line_2,
                "line_3": newWallet.line_3,
                "city": newWallet.city,
                "state": newWallet.state,
                "country": newWallet.country,
                "zip": newWallet.zip,
                "phone_number": newWallet.phone_number,
                "metadata": {},
                "canton": newWallet.canton,
                "district": newWallet.district
            },
            "identification_type": newWallet.identification_type,
            "identification_number": newWallet.identification_number,
            "date_of_birth": newWallet.date_of_birth,
            "country": newWallet.country,
            "nationality": newWallet.nationality,
            "metadata": {
                "merchant_defined": true
            }
        }
    });

    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/user',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY,
            'salt': salt,
            'timestamp': timestamp,
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY, process.env.RAPYD_SECRET_KEY, wallet)
        },
        data: wallet
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            response(null, response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
