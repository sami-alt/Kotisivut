function Portfolio() {
    return (
        <>
            <div id='portfolioTitle' >
                <h1 >
                    Portfolio
                </h1>
                <div className="divider"></div>
                <p>
                    Projects that are currently on this page are in area of web development<br/>
                    Couple of projects are fullstack and some just frontend projects.<br/>
                    I have some C projects that i am working on that will be soon added here.
                </p>
            </div>
            <div className="projects">
                <div id='item1'>
                    <div className="techs">
                        <p>Web development</p>
                        <p>React</p><p>Sqlite</p><p>Docker</p>
                    </div>
                    <h5>Shopping list app</h5>
                    <div id="project1">
                        <img src="src/assets/shoppinglist.png" height='300'></img>
                        <img src='src/assets/login.png' width='250'></img>
                    </div>
                    <div className="projectText">
                        <p>
                            This is small shoppinglist application with <br/>
                            backend implemented with JavaScript and Sqlite<br />
                            It has User authentication and sharing features for the list between users.
                        </p>
                    </div>
                    <a href="https://ostoslista.samiraiha.fi/">Link to application page</a>
                    <a href="https://github.com/sami-alt/Ostoslista" >Click here for Github repository</a>
                </div>
                <div id="item2">
                    <div className="techs">
                        <p>Web development</p>
                        <p>React</p><p>Redux</p><p>Spring.io</p>
                    </div>
                    <h5>Tesy project</h5>
                    <div id="project2">
                        <img src="\src\assets\tesy-animal-list.PNG" width='700'></img>
                    </div>
                    <div className="projectText">
                        <p>
                            Proof of concept project for TESY employers and volunteers<br/>
                            to manage information about rescued animals and their conditions.<div/>
                            Users have specific roles and permissions on the aplication.
                        </p>
                    </div>
                    <a href="https://github.com/sami-alt/FullstackCapstone2022-mirror">Click here for Github repository</a>
                </div>
                <div id="item3">
                    <div className="techs">
                        <p>Web development</p>
                        <p>React</p>
                        <p>Postgresql</p>
                        <p>Docker</p>
                    </div>
                    <h5>City bike app</h5>
                    <div id="item3content">
                        <div id="project3">
                            <img src="src/assets/citybike_1.png" width='400'></img>
                            <img src="src/assets/citybike_2.png" width='400'></img>
                        </div>
                        <p>
                            This was technical skill project for job interview<br/>
                            that works in docker container that has both backend and frontend.<br/>
                            It uses open source data about city bikes.
                             
                        </p>
                    </div>
                    <a href="https://github.com/sami-alt/solitadev-pre" >Click here for Github repository</a>
                </div>
                <div id="item4">
                    <div className="techs">
                        <p>Web development</p>
                        <p>React</p>
                        <p>Mysql</p>
                        <p>Docker</p>
                    </div>
                    <h5>Aws certification project</h5>
                    <img src="src/assets/AWS-Logo-PNG-Pic.png" height='150' width='300'></img>
                    <p className="projectText">
                        Final project for course for Aws practitioner certification.<br/>
                        It is very simple Mysql server that has backup system that <br/>
                        takes snapshots of current database and uses latest to get database <br/>
                        back up on alternative machine or container. This project also works in docker container.
                    </p>
                    <a href='https://github.com/sami-alt/AWS_team'>Click here for Github repository</a>
                </div>
            </div>
        </>
    )
}

export default Portfolio