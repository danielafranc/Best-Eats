import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* cards */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26 </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26 </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/5203690/pexels-photo-5203690.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We also deliver Desserts </p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2161643/pexels-photo-2161643.jpeg" alt="/" />
            </div>
        </div>
    );
};

export default HeadlineCards;