import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Link } from 'react-router-dom';


const Navbar = () => {
const [nav, setNav] = useState(false);

  return (
    <div className='mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div>
          <img src="" alt="" />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'>Eats</span>
        </h1>

      </div>

      {/* Cart button */}
      <button className='bg-black text-white py-2 rounded-full'>
        <Link to="/resume"> <BsFillCartFill size={20} className='inline-flex mr-2' />Cart </Link>
      </button>      
    </div>
  );
};

export default Navbar;
