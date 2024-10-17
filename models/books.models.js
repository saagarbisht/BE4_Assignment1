import {Schema,model} from "mongoose" 

const bookSchema =  new Schema({
  title : {
    type : String,
    required : true
  },
  author : {
    type : String,
    required : true
  },
  publishedYear  : {
    type : Number,
    required : true
  },
  genre : [{
    type : String,
    enum : ['Fiction', 'Non-fiction', 'Mystery', 'Thriller', 'Science Fiction', 'Fantasy', 'Romance', 'Historical', 'Autobiography', 'Self-help','Business','Other']
  }],
  language : {
    type : String,
    required : true
  },
  country : {
    type : String,
    default : "United States'"
  },
  rating : {
    type : Number,
    min : 0,
    max : 10,
    default : 0
  },
  summary  : {
    type : String,
  },
  coverImageUrl  : {
    type : String,
  },
},{timestamps : true})

export const Book = model("Book",bookSchema)

