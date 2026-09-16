import { createContext, type SetStateAction } from "react";
import { type Product } from "../data/products";

type ProductsKey = (Product&{key:string})[]

const CartContext = createContext<{
    cart: ProductsKey,
    setCart: React.Dispatch<SetStateAction<ProductsKey>>
}>({ cart: [{ key: '3', nom: 'test', description: 'test',prix: 42, quantite:7 }], setCart: () => {}})


export default CartContext
