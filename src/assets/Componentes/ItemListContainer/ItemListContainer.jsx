import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { getProducts } from "../Utils/fechData.js"
import ItemList from "../../Componentes/ItemList/ItemList.jsx";
import Spinner from "../Spinner/Spinner.jsx";



const ItemListContainer = ({ title, otroTitle }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      getProducts(categoryId) 
        .then((res) => {
          console.log("Se resolvio la promesa");
          setProducts(res);
          console.log("Se actualizaron los productos");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("finalizo la promesa");
          setLoading(false);
        });
  
  
        return () => {
          console.log("Se desmonto el componente");
        }
  
    }, [categoryId]);
   
    let titleToShow;
    if (title != undefined) {
      titleToShow = title;
    } else {
      titleToShow = otroTitle;
    }
    
    return (
          <main>
            <div className="">
              <div>{titleToShow}</div>
              { loading 
                ? <Spinner /> 
                : <ItemList products={products} />}
            </div>
          </main>
    );
  };
  
  export default ItemListContainer;
  
