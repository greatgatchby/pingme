import sha256 from 'sha256';

const rapyd_signature = (http_method,url_path,salt,timestamp,access_key,secret_key,body_string, result) => {
    const str = sha256(http_method + url_path + salt + timestamp + access_key + secret_key + body_string)
    const buff = Buffer.from(str, 'utf-8');
    result(buff.toString('base64'))
}

export default  rapyd_signature
