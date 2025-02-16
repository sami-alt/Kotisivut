function Education() {
    return (
        <>
            <div className="eduTitle">
                <h5>Education and Certificates</h5>
                <div className="divider"></div>
                <p>Here you can see formal education and certificates that i have gained.</p>
            </div>
            <div className='eduTitle'>
                <h3>Hive Helsinki - Coding school - Currently</h3>
                <div className='divider'></div>
                <p>
                    I'm Currently studying in Hive Helsinki coding school where studies are mainly C/C++
                    and enviroment is linux Ubunut. There has also been porject with VM and how to use those 
                    enviroments to setup server for example. All my completed projects can be found on my personal github page.
                </p>
            </div>
            <div>
                <div className="eduTitle">
                    <h3 >University</h3>
                    <div className="divider"></div>
                    <p>
                        I Studied three years of biochemistry in University of Turku, During that time i developed great<br />
                        ammount of domain knowledge in that area. I also learned to read scientifc articles and aquire knowledge independently.
                    </p>
                </div>
                <h3 className="eduTitle">Open university courses</h3>
                <p className="eduTitle">Here is list of CS courses that i have completed and i can provide transcripts.</p>
                <div className="courses">
                    <div >
                        <h5>University of Turku</h5>
                        <div className="divider"></div>
                        <ul>
                            <li>Programming basics</li>
                            <li>Software engineering</li>
                            <li>Web development</li>
                            <li>Distributed software systems and cloud services</li>
                            <li>Capstone project - the project is in the Links-section</li>
                        </ul>
                    </div>
                    <div>
                        <h5>University of helsinki</h5>
                        <div className="divider"></div>
                        <ul>
                            <li>Intrsoduction to programming</li>
                            <li>Advanced course in programming</li>
                            <li>Tiekantojen Perusteet</li>
                            <li>Tietorakenteet ja Algoritmit I</li>
                            <li>Big dataplatforms</li>
                            <li>Introduction to cyber security</li>
                            <li>Securing software</li>
                        </ul>
                    </div>
                </div>
                <div className="eduTitle">
                    <h3>Certificates</h3>
                    <div className="divider"></div>
                    <p>text</p>
                    <div className='certs'>

                    <a href="https://credly.com/badges/64599b28-3704-4fc6-8ada-03aa31734c40" id="linkEdu">Link to Aws Practitioners certification</a>
                    <div id="cvLink">
                        <a href="src/assets/certificate-big-data-platform-23.png" download='src/assets/certificate-big-data-platforms-23.png' id="cvLink">Big Data Platforms</a>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}



export default Education