const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resume', url: '/resume'},
    {paso: 3, nombre: 'Datos y Total', url: '/totalpage'},

]

const Pasos = () => {
    return (
        <>
            <div className="flex justify-between mb-5">
                {pasos.map((paso) => (
                    <button 
                    className="text-2xl font-bold"
                    key={paso.paso}
                    >{paso.nombre}</button>
                ))}
            </div>
        </>
    );
};

export default Pasos; 