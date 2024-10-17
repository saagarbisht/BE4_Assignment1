import {Book} from "../models/books.models.js"

export async function postBook(req,res){
  const bookData = req.body;
  if(!bookData){
    return res.status(400).send("please send the valid data to upload")
  }
  try {
    const newBook = await new Book(bookData)
    newBook.save()
    .then(() => {
      return res.status(200).json({"msg" : "data uploaded"})
    })
    .catch(() => {
      return res.status(400).json({"msg" : "unable to upload data try again please check the data and try again"})
    })    
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to upload data try again")
  }
}

export async function allBook(req,res){
  try {
    const books = await Book.find()
    return res.status(200).json({"all books" : books})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }
}

export async function getBook(req,res){
  const detailBy = req.query
  if(!detailBy){
    return res.status(400).send("please enter the book detail in query params")
  }
  try {
    const book = await Book.findOne(detailBy)
    return res.status(200).json({"book" : book})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }
}

export async function filterBook(req,res){
  const filterBy = req.query
  if(!filterBy){
    return res.status(400).send("please enter the filter details in query params")
  }
  try {
    const filteredBooks = await Book.find(filterBy)
    if(!filteredBooks){
      return res.status(400).send("unable to get the data please check the filter details and try again")
    }
    return res.status(200).json({"books" : filteredBooks})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to get the data try again")
  }

}

export async function updateBook(req,res){
  const detailBy = req.query
  const updatedDetails = req.body
  if(!detailBy && !updatedDetails){
    return res.status(400).send("please enter the book filter in query params and details in body")
  }
  try {
    const book = await Book.findOneAndUpdate(detailBy,updatedDetails,{new:true})
    return res.status(200).json({"new data" : book})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to update the data try again")
  }
}

export async function deleteBook(req,res){
  const bookId = req.params.bookId;
  if(!bookId){
    return res.status(400).send("please enter valid book id")
  }
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId)
    if(!deletedBook){
      return res.status(200).json({"msg" : "book noy found"})
    }
    return res.status(200).json({"msg" : "book deleted successfully"})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send("unable to delete the data try again")
  }
}