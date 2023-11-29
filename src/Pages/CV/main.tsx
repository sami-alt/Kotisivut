
const path = 'src/assets/Sami Räihä CV English.pdf'
import './cv.scss'

function Cv() {

    return (
        <>
            <div className="CV">
                <embed src={`${path}#toolbar=0&scrollbar=0&zoom=80`} height='930' width='33%' />
            </div>
        </>
    )
    
}
//<iframe src={`${path}#toolbar=0&zoom=83&scrollbar=0`} width="33%" height="950" />

export default Cv