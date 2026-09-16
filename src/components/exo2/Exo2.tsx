import { use, useMemo } from "react"
import { type Product } from "../../data/products"
import CartContext from "../../context/cartContext";

function Exo2() {

    const { cart, setCart } = use(CartContext)

    function increase(p: Product&{key:string}, quantity: number) {
        if(p.quantite === 0 && quantity < 0) return;
        setCart(as => as.map(
            a => a === p ? {...a, quantite: p.quantite + quantity} : a)
        )
    }

    const rows = cart.map(p => <tr key={p.key}>
        <td>{p.nom}</td>
        <td>{p.description}</td>
        <td>{p.prix}</td>
        <td>{p.quantite}</td>
        <td className="d-flex gap-2">
            <button onClick={() => increase(p, -1)} className="btn btn-dark btn-sm"><i className="bi bi-dash"></i></button>
            <button onClick={() => increase(p, 1)} className="btn btn-dark btn-sm"><i className="bi bi-plus"></i></button>
        </td>
    </tr>)

    const nbArticles = useMemo(
        () => cart.reduce((prev, c) => prev + c.quantite, 0),
        [cart]
    )
    const total = useMemo(() => {
        return cart.reduce(
            (prev, current) => prev + current.quantite * current.prix, 0
        ) * (nbArticles >= 10 ? 0.95 : 1)
        // let sum = 0
        // for(let curr of articles) {
        //     sum += curr.prix * curr.quantite
        // }
        // return sum
    }, /* on ne recalcule que qunad les articles sont modifiés */ [cart])
    // dans owl3 c'est l'equivalent de computed

    return <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
            { nbArticles > 0 &&
            <tfoot>
                <tr>
                    <th>Quantité: {nbArticles}</th>
                    <th>Total: {total.toFixed(2)}</th>
                </tr>
            </tfoot>
            }
        </table>        
    </>
}

export default Exo2
