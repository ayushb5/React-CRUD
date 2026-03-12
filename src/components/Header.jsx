import { NavLink } from "react-router-dom"
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-2">
                <div className="container">
                    <NavLink to={"/"} className={"text-decoration-none navbar-brand"}>
                        <h2 className="text-success">CRUD Operation</h2></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <div className="navbar-nav mx-auto">
                            <NavLink to="/add" className={({ isActive }) => {
                                return isActive ? "nav-link text-primary fw-bold" : "nav-link"
                            }}>
                                <h4>Add User</h4>
                            </NavLink>
                            <NavLink to="/edit" className={({ isActive }) => {
                                return isActive ? "nav-link text-primary fw-bold" : "nav-link"
                            }}>
                                <h4>Edit User</h4>
                            </NavLink>
                            <NavLink to="/delete" className={({ isActive }) => {
                                return isActive ? "nav-link text-primary fw-bold" : "nav-link"
                            }}>
                                <h4>Delete User</h4>
                            </NavLink>
                        </div>

                        <a href="http://localhost:5000/users" className="btn btn-outline-primary">Visit API</a>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header