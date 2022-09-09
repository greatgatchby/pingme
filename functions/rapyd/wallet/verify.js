import timestamp from "../../utils/timestamp";
import rapyd_signature from "../rapyd_signature";
import axios from "axios";
import CryptoJS from "crypto-js";
const salt = CryptoJS.lib.WordArray.random(12)

const Verify =(verify) => {
    this.cancel_url = verify.cancel_url
    this.complete_url = verify.complete_url
    this.contact = verify.contact
    this.ewallet = verify.ewallet
    this.reference_id = verify.reference_id
}
Verify.verifyIdentity = (data,response) => {
    let request =
        {
            "cancel_url": data.cancel_url,
            "complete_url": data.complete_url,
            "contact": data.contact,
            "ewallet": data.ewallet,
            "page_expiration": 1631437200,
            "reference_id": data.reference_id,
        }
    let config = {
        method: 'post',
        url: ` https://sandboxapi.rapyd.net/v1/hosted/idv`,
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
