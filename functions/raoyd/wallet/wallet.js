import axios from 'axios'
import timestamp from '../../utils/timestamp'

const wallet = (newWallet, response) => {
    let data = {
        "first_name": newWallet.first_name,
        "last_name": newWallet.last_name,
        "ewallet_reference_id": `${newWallet.first_name}-${newWallet.last_name}-${timestamp}`,
        "metadata": {
            "merchant_defined": true
        },
        "type": "person",
        "contact": {
            "phone_number": "+14155551234",
            "email": "johndoe@rapyd.net",
            "first_name": "John",
            "last_name": "Doe",
            "mothers_name": "Jane Smith",
            "contact_type": "personal",
            "address": {
                "name": "John Doe",
                "line_1": "123 Main Street",
                "line_2": "",
                "line_3": "",
                "city": "Anytown",
                "state": "NY",
                "country": "US",
                "zip": "12345",
                "phone_number": "+14155551611",
                "metadata": {},
                "canton": "",
                "district": ""
            },
            "identification_type": "DL",
            "identification_number": "1234567890",
            "date_of_birth": "11/22/2000",
            "country": "US",
            "nationality": "US",
            "metadata": {
                "merchant_defined": true
            }
        }
    }
    const config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/user',
        headers: {
            'Content-Type': 'application/json',
            'access_key': '{{rapyd_access_key}}',
            'salt': '{{rapyd_signature_salt}}',
            'timestamp': '{{rapyd_request_timestamp}}',
            'signature': '{{rapyd_signature}}'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}
