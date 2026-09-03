import classNames from "classnames"
import { useEffect, useState } from "react"

function Composant2() {

    const [persons, setPersons] = useState([
        { id: 1, nom: 'LY', prenom: 'Khun', estDev: true },
        { id: 2, nom: 'Person', prenom: 'Mike', estDev: true },
        { id: 3, nom: 'Herssens', prenom: 'Caroline', estDev: false },
    ])

    useEffect(() => {
        setTimeout(() => {
            setPersons([
                { id: 1, nom: 'LY', prenom: 'Khun', estDev: true },
                { id: 4, nom: 'Morre', prenom: 'Thierry', estDev: true },
                { id: 2, nom: 'Person', prenom: 'Mike', estDev: true },
                { id: 3, nom: 'Herssens', prenom: 'Caroline', estDev: false },
            ])
        }, 5000)
    }, [])

    return <>
        <ul className="list-group">
            { persons.map(p => <li key={p.id} className={classNames({
                'text-danger': p.estDev,
                'list-group-item': true
            })}>
                {p.nom} {p.prenom}
            </li>) }
        </ul>
    </>
}

export default Composant2  