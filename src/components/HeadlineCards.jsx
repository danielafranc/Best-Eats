import salad2 from  "./images/salad2.jpeg"
import salad from  "./images/salad.webp"
import dessert from  "./images/dessert.jpg"



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
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={salad2} alt="noodles" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26 </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={salad} alt="Quinoa Salad" />
            </div>

            {/* cards */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We also deliver Desserts </p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={dessert} alt="dessert" />
            </div>
        </div>
    );
};

export default HeadlineCards;