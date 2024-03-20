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
                        Welcome to my website. I'm Sami Räihä, a 29-year-old software developer from Turku with a background in biochemistry from the University of Turku.
                        My interest in programming has grown over the years, fueled by both university courses and self-study.
                        I enjoy the challenges programming presents and the continuous skill development it offers.
                        I'm known for being cooperative, taking initiative, and embracing challenges.
                        Here, you'll find details about my work history, education, and various projects.
                        If you're considering me for a role, my contact details and CV are available for download.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Frontpage