export default function handler(req, res) {
    switch (req.method){
        case('GET'):
            res.status(200).json({ name: 'John Doe' })
            break
    }
}
