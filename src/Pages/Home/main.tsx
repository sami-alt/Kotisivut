import '../../content.scss'

function Frontpage() {

    return (
        <>
            <div className="content">
                <div className='home'>
                    <h1>About me</h1>
                    <picture>
                        <source type="image/webp" srcSet="src/assets/mypicture.webp" />
                        <img src='src/assets/mypicture.jpg' alt="picture of me" height='500' />
                    </picture>
                    <p>
                        Hello, my name is Sami Räihä and this is my website.<br/>
                        I am a 29-year-old guy from Turku. I have studied biochemistry at the University of Turku.<br/>
                        As an employee, I have a cooperative and self-initiative attitude, which is good for accepting even difficult challenges.<br/>
                        During the past few years, I have been interested in programming and developed my skills through university courses and independent study.<br/>
                        In programming, I am attracted by the challenges and the skills that develop when solving them.<br/>
                        In here you can find more about me like my work history, education and links to my various projects.<br/>
                        If you are interested in hiring me, my contact information can be found here along with my CV, which can be downloaded easily.<br/>

                    </p>
                </div>
            </div>
        </>
    )
}

export default Frontpage