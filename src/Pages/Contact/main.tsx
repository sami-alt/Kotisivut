function Contact() {
    return (
        <>
            <div id="contactTitle">
                <h2>Get in contact with me</h2>
                <div>
                Feel free to reach out if you have any questions or would like to connect.<br/>
                 You can contact me via email or through my social media profiles. I look forward to hearing from you!
                </div>
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
                    <p>Here is my Linkedin</p>
                    <a href="www.linkedin.com/samiräihä"><img src="src/assets/linkedin-4-128.png" id="linkedin"/></a>
                </div>
                <div className="contact">
                    <p>Github</p>
                    <p>Here is my Github</p>
                    <a href="https://github.com/sami-alt">
                        <img src='src/assets/github-mark-white.png' id="github"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact