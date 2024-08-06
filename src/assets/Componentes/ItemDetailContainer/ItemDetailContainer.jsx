import { useEffect, useState } from "react";
import { Spinner } from ".Spinner.jsx";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import getProductById from "../../Componentes/Utils/fechData.jsx"




const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = usesState(true);
    const {id} = useParams ();

    useEffect(() => {
        setLoading(true);
        getProductById(id)
        .then((res)=> {
            setProduct(res);
        })
        .catch((err) => {
        }
        )
        .finaly(() => {
            setLoading(false)
        });
    },[id]);

    return (
        <main>
        <div>ItemDetailContainer</div>
        {loading
            ? <Spinner />
            : <ItemDetail {...product}/>
        }
        </main>
)};

export default ItemDetailContainer;


