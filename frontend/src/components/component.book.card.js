import { useEffect, useState } from "react"
import bookService from "../services/book.services";
import { Link } from "react-router-dom";
function BookCard(){
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        getBooks();
    },[])
    async function getBooks(){
        try{
        const result=await bookService.getAllBooks()
        setBooks(result.data)   
        }catch(error){
                console.log(error)
        }
    }
    return(
        <>
        <h2 className="titre">Livres</h2>
        <div class="card-group container">
            <div class="row">
            {books.map((elem,i)=>{
                return   <div class="col-sm" key={i+1}>
                    <img class="card-img-top" src={`${elem.image}`}/>
                <div class="card-body">
                    <h5 class="card-title">{elem.name}</h5>
                </div>
                </div>
            })}        
        </div>
    </div></>
    )
}

export default BookCard