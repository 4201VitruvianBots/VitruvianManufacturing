import { Outlet, Link } from "react-router-dom";
import "./app.css";

const Layout = () => {
    return (
        <>
            <nav>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/HomePt2">Home Pt2</Link>
                    <Link to="/HomePt3">Home Pt3</Link>
                    <Link to="/Printer">Printer Status</Link>
                    <Link to="/PrinterStatusDataPage">Printer Status Admin</Link>
                    <Link to="/Machining">Machining</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
