const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    validate:{
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  likes:Number,
  // postCount: Number,
  posts: [PostSchema] //embedded resource
});

userSchema.virtual('postCount').get( function(){
  return this.posts.length;
});

const User = mongoose.model('user',  userSchema);
module.exports = User;