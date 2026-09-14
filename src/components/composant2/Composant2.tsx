import classNames from "classnames"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"

function Composant2() {

    const [persons, setPersons] = useState([
        { id: 1, nom: 'LY', prenom: 'Khun', estDev: true, price: 50 },
        { id: 2, nom: 'Person', prenom: 'Mike', estDev: true, price: 10 },
        { id: 3, nom: 'Herssens', prenom: 'Caroline', estDev: false, price: 20 },
    ].map(p => ({...p, key: nanoid()})))

    useEffect(() => {
        setTimeout(() => {
            setPersons([
                ...persons,
                { id: 4, 'nom': 'Morre', prenom: 'Thierry', estDev: true, price: 50, key: nanoid() }
            ])
        }, 5000)
    }, [])


    function total() {
        // let c = 0;
        // for (const p of persons) {
        //     c += p.price
        // }
        // return c
        return persons.reduce((prev, current) => current.price + prev,0)
    }

    return <>
        <p>total: {total()}</p>
        <ul className="list-group">
            { persons.map((p) => <li key={p.key} className={classNames({
                'bg-danger text-white': !p.estDev
            }, 'list-group-item')}>
                {p.nom} {p.prenom}
            </li>) }
        </ul>
        <p>total: {total()}</p>
    </>
}

export default Composant2  