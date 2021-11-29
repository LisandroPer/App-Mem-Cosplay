import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/category/1" className="nav-link active" aria-current="page">Disfraces</Link>
                        <Link to="/category/2" className="nav-link active" aria-current="page">Cosplays</Link>
                        <Link to="/category/3" className="nav-link active" aria-current="page">Accesorios</Link>
                        <a className="nav-link disabled">Disabled</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    );
}