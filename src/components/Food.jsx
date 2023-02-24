import React, {useState} from 'react';
import { data } from "../data/data";
import ModalJSX from './Modal';

const Food = () => {
    // console.log(data);

    const [foods, setFoods] = useState(data);
    const [showComp, setShowComp] = useState(false);
 

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
                return item.price === price;
            })
        )
    }
 
    // Function to show Toast

    const handleToast = () => {
        setShowComp(true);
    }

    const {handleOpen} = ModalJSX;


    return (
        <div className='max-w-[1640] mx-auto px-4 py-12'>
           <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1> 
            
            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button 
                        className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                        onClick={() => setFoods(data) } >All</button>
                        
                        <button 
                        className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                        onClick={() => filterType('burger')}
                        >Burgers</button>

                        <button
                        className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                        onClick={() => filterType('pizza')}
                        >Pizza</button>

                        <button 
                        className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                        onClick={() => filterType('salad')}
                        >Salads</button>

                        <button 
                        className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                        onClick={() => filterType('chicken')}
                        
                        >Chicken</button>
                        

                    </div> 
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter price  </p>
                    <div className="flex justify-between max-w-[390px] w-full">
                    <button 
                    className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                    onClick={() => filterPrice('$')}
                    >$</button>

                    <button 
                    className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                    onClick={() => filterPrice('$$')}
                    >$$</button>

                    <button 
                    className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                    onClick={() => filterPrice('$$$')}
                    >$$$</button>

                    <button 
                    className='m-1 border-orange-600 text-orang hover:bg-orange-600 hover:text-white'
                    onClick={() => filterPrice('$$$$')}
                    >$$$$</button>
                    </div>
                </div>
            </div>

            {/* Display foods */}
            <div className='grid grid-cols-2  lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 '>
                        <img src={item.image} alt={item.name} 
                        className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className='flex justify-between items-center px-2 py-4 '>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white rounded-full p-1'>{item.price}</span>
                            </p>
                            {/* Import button from ModalJSX */}
                           <ModalJSX name={item.name}  desc={item.desc} price={item.price} item={item} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Food;