import Demo1 from "./Demo1/main"
import Demo2 from "./Demo2/main"
// import Demo3 from "./Demo3/main"

function Demos() {
    return (
        <div className="demos">
            <div >
                <h3 style={{marginLeft: '25%'}}>Small widgets to demonstrate my skills in web develoment</h3>
                <div className="divider"></div>
                <p>
                    Here area small widgets that you can use to locate bus in Turku<br/>
                    by line and see timetable of busses on chosen stops.<br/>
                    Other project is simple weather app that shows weather for<br/>
                    next five days anywhere around the world.<br/>
                    Both of these project use open APIs and data fetching is done with JS<br/>
                    by the browser so there is no backend for these widgets.<br/>
                    More projects are coming soon.
                </p>
            </div>
            <Demo1 />
            <Demo2/>
            {/* <Demo3/> */}
        </div>
    )
}

export default Demos