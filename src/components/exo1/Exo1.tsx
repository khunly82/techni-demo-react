import classNames from "classnames"
import { useState } from "react"

function Exo1() {

    const [count, setCount] = useState(5)

    function increase(v: number) {
        setCount(old => old + v)
    }

    return <>
        <div className="card">
            <div className="card-header">
                <h4>Exercice 1 </h4>
            </div>
            <div className="card-body">
                <p className={classNames({
                    'text-danger': count < 3,
                    'text-warning': count >= 3 && count < 5,
                    'text-info': count >= 5 && count < 8,
                    'text-success': count >= 8
                }, 'fw-bold')}>{count}</p>
            </div>
            <div className="card-footer d-flex gap-3">
                <button onClick={() => increase(-1)} 
                        className="btn btn-secondary"
                        disabled={count <= 0}><i className="bi bi-dash"></i></button>
                <button onClick={() => increase(1)} 
                        className="btn btn-secondary"
                        disabled={count >= 10}><i className="bi bi-plus"></i></button>
            </div>
        </div>
    </>
}

export default Exo1