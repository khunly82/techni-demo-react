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
                    'fw-bold': true,
                    'text-danger': count < 3,
                    'text-warning': count >= 3 && count < 5,
                    'text-info': count >= 5 && count < 8,
                    'text-success': count >= 8
                })}>{count}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => increase(-1)} 
                        className="btn btn-info me-3"
                        disabled={count <= 0}>-</button>
                <button onClick={() => increase(1)} 
                        className="btn btn-dark"
                        disabled={count >= 10}>+</button>
            </div>
        </div>
        {/* <div></div>
        <div className="row">
            <div className="col">

            </div>
            <div className="col">

            </div>
        </div> */}
    </>
}

export default Exo1