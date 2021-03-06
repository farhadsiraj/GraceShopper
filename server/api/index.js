const router = require('express').Router()
module.exports = router

router.use('/admin', require('./admin'))
router.use('/users', require('./orders'))
router.use('/users', require('./users'))
router.use('/products', require('./singleproduct'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
