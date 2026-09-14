import { useState } from "react"
import { products } from "../../data/products"
import { nanoid } from "nanoid"

function Exo2() {

    const [articles, setArticles] = useState(products.map(p =>({
        ...p,
        key: nanoid()
    })))

    const rows = articles.map(p => <tr key={p.key}>
        <td>{p.nom}</td>
        <td>{p.description}</td>
        <td>{p.prix}</td>
        <td>{p.quantite}</td>
    </tr>)

    return <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>        
    </>
}

export default Exo2