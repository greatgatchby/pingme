// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method){
    case('GET'):
      res.status(200).json({  message: 'Welcome to Ping.me rest api' })
      break
    case('POST'):
      res.status(200).json({message: 'please use one of the endpoints provided in the documentation'})
      break
    case('PUT'):
      res.status(200).json({message: 'please use one of the endpoints provided in the documentation'})
      break
    case('DELETE'):
      res.status(200).json({message: 'please use one of the endpoints provided in the documentation'})
      break
  }
}
