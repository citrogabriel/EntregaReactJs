import cargando from "./Spinner";



const Spinner = () => {
    return (
       <div>
        <img src={cargando} alt="loading" />
        <p>Cargando....</p>
       </div>
    );
};

export default Spinner;
