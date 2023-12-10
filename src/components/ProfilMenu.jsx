import React from 'react';

import { useNavigate } from 'react-router-dom';

// Icons
import { FiLogIn, FiUser,FiShoppingCart } from "react-icons/fi";

// Redux
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../slices/authSlice';

function ProfileMenu({ hidden }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`${hidden} bg-white absolute z-[999] rounded-2xl shadow-main px-5 py-3  w-56 transition ease-in-out duration-300`}>
      <div onClick={() => {
        hidden ? navigate('/buyer-profil') : navigate('/auth-page/login-penjual');
      }} className='flex items-center py-3 gap-2 cursor-pointer'>
        <FiUser size={20} />
        <span>Profil</span>
      </div>
      <div onClick={() => {
        hidden ? navigate('/buyer-profil') : navigate('/auth-page/login-penjual');
      }} className='flex items-center py-3 gap-2 cursor-pointer'>
        <FiShoppingCart size={20} />
        <span>Your Product</span>
      </div>
      {hidden ? (
        <button
            onClick={() => {  
              navigate('/auth/login');
              dispatch(logout());
              // dispatch(logoutBuyer());
            }}
        >
            <div className='flex border-t border-gray-200 items-center py-3 gap-2 cursor-pointer'>
                <FiLogIn size={20} />
                    <span>Keluar</span>
            </div>
        </button>
      ) : (<div onClick={() => {
        navigate('/auth-page/login-penjual');
      }} className='flex border-t border-gray-200 items-center py-3 gap-2 cursor-pointer'>
        <FiLogIn size={20} />
        <span>Masuk</span>
      </div>)}
      
    </div>
  );
}

export default ProfileMenu;