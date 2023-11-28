import { Outlet, Link } from "react-router-dom";
import './nav.scss'


function Layout(){

    return(
        <>
            <nav className="nav">
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/Education'>Education</Link>
                    </div>
                    <div>
                        <Link to='/Experience'>Experience</Link>
                    </div>
                    <div>
                        <Link to='/Cv'>CV</Link>
                    </div>
                
            </nav>
            <Outlet />
        </>

    )
}

export default Layout