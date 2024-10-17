import {Router} from "express"
import {postBook,allBook,getBook,filterBook,updateBook,deleteBook} from "../controller/books.contoller.js"

const route = Router()

route.post("/",postBook)
route.get("/all",allBook)
route.get("/book",getBook)
route.get("/filter",filterBook)
route.put("/update",updateBook)
route.delete("/delete/:bookId",deleteBook)


export{route}