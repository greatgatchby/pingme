export default function handler(req, res) {
    switch (req.method){
        case('GET'):

            res.status(200).json({ name: 'John Doe' })
            break
        case('POST'):
            res.status(200).json({body: req.body})
            break
        case('PUT'):
            res.status(200).json({body: req.body})
            break
        case('DELETE'):
            res.status(200).json({body: req.body})
            break
    }
}
