function Contact() {
    return (
        <>
            <div id="contactTitle">
                <h2>Get in contact with me</h2>
                <div className="divider"></div>
            </div>
            <div className="contacts">
                <div className="contact">
                    <p>E-mail</p>
                    <p>Here is my email for mailing purposes</p>
                    <p>sami.raiha94@gmail.com</p>
                    <img src="src/assets/gmail.png" id="gmail"/>
                </div>
                <div className="contact">
                    <p>Linkedin</p>
                    <p>here is my linked in for linking purposes</p>
                    <a href="www.linkedin.com/samiräihä"><img src="src/assets/linkedin-4-128.png" id="linkedin"/></a>
                </div>
                <div className="contact">
                    <p>Github</p>
                    <p>here is my github for hubbing purposes</p>
                    <a href="https://github.com/sami-alt">
                        <img src='src/assets/github-mark-white.png' id="github"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact