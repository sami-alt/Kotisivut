import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="home">
                <div id='intro'>
                    <h1>Hello, i'm sami</h1>
                    <p>Hi, and thanks for visiting my website! 
                    Here, you'll find more about me, my skills, education, and experience. 
                    Feel free to explore my portfolio and check out some of my projects and demos. 
                    I'm always eager to learn, improve, and take on new challenges in programming. Enjoy your stay!</p> 
                </div>
                <picture id='picture'>
                    <img src='src/assets/mypictureedit.png' alt="picture of me" height='600' />
                </picture>
                <div className='homeText'>
                    <div>

                        <h1>About me</h1>
                        <p>
                            Learn more about my background, education, and passion for programming on the About Me page.
                        </p>
                        <Link to='/About' id='link'>Click here to read more</Link>
                        <div className="divider"></div>
                    </div>
                    <div>
                        <h1>My portfolio</h1>
                        <p>
                            Check out my portfolio to see my projects and demos showcasing my skills and experience.
                        </p>

                        <Link to='/Portfolio' id='link'>Click here to read more</Link>
                        <div className="divider"></div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Home