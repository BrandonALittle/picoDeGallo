var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const bluebird = require('bluebird');
const bcryptAsync = bluebird.promisifyAll(bcrypt);

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
});

// authenticate input against database documents
UserSchema.statics.authenticate = async (email, password) => {
    
    const user = await User.findOne({ email });

    const correctPassword = bcrypt.compare(password, user.password);

    return correctPassword ? user : null;
}

//hash password before saving to database
UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

const User = mongoose.model('User', UserSchema);
module.exports = User;