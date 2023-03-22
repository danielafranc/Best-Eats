import burger from  "./images/burger.jpeg"

const Hero = () => {
    return (
        <div className='max-w-[1640] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
            {/* overlay */}
                 {/* acomodar las letas para que queden de un lado  */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold '>The <span className='text-orange-500'> Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold '>Foods <span className='text-orange-500'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={burger} alt="burger" />
            </div>
            
        </div>
    );
};

export default Hero;