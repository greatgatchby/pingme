import axios from 'axios'
import timestamp from '../../utils/timestamp'
import CryptoJS from "crypto-js";
import rapyd_signature from "../rapyd_signature";
const Wallet = function (wallet) {
    this.wallet_id = wallet.wallet_id;
    this.email = wallet.email;
    this.first_name = wallet.first_name;
    this.last_name = wallet.last_name;
    this.type = wallet.type;
    this.phone_number = wallet.phone_number;
    this.mothers_name = wallet.mothers_name;
    this.line_1 = wallet.line_1;
    this.line_2 = wallet.line_2;
    this.line_3 = wallet.line_3;
    this.city = wallet.city;
    this.state = wallet.state;
    this.country = wallet.country;
    this.zip = wallet.zip;
    this.canton = wallet.canton;
    this.district = wallet.district;
    this.identification_type = wallet.identification_type;
    this.identification_number = wallet.identification_number;
    this.date_of_birth = wallet.date_of_birth;
    this.country = wallet.country;
    this.nationality = wallet.nationality;
    this.business_line_1 = wallet.business_line_1
    this.business_line_2 = wallet.business_line_2
    this.business_line_3 = wallet.business_line_3
    this.business_city = wallet.business_city
    this.business_state = wallet.business_state
    this.business_country = wallet.business_country
    this.business_zip = wallet.business_zip
    this.business_phone_number = wallet.business_phone_number
    this.business_name = wallet.business_name
    this.registration_number = wallet.registration_number
    this.industry_category = wallet.industry_category
    this.industry_sub_category = wallet.industry_sub_category
};
const salt = CryptoJS.lib.WordArray.random(12)

Wallet.createPersonal = (newWallet, response) => {
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
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: wallet
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}

Wallet.createBusiness = (newWallet, response) => {
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
        "type": "company",
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
            },
            "business_details": {
                "entity_type": newWallet.company,
                "name": newWallet.business_name,
                "registration_number": newWallet.registration_number,
                "industry_category": newWallet.industry_category,
                "industry_sub_category": newWallet.industry_sub_category,
                "address": {
                    "name": newWallet.name,
                    "line_1": newWallet.business_line_1,
                    "line_2": newWallet.business_line_2,
                    "line_3": newWallet.business_line_3,
                    "city": newWallet.business_city,
                    "state": newWallet.business_state,
                    "country": newWallet.business_country,
                    "zip": newWallet.business_zip,
                    "phone_number": newWallet.business_phone_number,
                    "metadata": {
                        "merchant_defined": true
                    }
                }
            }
        }
    });

    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/user',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: wallet
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.update = (data, response) => {
    const updatedWallet = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone_number: data.phone_number,//E.164 format
    }
    let config = {
        method: 'put',
        url: 'https://sandboxapi.rapyd.net/user',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.disable = (id, response) => {
    // create user wallet
    const wallet = JSON.stringify({
        "ewallet": id
    });

    const config = {
        method: 'put',
        url: 'https://sandboxapi.rapyd.net/user/disable',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: wallet
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.enable = (id, response) => {
    // create user wallet
    const wallet = JSON.stringify({
        "ewallet": id
    });

    const config = {
        method: 'put',
        url: 'https://sandboxapi.rapyd.net/user/disable',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: wallet
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.get = (id, response) => {
    // create user wallet

    const config = {
        method: 'get',
        url: 'https://sandboxapi.rapyd.net/user/' + id,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };

    axios(config)
        .then(function (response) {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch(function (error) {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.delete = (id, response) => {
    // create user wallet

    const config = {
        method: 'delete',
        url: 'https://sandboxapi.rapyd.net/user/' + id,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };

    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}

Wallet.createContact = (contact, response) => {
    let data = JSON.stringify({
        "phone_number": contact.phone_number,
        "email": contact.email,
        "first_name": contact.first_name,
        "last_name": contact.last_name,
        "mothers_name": contact.mothers_name,
        "contact_type": "personal",
        "address": {
            "name": `${contact.first_name} ${contact.last_name}`,
            "line_1": contact.line_1,
            "line_2": contact.line_2,
            "line_3": contact.line_3,
            "city": contact.city,
            "state": contact.state,
            "country": contact.country,
            "zip": contact.zip,
            "phone_number": contact.phone_number,
            "metadata": {},
            "canton": contact.canton,
            "district": contact.district
        },
        "identification_type": contact.identification_type,
        "identification_number": contact.identification_number,
        "date_of_birth": contact.date_of_birth,
        "country": contact.country,
        "nationality": contact.nationality,
        "metadata": {
            "merchant_defined": true
        }
    });
    const config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/ewallets/${contact.wallet_id}/contacts`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/ewallets/${contact.wallet_id}/contacts`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.updateContact = (contact, response) => {
    let data = JSON.stringify({
        "phone_number": contact.phone_number,
        "email": contact.email,
        "first_name": contact.first_name,
        "last_name": contact.last_name,
        "mothers_name": contact.mothers_name,
        "contact_type": "personal",
        "address": {
            "name": `${contact.first_name} ${contact.last_name}`,
            "line_1": contact.line_1,
            "line_2": contact.line_2,
            "line_3": contact.line_3,
            "city": contact.city,
            "state": contact.state,
            "country": contact.country,
            "zip": contact.zip,
            "phone_number": contact.phone_number,
            "metadata": {},
            "canton": contact.canton,
            "district": contact.district
        },
        "identification_type": contact.identification_type,
        "identification_number": contact.identification_number,
        "date_of_birth": contact.date_of_birth,
        "country": contact.country,
        "nationality": contact.nationality,
        "metadata": {
            "merchant_defined": true
        }
    });
    const config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/ewallets/${contact.wallet_id}/contacts/${contact.id}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/${contact.wallet_id}/contacts/${contact.id}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.getContact = (contact, response) => {
    const config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/ewallets/${contact.wallet_id}/contacts/${contact.id}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post',  `https://sandboxapi.rapyd.net/${contact.wallet_id}/contacts/${contact.id}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}
Wallet.delete = (contact, response) => {
    const config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/ewallets/${contact.wallet_id}/contacts/${contact.id}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post',  `https://sandboxapi.rapyd.net/${contact.wallet_id}/contacts/${contact.id}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}

Wallet.listContacts = (wallet, response) => {
    const config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/ewallets/${wallet.wallet_id}/contacts}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/${wallet.wallet_id}/contacts}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
    };
    axios(config)
        .then((response) => {
            console.log(response.data);
            response = response.data
            return response;
        })
        .catch((error) => {
            console.log(error);
            response = error;
            return response;
        });
}
//create hosted identity verification page
Wallet.verifyIdentity = (data,response) => {}
Wallet.listDocuments = (data,response) => {}
export default Wallet
