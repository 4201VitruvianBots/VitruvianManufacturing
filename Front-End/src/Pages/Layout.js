import { Outlet, Link } from "react-router-dom";
import "./app.css";

const Layout = () => {
    return (
        <>
            <nav>
            <div className="menu">

                        <Link to="/">Home</Link>
                        <br></br>
                        <Link to="/Machining">Machining</Link>
                        <br></br>
                        <Link to="/contact">Contact</Link>
                        </div>

            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
