

import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
    const [isClicked, setIsClicked] = useState(false)

    function togleDropdown()
    {
        setIsClicked(!isClicked)
    }

    return (
        <>  
        <div className={isClicked ? "change" : ""}>

            <header className={"header"}>
                <div id='logo'>
                    <h2 id="symbol">{'{}'}</h2>
                    <h2 > Sami Räihä</h2>
                </div>
                <nav className="nav">
                    <div className="navLinks">
                        <Link to='/' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Home</Link>
                    </div>
                    <div className="navLinks" >
                        <Link to='/About' id="link" onClick={isClicked ?  togleDropdown : () => {}}>About</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Portfolio' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Portfolio</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Education' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Education</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Skills' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Skills</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Experience' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Experience</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Contact' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Contact</Link>
                    </div>
                    <div className="navLinks" id="cvLink">
                        <Link to='/Cv' id='link' onClick={isClicked ?  togleDropdown : () => {}}>CV</Link>
                    </div>
                    <div className="navLinks">
                        <Link to='/Demos' id='link' onClick={isClicked ?  togleDropdown : () => {}}>Demos</Link>
                    </div>
                </nav>
                    <button id="menuButton" className={isClicked ? 'change' : ''} onClick={togleDropdown}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </button>
            </header>
            <main className={isClicked ? "change" : "main"}>
                <Outlet />
            </main>
            <footer className={isClicked ? "change" : "footer"}>
                {isClicked ? null : <p>www.samiraiha.fi</p>}
            </footer>
        </div>
        </>
    )
}

export default Layout