const express = require('express')
const router = express.Router()
const createUser = require('../controller/register')

router.post('/register',createUser.createUser)
router.get('/view',createUser.view)
router.put('/edit',createUser.edit)
router.delete('/delete',createUser.delete)

module.exports = router