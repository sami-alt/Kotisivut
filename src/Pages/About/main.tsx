function About() {

    return (
        <>
            <div className="about">
                <div className="aboutme">
                    <h2>Hello, let me introduce myself.</h2>
                    <p>Welcome to my website. I'm Sami Räihä, a 30-year-old software developer <br/> 
                        from Turku with a background in biochemistry
                        from the University of Turku.<br />
                        My interest in programming has grown over the years,
                        fueled by both university courses and self-study.<br/>
                        I enjoy the challenges programming presents
                        and the continuous skill development it offers.<br />
                        I'm known for being cooperative, taking initiative, and embracing challenges.<br />
                        Here, you'll find details about my work history, education, and various projects.<br />
                        I'm currently studying in Hive Helsinki coding shcool.<br/>
                        If you're considering me for a role, my contact details and CV are available for download.</p>
                    <div className="divider"></div>
                </div>
                <picture id='picture'>
                    <img src='src/assets/mypictureedit.png' alt="picture of me" height='600' />
                </picture>
            </div>
        </>
    )
}



export default About