import { useState } from "react"

function Demo3() {
    const [matrxiSize, setMatrixSize] = useState(10);
    const [matrix, setMatrix] = useState<string[][]>([]);

    const createMatrix = () => {
        const mat: string[][] = []
        for (let i = 0; i < matrxiSize; i++) {
            mat[i] = []
            for (let j = 0; j < matrxiSize; j++) {
                mat[i][j] = '0'
            }
        }
        setMatrix(mat)
    }
    
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        createMatrix()
    }

    return (
        <div className="demo">
            <p>Game</p>

            <form onSubmit={handleSubmit}>
                <label>Map size</label>
                <select  value={matrxiSize} onChange={(e) => setMatrixSize(Number(e.target.value))}>
                    <option value="10">small</option>
                    <option value="25">medium</option>
                    <option value="50">large</option>
                </select>
                <input type="submit" value="Submit"></input>
            </form>

            <ul >
                {matrix.map((line, i) => <li key={i} style={{ listStyleType: 'none' }}>{line}</li>)}
            </ul>
        </div>
    )
}

export default Demo3