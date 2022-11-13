import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  body: {
    type: String,
  },
  comments: [{
    body: String,
    date: Date
  }],
  date :{
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})

export default model('Blog', blogSchema);