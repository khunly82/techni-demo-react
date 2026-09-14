import { useMemo, useState } from "react"

function Exo4() {
    const [nb1, setNb1] = useState<number|null>(null)
    const [nb2, setNb2] = useState<number|null>(null)
    const [operator, setOperator] = useState<'+'|'-'|'*'|'/'|''>('')
    
    const result = useMemo(
        () => isValid() ? eval(`${nb1}${operator}${nb2}`): null, 
        [nb1, nb2, operator]
    )
    
    function isValid() {
        return !(
            nb1 === null 
            || nb2 === null 
            || !operator 
            || (nb2 === 0 && operator === '/')
        )
    }


    return <div className="d-flex gap-2">
        <input className="form-control" type="number"
               defaultValue={nb1?.toString()}
               onChange={e => setNb1(e.target.valueAsNumber)}
        />
        <select className="form-control" defaultValue={operator}
                onChange={e => setOperator(e.target.value as '+'|'-'|'*'|'/'|'')}>
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input className="form-control" type="number"
               defaultValue={nb2?.toString()}
               onChange={e => setNb2(e.target.valueAsNumber)}
        />
        <span>=</span>
        <input className="form-control"
               disabled type="text" 
               defaultValue={result?.toFixed(2)} />
    </div>
}

export default Exo4