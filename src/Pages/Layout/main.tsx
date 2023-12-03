import { Outlet, Link } from "react-router-dom";
import './layout.scss'


function Layout() {

    return (
        <>
            <header className="header">
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
                        <Link to='/Projects'>Projects</Link>
                    </div>

                    <div>
                        <Link to='/Contact'>Contact</Link>
                    </div>
                    <div>
                        <Link to='/Cv'>CV</Link>
                    </div>
                </nav>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                <p>www.samiraiha.fi</p>
            </footer>
        </>
    )
}

export default Layout