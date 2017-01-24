'use stric'
import course from 'course'
import ClientController from '../client'
import logger from '../utils/logger'


const router = course()
const clientCtrl = new ClientController()

router.all((req, res, next) => {  
  logger.info(req.method, req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('x-ver', '1.0')
  next()
})

router.get('/', (req, res) => {  
  res.end('Bienvenidos a la remisera del damo')
})

router.get('/clients',                  clientCtrl.getAll)  
router.get('/clients/:clientId',        clientCtrl.get)  
router.post('/clients',                 clientCtrl.save)  
router.delete('/clients/:clientId',     clientCtrl.remove)  
router.put('/clients/:clientId',        clientCtrl.update)

function onRequest (req, res) {  
  router(req, res, (err) => {
    if (err) return fail(err, res)

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`404 Not Found: ${req.url}`)
  })
}

export default onRequest    