import React, {useState, useEffect} from 'react';
import {classnames} from 'tailwindcss-classnames';
import  data  from "../data/data";
import useQuiosco from '../hooks/UseRestaurant';
import ModalJSX from './Modal';

const Food = () => {

    const [foods, setFoods] = useState(data);
    const {handleModal, modal, handleSetProduct, selectedProduct} = useQuiosco();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  
  const classes = classnames({
    'hidden': isSmallScreen,
    'bg-orange-500 text-white rounded-full p-1 px-3 m-2 ': !isSmallScreen,
  });

    //Filter Type burgers/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category == category;
            })
        )
    }

    //Filter by Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
               return item.price < price;
            }
        ))}


    return (
        <div className='max-w-[1640] mx-auto px-4 py-12 overscroll-x-none'>

           <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1> 
            
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button 
                        className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                        onClick={() => setFoods(data) } >All</button>
                        
                        <button 
                        className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                        onClick={() => filterType('burger')}
                        >Burgers</button>

                        <button
                        className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                        onClick={() => filterType('pizza')}
                        >Pizza</button>

                        <button 
                        className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                        onClick={() => filterType('salad')}
                        >Salads</button>

                        <button 
                        className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                        onClick={() => filterType('chicken')}
                        
                        >Chicken</button>
                        

                    </div> 
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter price  </p>
                    <div className="flex justify-between max-w-[390px] w-full">
                    <button 
                    className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                    onClick={() => filterPrice('15')}
                    >Lowest</button>

                    <button 
                    className='m-1 border-slate-100 text-orange-600 font-bold border-4 rounded-full hover:shadow-lg hover:text-orange-600'
                    onClick={() => filterPrice(' 20')}
                    >Highest</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2  lg:grid-cols-4 gap-6 pt-4 '> 
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 overflow-hidden flex-auto'>
                        <img src={item.image} alt={item.name} 
                        className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className='flex justify-between items-center px-2 py-4 '>
                           <div className='inline-flex'> 
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className={classes}>${item.price}</span>
                            </p>
                            </div>
                            <button 
                            className='text-orange-500 text-center font-bold px-3 rounded-full border-4 hover:border-4 hover:border-orange-500 overflow-hidden'
                            onClick={() => {handleSetProduct(item); handleModal();}}>Add</button>
                        </div>
                    </div>
                ))}
                {selectedProduct && (
                 <ModalJSX  item={selectedProduct} open={modal} handleClose={handleModal}/>
                )}
            </div>

        </div>
    );
};

export default Food;

