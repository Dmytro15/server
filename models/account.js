const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  login: String,
  password: Number,
  name: String
});
const Account = mongoose.model('Account', accountSchema);
module.exports = Account;