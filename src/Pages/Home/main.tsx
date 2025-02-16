import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="home">
                <div id='intro'>
                    <h1>Hello, i'm sami</h1>
                    <p>These are my websites to showcase my skills,<br/> portfolio and experience.</p>
                </div>
                <picture id='picture'>
                    <img src='src/assets/mypictureedit.png' alt="picture of me" height='600' />
                </picture>
                <div className='homeText'>
                    <div>

                        <h1>About me</h1>
                        <p>
                            From here you can read short paragraph<br />
                            to get fuller picture about me.
                        </p>
                        <Link to='/About' id='link'>Click here to read more</Link>
                        <div className="divider"></div>
                    </div>
                    <div>
                        <h1>My portfolio</h1>
                        <p>
                            Here you can find about project that i have completed <br/>
                            or are currently under progress to find about my skills.
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