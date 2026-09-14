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


    return <>
        <input type="number"
               defaultValue={nb1?.toString()}
               onChange={e => setNb1(e.target.valueAsNumber)}
        />
        <select defaultValue={operator}
                onChange={e => setOperator(e.target.value as '+'|'-'|'*'|'/'|'')}>
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number"
               defaultValue={nb2?.toString()}
               onChange={e => setNb2(e.target.valueAsNumber)}
        />
        <span> = {result?.toFixed(10)}</span>
    </>
}

export default Exo4