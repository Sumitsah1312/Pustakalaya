import Book from "../Model/book.model";

export const getBook=async(req,res)=>{
    try {
        const book=Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Err : ",error);
        res.status(500).json(error);
    }
}