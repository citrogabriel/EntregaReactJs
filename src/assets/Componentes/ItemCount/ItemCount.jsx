import { useState } from "react";
import Swal from "sweetalert2";


const ItemCount = ({stock, inicial}) => {
    const [qty, setQty] = useState (inicial);
const handleClickMenos = () => {
    if (qty === 1)  
        Swal.fire({
            title: 'No puedes seleccionar 0!',
            text: '',
            icon: 'error',
            confirmButtonText: 'OK'
          });
    setQty (qty - 1)
};

const handleClickMas = () => {
    if (qty === stock)
        Swal.fire({
            title: 'No hay mas stock para agregar!',
            text: '',
            icon: 'error',
            confirmButtonText: 'OK'
          });
    setQty (qty + 1)
};

    return (
        <>
        <div>
            <button onClick={handleClickMenos}>-</button>
            <span>{qty}</span>
            <button onClick={handleClickMas}>+</button>
        </div>
        </>
    );
};

export default ItemCount;

