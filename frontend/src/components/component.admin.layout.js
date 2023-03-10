import { Link, Outlet } from "react-router-dom"
function AdminLayout(){
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/#">BookShoppe</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/admin/home`} className="nav-link active" aria-current="page">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/admin/books`} className="nav-link">BOOKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/admin/category`} className="nav-link">CATEGORIES</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                <hr/>
            </div>
            <Outlet/>
        </>
    )
}
export default AdminLayout
