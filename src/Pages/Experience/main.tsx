function Experience() {
    return (
        <>  
        <div className="experience">

            <div id="jobsTitle">
                <h1>
                    Experience
                </h1>
                <p>
                    I have previous experience working in a company specializing in real estate analytics,<br/>
                     where I managed data collection and database updates from various real estate listing sites.<br/>
                      Currently, I am focused on developing my programming skills through my studies at Hive Helsinki and personal projects. 
                </p>
                <div className="divider"></div>
            </div>
            <div className="jobs">
                <div className="job">
                    <h3>Okmd</h3>
                    <p>
                        Okmd was a small startup that aquired and sold realestate data for construction companies<br/>
                        and other interested parties. I set up a server that used sites like etuovi and vuokraovi<br/>
                        to scrape data about ammount of available apparments and their general prices.
                    </p>
                    <p>6.2024-</p>
                    <p>part-time</p>
                </div>
                <div className="job">
                    <h3>Lounaissuomen Tietojakelu</h3>
                    <p>
                        I deliver pakages, letters and newspapers in early morning in Turku area.
                    </p>
                    <p>6.2018-</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Experience