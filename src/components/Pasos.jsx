import { Link } from "react-router-dom";
import useQuiosco from "../hooks/UseRestaurant";

const pasos = [
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resume', url: '/resume'},
    {paso: 3, nombre: 'Total', url: '/totalpage'},
];



const Pasos = (props) => {

    const { handleChangePaso, paso } = useQuiosco();
    console.log(paso);

    return (
        <>
            <div className="flex justify-between mb-5">
                {pasos.map((paso) => (
                    <Link 
                    to={paso.url}
                    onClick={() => {
                        handleChangePaso(paso.paso)
                    }}
                    className="text-2xl font-bold flex items-center m-auto justify-center p-2"
                    key={paso.paso}
                    >{paso.nombre}</Link>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white">

                </div>
            </div>
        </>
    );
};

export default Pasos; 