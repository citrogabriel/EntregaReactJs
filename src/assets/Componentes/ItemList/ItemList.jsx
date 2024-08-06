import  Item from "../Item/Items"


const ItemList = ({ products }) => {
return (
    <>
    <div className={`$ d-flex- gap`}>
        {products.map((product) => {
            return <Item key={product.id} product={product}/>;
        }
        )}
    </div>
    </>
);
};

export default ItemList;


