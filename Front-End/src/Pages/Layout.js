import { Outlet, Link } from "react-router-dom";
import "./app.css";

const Layout = () => {
    return (
        <>
            <nav>
            <div className="menu">

                        <Link to="/">Home</Link>
                    </li>
                    <li>
              </li>
                    <li>
                        <Link to="/Printer">PrinterStatus</Link>
                    </li>
                </ul>

                        <br></br>
                        <Link to="/Machining">Machining</Link>
                        <br></br>
                        </div>

            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
