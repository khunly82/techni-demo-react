import { useState } from "react"
import { products } from "../../data/products"

function Exo2() {

    const [articles, setArticles] = useState(products)

    const rows = articles.map(p => <tr key={p.id}>
        <td>{p.id}</td>
        <td><img height={50} src={p.image} /></td>
        <td>{p.name}</td>
        <td>{p.description}</td>
        <td>{p.category}</td>
    </tr>)

    return <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Categorie</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>        
    </>
}

export default Exo2