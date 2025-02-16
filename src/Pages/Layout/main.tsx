import { Outlet, Link } from "react-router-dom";

function Layout() {

    return (
        <>
            <header className="header">
                <div id='logo'>
                    <h2 id="symbol">{'{}'}</h2>
                    <h2 > Sami Räihä</h2>
                </div>
                <nav className="nav">
                    <div className="navLinks">
                        <Link to='/' id='link'>Home</Link>
                    </div>
                    <div className="navLinks" >
                        <Link to='/About' id="link">About</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Portfolio' id='link'>Portfolio</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Education' id='link'>Education</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Skills' id='link'>Skills</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Experience' id='link'>Experience</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Contact' id='link'>Contact</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Cv' id='link'>CV</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Demos' id='link'>Demos</Link>
                    </div>
                    <button id="menuButton">
                        <div id="line"></div>
                        <div id="line"></div>
                        <div id="line"></div>
                    </button>
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