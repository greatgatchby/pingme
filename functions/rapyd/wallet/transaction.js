import axios from 'axios'
import timestamp from '../../utils/timestamp'
import CryptoJS from "crypto-js";
import rapyd_signature from "../rapyd_signature";
const Transaction = (transaction) => {
    this.id = transaction.id
    this.accounts = transaction.accounts
    this.action_data = transaction.action_data
    this.alias = transaction.alias
    this.amount = transaction.amount
    this.balance = transaction.balance
    this.balance_type = transaction.balance_type
    this.category = transaction.category
    this.contacts = transaction.contacts
    this.created_at = transaction.created_at
    this.currency = transaction.currency
    this.currency_code = transaction.currency_code
    this.destination_balance = transaction.destination_balance
    this.destination_balance_type = transaction.destination_balance_type
    this.destination_ewallet = transaction.destination_ewallet
    this.destination_ewallet_idd = transaction.destination_ewallet_idd
    this.estination_phone_number = transaction.estination_phone_number
    this.destination_transaction_id = transaction.destination_transaction_id
    this.email = transaction.email
    this.ending_before = transaction.ending_before
    this.ewallet_id = transaction.ewallet_id
    this.ewallet_reference_id = transaction.ewallet_reference_id
    this.first_name = transaction.first_name
    this.last_name = transaction.last_name
    this.last_transaction_amount = transaction.last_transaction_amount
    this.last_transaction_currency = transaction.last_transaction_currency
    this.limit = transaction.limit
    this.limits = transaction.limits
    this.metadata = transaction.metadata
    this.page_number = transaction.page_number
    this.page_size = transaction.page_size
    this.phone_number = transaction.phone_number
    this.reason = transaction.reason
    this.response_metadata = transaction.response_metadata
    this.source_balance = transaction.source_balance
    this.source_ewallet = transaction.source_ewallet
    this.source_ewallet_id = transaction.source_ewallet_id
    this.source_phone_number = transaction.source_phone_number
    this.source_transaction_id = transaction.source_transaction_id
    this.starting_after = transaction.starting_after
    this.status = transaction.status
    this.timestamp = transaction.timestamp
    this.transfer_response_at = transaction.transfer_response_at
    this.type = transaction.type
    this.verification_status = transaction.verification_status
    this.wallet = transaction.wallet
    this.start_date = transaction.start_date
    this.end_date = transaction.end_date
}
const salt = CryptoJS.lib.WordArray.random(12)
Transaction.transfer = (data,response) => {
    const request = {
        "source_ewallet": data.source,
        "amount": data.amount,
        "currency": data.currency,
        "destination_ewallet": data.destination,
        "metadata":
            {
                "merchant_defined": true
            }
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.accept = (data,response) => {
    const request = {
        "id": data.id,
        "metadata": {
            "merchant_defined": "accepted"
        },
        "status": "accept"
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer/response',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post','https://sandboxapi.rapyd.net/v1/account/transfer/response', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.decline = (data,response) => {
    const request = {
        "id": data.id,
        "metadata": {
            "merchant_defined": "accepted"
        },
        "status": "decline"
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer/response',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post','https://sandboxapi.rapyd.net/v1/account/transfer/response', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.cancel = (data,response) => {
    const request = {
        "id": data.id,
        "metadata": {
            "merchant_defined": "accepted"
        },
        "status": "cancel"
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer/response',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post','https://sandboxapi.rapyd.net/v1/account/transfer/response', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.holdFunds = (data,response) => {
    const request = {
        "ewallet": data.wallet,
        "amount": data.amount,
        "currency": data.currency
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.ReleaseFunds = (data,response) => {
    const request = {
        "ewallet": data.wallet,
        "amount": data.amount,
        "currency": data.currency
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.setAccountLimit = (data,response) => {
    const request = {
        "account_id": data.account_id,
        "amount": data.amount,
        "type": data.type,
        "currency": data.currency
    }
    let config = {
        method: 'post',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.deleteAccountLimit = (data,response) => {
    const request = {
        "type": data.type,
        "account_id": data.account_id
    }
    let config = {
        method: 'dalete',
        url: 'https://sandboxapi.rapyd.net/v1/account/transfer',
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.listTransactions = (data,response) => {
    let config = {
        method: 'get',
        url: `https://sandboxapi.rapyd.net/v1/user/${data.wallet}/transactions?${data.currency}&${data.end_date}&$${data.ending_before}&${data.page_number}&${data.page_size}&${data.start_date}&${data.starting_after}&${data.type}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.retrieveBalance = (data,response) => {
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/user/${data.wallet}/accounts`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
Transaction.getTransactionDetails = (data,response) => {
    let config = {
        method: 'post',
        url: `https://sandboxapi.rapyd.net/v1/user/${data.wallet}/transactions/${data.transaction}`,
        headers: {
            'Content-Type': 'application/json',
            'access_key': process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3',
            'salt': salt,
            'timestamp': timestamp(),
            'signature': rapyd_signature('post', 'https://sandboxapi.rapyd.net/user', salt, timestamp, process.env.RAPYD_ACCESS_KEY || 'C60CFF314B0D53FFA1B3', process.env.RAPYD_SECRET_KEY || '87837bd1dd4b2649a8d2abb585f7af6b28f0936c4124fd37155ffbd20cd2cc4a27bcdf8fee0c23ac', request)
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
