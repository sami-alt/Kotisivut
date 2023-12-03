import '../../content.scss'

function Frontpage() {

    return (
        <>
            <div className="content">
                <div className='home'>
                    <h1>About me</h1>
                    <img src='src/assets/mypicture.png' alt="picture of me" height='500' />
                    <p>
                        Minä olen 29 vuotias <br />
                        Koodarin alku joka, <br />
                        Haluaa paljon rahaa että <br />
                        voi ostaa paljon juttuha.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Frontpage