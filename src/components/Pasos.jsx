import { Link, useLocation} from "react-router-dom";


const Pasos = (props) => {
    const pasos = [
        {paso: 1, nombre: 'Menu', url: '/'},
        {paso: 2, nombre: 'Resume', url: '/resume'},
        {paso: 3, nombre: 'Total', url: '/totalpage'},
    ];

    let location = useLocation();

    const calcularProceso = () => {
        let valor;

        if( location.pathname === '/'){
            valor = 2;
        }else if( location.pathname === '/resume'){
            valor = 50;
        }else{
            valor = 100;
        }
        return valor;
    }    

    return (
        <>
            <div className="flex justify-between mb-5">
                {pasos.map((paso) => (
                    <Link 
                    to={paso.url}
                    className="text-2xl font-bold flex items-center m-auto justify-center p-2"
                    key={paso.paso}
                    >{paso.nombre}</Link>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div 
                className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                style={{width: `${calcularProceso()}% `}}
                > 
                </div>
            </div>
        </>
    );
};

export default Pasos; 