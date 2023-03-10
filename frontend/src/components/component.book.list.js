import { useEffect, useState } from "react"
import bookService from "../services/book.services";
import { Link } from "react-router-dom";
function BookList(){
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
            <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                <table class="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Description</th>
                        <th scope="col">Isbn</th>
                        <th scope="col">Auteur</th>
                        <th scope="col">Editeur</th>
                        <th scope="col">category</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((elem,i)=>{
                return <tr key={i+1}>
                    <td>{i+1}</td>
                    <td>{elem.name}</td>
                    <td>{elem.description}</td>
                    <td>{elem.isbn}</td>
                    <td>{elem.auteur}</td>
                    <td>{elem.editeur}</td>
                    <td>{elem.category.name}</td>
                    <td>
                        <Link className={"btn btn-primary"} to={`/admin/books/edit/${elem._id}`}>
                            Mod
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={"btn btn-danger"} onClick={()=>{bookService.deleteBookById(elem._id); window.location.reload(false);}}>
                            Sup
                        </button>
                    </td>
                </tr>
            })}
                    </tbody>
                </table>
                </div>
                <br/>
                <br/>
                <br/>
                <Link className={"btn btn-primary mb-2"} to={`/admin/books/new`}><strong>Ajouter Livre</strong>
                </Link>
            </div>
            </div>
    )
}

export default BookList