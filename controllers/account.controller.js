const express = require('express');
let router = express.Router();
const Account = require('./../models/account');

router.get('/', (req, res, next)=>{
  console.log('GET');
  Account.find()
    .then(account => res.send(account))
    .catch(next);
});

router.post('/', (req, res, next)=>{
  let newAccount = new Account({
    login: req.body.login,
    password: req.body.password,
    name: req.body.name
  });

  newAccount.save()
    .then(createdAccount => res.send(createdAccount))
    .catch(next);
});

router.put('/:id', (req, res, next)=>{
  Account.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedAccount =>res.send(updatedAccount))
    .catch(next)
});

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

module.exports = router;