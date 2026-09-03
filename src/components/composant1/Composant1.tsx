import classNames from "classnames";
import { useState } from "react"
import './Composant1.css'

interface Composant1Props {
    nom: string;
    nom2: string
}

function Composant1(props: Composant1Props) {
    const [nom, setNom] = useState(props.nom)

    function changeName() {
        setNom(props.nom2)
    }

    function ouiOuNon() {
        if(nom === props.nom2) {
            return <p>Oui</p>
        }
        else {
            return <p>Non</p>
        }
    }

    return <>
        <p className={classNames({ red: nom === 'Mike' })}>Hello {nom}</p>
        {/* affichage conditionnel */}
        { nom == props.nom2 && <p>La condition est vraie</p> }
        { ouiOuNon() }
        <button onClick={changeName}>Changer de nom</button>
    </> 
}

export default Composant1