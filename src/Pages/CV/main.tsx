
const path = 'src/assets/Sami Räihä CV English.pdf'
import '../../content.scss'

function Cv() {

    return (
        <>
            <div className="content">
                <embed src={`${path}#toolbar=0&scrollbar=0&zoom=80`} height='930' width='45%' />
            </div>
            <div className='content'>
                <a href={path} download='SamiRaihaCV'>Download CV</a>
            </div>
        </>
    )

}


export default Cv