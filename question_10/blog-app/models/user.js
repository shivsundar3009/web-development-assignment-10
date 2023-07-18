const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Add user schema fields (e.g., name, email, password)
});

module.exports = mongoose.model('User', userSchema);
