import { useEffect, useState } from "react"
import catServices from "../services/category.services";
import { Link } from "react-router-dom";
function CategoryList(){
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        getCategories();
    },[])
    async function getCategories(){
        try{
        const result=await catServices.getAllCategories()
        setCategory(result.data)   
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
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {category.map((elem,i)=>{
                return <tr key={i+1}>
                    <td>{i+1}</td>
                    <td>{elem.name}</td>
                    <td>{elem.description}</td>
                    <td>
                        <Link className={"btn btn-primary"} to={`/admin/category/edit/${elem._id}`}>
                            Mod
                        </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className={"btn btn-danger"} onClick={()=>{catServices.deleteCategory(elem._id); window.location.reload(false);}}>
                            Sup
                        </button>
                    </td>
                </tr>
            })}
                    </tbody>
                </table>
                </div>
                <Link className={"btn btn-primary mb-2"} to={`/admin/category/new`}><strong>Ajouter Category</strong>
                </Link>
            </div>
            </div>
    )
}

export default CategoryList