import axios from 'axios'
import timestamp from '../../utils/timestamp'
import CryptoJS from "crypto-js";
import rapyd_signature from "../rapyd_signature";
const salt = CryptoJS.lib.WordArray.random(12)

const Customer = (customer) => {
    this.customer = customer.customer // customer id
    this.business_vat_id = customer.business_vat_id
    this.email = customer.email
    this.ewallet = customer.ewallet
    this.invoice_prefix = customer.invoice_prefix
    this.name = customer.name
    this.phone_number = customer.phone_number
    this.default_payment_method = customer.default_payment_method
    this.type = customer.type
    this.number = customer.number
    this.expiration_month = customer.expiration_month
    this.expiration_year = customer.expiration_year
    this.cvv = customer.cvv
    this.payment_methods = customer.payment_methods
}

Customer.create = (data, response) => {
    let request = {
        "business_vat_id": data.business_vat_id,
        "email": data.email,
        "coupon": data.coupon,
        "description": data.description,
        "ewallet": data.ewallet,
        "invoice_prefix": data.invoice_prefix,
        "metadata": {
            "merchant_defined": true
        },
        "name": data.name,
        "phone_number": data.phone_number,
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/customers',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
        },
        data: request
    };
}
Customer.update = (data, response) => {
    let request = {
        "business_vat_id": data.business_vat_id,
        "email": data.email,
        "coupon": data.coupon,
        "description": data.description,
        "ewallet": data.ewallet,
        "invoice_prefix": data.invoice_prefix,
        "metadata": {
            "merchant_defined": true
        },
        "name": data.name,
        "phone_number": data.phone_number,
    }
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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

Customer.retrieve = (data, response) => {
    let config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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

Customer.delete = (data, response) => {
    let config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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

Customer.deleteDiscount = (data, response) => {
    let config = {
        method: 'delete',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}/discount`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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

Customer.addCard = (data, response) => {
    let request = {
        "type": data.type,
        "fields": {
            "number": data.number,
            "expiration_month": data.expiration_month,
            "expiration_year": data.expiration_year,
            "cvv": data.cvv,
            "name": data.name
        },
        "metadata": {
            "merchant_defined": true
        }
    }
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}/payment_methods`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Customer.updateCard = (data, response) => {
    let request = {
        "type": data.type,
        "fields": {
            "number": data.number,
            "expiration_month": data.expiration_month,
            "expiration_year": data.expiration_year,
            "cvv": data.cvv,
            "name": data.name
        },
        "metadata": {
            "merchant_defined": true
        }
    }
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/customers/${data.customer}/payment_methods/${data.payment_methods}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/customers', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
