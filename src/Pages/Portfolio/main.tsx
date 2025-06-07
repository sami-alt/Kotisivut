function Portfolio() {
    return (
        <>  
        <div className="portfolio">
            <div id='portfolioTitle' >
                <h1 >
                    Portfolio
                </h1>
                <div className="divider"></div>
                <p>
                    Here, you'll find a collection of my projects, including full-stack applications,<br/>
                    AWS implementations like durable databases, and small C projects.<br/>
                    These showcase my skills in web development, cloud services, and low-level programming.<br/>
                    Feel free to explore! 
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
                        A full-stack shopping list application with a React front-end and a Node.js back-end using SQLite.<br/>
                        It features user authentication with cookies and allows users to create, manage, and share lists with others<br/>
                        for a seamless shopping experience.<br/>
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
                        <img id="tesyImg" src="\src\assets\tesy-animal-list.PNG" /*width='700'*/></img>
                    </div>
                    <div className="projectText">
                        <p>
                        A proof-of-concept project for TESY employers and volunteers to manage information about rescued animals and their conditions.<br/>
                        The application includes role-based access control, ensuring users have specific permissions based on their roles.<br/>
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
                        A technical skill project for a job interview, running in a Docker container with both backend and frontend.<br/>
                        It utilizes open-source data on city bikes, providing insights and functionality for analyzing bike usage.
                             
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
                    A simple MySQL server with an automated backup system that takes database snapshots and restores<br/> 
                    the latest backup on an alternative machine or container.<br/>
                    Designed as the final project for my AWS Practitioner certification, it runs seamlessly in a Docker container.
                    </p>
                    <a href='https://github.com/sami-alt/AWS_team'>Click here for Github repository</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Portfolio