import timestamp from "../../utils/timestamp";
import rapyd_signature from "../rapyd_signature";
import axios from "axios";
import CryptoJS from "crypto-js";
const salt = CryptoJS.lib.WordArray.random(12)

const Contact = (contact) => {
    this.wallet = contact.wallet;
    this.contact = contact.contact;
    this.email = contact.email;
    this.first_name = contact.first_name;
    this.last_name = contact.last_name;
    this.middle_name = contact.last_name;
    this.type = contact.type;
    this.phone_number = contact.phone_number;
    this.mothers_name = contact.mothers_name;
    this.line_1 = contact.line_1;
    this.line_2 = contact.line_2;
    this.line_3 = contact.line_3;
    this.city = contact.city;
    this.state = contact.state;
    this.country = contact.country;
    this.zip = contact.zip;
    this.canton = contact.canton;
    this.district = contact.district;
    this.identification_type = contact.identification_type;
    this.identification_number = contact.identification_number;
    this.date_of_birth = contact.date_of_birth;
    this.country = contact.country;
    this.nationality = wallet.nationality;
}

Contact.add = (data, response) =>{
    let request = {
        "phone_number": data.phone_number,
        "email": data.email,
        "first_name": data.first_name,
        "last_name": data.last_name,
        "middle_name": data.middle_name,
        "mothers_name": data.mothers_name,
        "contact_type": "personal",
        "address": {
            "name": `${data.first_name} ${data.last_name}`,
            "line_1": data.line_1,
            "line_2": data.line_2,
            "line_3": data.line_3,
            "city": data.city,
            "state": data.state,
            "country": data.country,
            "zip": data.zip,
            "phone_number": data.phone_number,
            "metadata": {},
            "canton": data.canton,
            "district": data.district
        }
    }
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: request
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
Contact.update = (data, response) =>{
    let request = {
        "phone_number": data.phone_number,
        "email": data.email,
        "first_name": data.first_name,
        "last_name": data.last_name,
        "middle_name": data.middle_name,
        "mothers_name": data.mothers_name,
        "contact_type": "personal",
        "address": {
            "name": `${data.first_name} ${data.last_name}`,
            "line_1": data.line_1,
            "line_2": data.line_2,
            "line_3": data.line_3,
            "city": data.city,
            "state": data.state,
            "country": data.country,
            "zip": data.zip,
            "phone_number": data.phone_number,
            "metadata": {},
            "canton": data.canton,
            "district": data.district
        }
    }
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
        },
        data: request
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

Contact.get = (data, response) =>{
    let config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
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
Contact.getCompliance = (data, response) =>{
    let config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}/compliance_levels`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
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

Contact.getAll = (data, response) =>{
    let config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
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
Contact.delete = (data, response) =>{
    let config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', `https://sandboxapi.rapyd.net/v1/ewallets/${data.wallet}/contacts/${data.contact}`, salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', wallet)
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


