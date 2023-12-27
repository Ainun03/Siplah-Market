import React, { Fragment } from "react";

import { IoChevronBackCircle } from 'react-icons/io5';
import { BsFillChatDotsFill,BsTelephone } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import { FaRegTrashCan } from "react-icons/fa6";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// componenst
import { EditDialog } from "../components/editPost";
import { DeleteProps } from "../components/deleteProps";

// partials
import { DialogWithImage } from "../partials/bookDetail";
function ProductDetail(){
    const navigate =useNavigate()
    const { detail } = useSelector(
        (store) => store.product
      );
    const { user} = useSelector(
        (store) => store.auth
    );
    return(
        <Fragment>
            <div className="relative">
                <div className="max-w-6xl  mx-auto">
                    <div className='bg-transparent md:py-7 absolute z-10'>
                        <IoChevronBackCircle className='m-3 cursor-pointer' size={30} color={'#E2D4F0'} onClick={() => navigate('/')} />
                    </div>
                <div className='container mx-auto max-w-4xl pt-0 pb-20 md:py-7 relative'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-6'>
                        {/* Carousel */}
                        <div className='col-span-2 text-center '
                        >
                            {/* {sellerDetailID.map((item)=>{ */}
                                <img className="rounded-2xl h-[400px] shadow-md w-screen  object-cover" src={'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt="pond"/>
                            {/* })} */}
                        </div>
                        {/* End Carousel */}
                        <div className='-mt-14 md:flex  md:flex-col md:items-center md:justify-center md:mt-0 md:static relative container mx-auto max-w-sm md:max-w-none md:mx-0' 
                        >
                                <div className='rounded-xl w-full mb-6 shadow-main shadow-slate-700 shadow-md bg-white'>
                                    <div className='shadow-main h-46  rounded-2xl p-4'>
                                        {/* <div className="flex justify-between">    
                                            <div className=" flex items-center justify-center">
                                                <strong className='font-semibold uppercase text-2xl'>Nama</strong>
                                            </div>
                                            <div>
                                                <img className='w-10 h-10 rounded-md' src="/assets/images/nyet.jpg" alt='profile' />
                                            </div>
                                        </div> */}
                                        <div className='info-profile pt-2'>
                                            <strong className='text-sm font-medium'>{detail ? detail.name : 'Anonymous'}</strong>
                                            {/* <StarRating bintang={detail ? detail.avgRating:""}/> */}
                                            <div className="flex w-full h-full items-center justify-between">    
                                                <div className="flex ">
                                                    <div>
                                                        {/* <Link to={sellerDetailID ? sellerDetailID.url : "www.google.com"} target="_blank">
                                                        </Link> */}
                                                        <BiMap size={20} className="text-secondary"/>
                                                    </div>
                                                    {/* <div className="">
                                                    </div> */}
                                                    <div className="flex items-center">
                                                        <p className='text-xs ml-2 capitalize text-neutralGray'>{detail ? detail.areaName:""} </p>
                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <div>
                                                
                                                        <BsTelephone size={15} className="text-secondary"/>
                                                        
                                                    </div>
                                                    <div>
                                                        <p className='text-xs ml-3 text-neutralGray'>(021) 71790991</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <p className='text-xs text-neutralGray'>{productData ? (productData.users.city).charAt(0).toUpperCase() + (productData.users.city).slice(1).toLowerCase() : 'Anonymous'}</p> */}
                                        </div>
                                    </div>
                                </div>
                              {/* )} */}
                            <div className='btn pt-4 w-full hidden md:block'>
                            {
                                user.role ==="admin"?
                                <div className=' flex gap-3'>
                                    {/* <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                        <FaRegTrashCan  size={20}/>
                                    </div>   */}
                                        <DeleteProps/>
                                    <div className="w-full">
                                        <EditDialog/>
                                        {/* <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Edit
                                        </button> */}
                                    </div>            
                                </div>
                                :
                                <div className=' flex gap-3'>
                                    <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>  
                                    <div className="w-full">
                                        <button  
                                            onClick={(e)=>{e.preventDefault();
                                                // window.location.href='https://api.whatsapp.com/send?text=Hello%20World!&phone=6285778560801'
                                                window.location.href='https://api.whatsapp.com/send?phone=6285778560801'
                                            }} 
                                        className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Hubungi Penjual
                                        </button>
                                    </div>            
                                </div>
                            }
                            </div>
                            
                            
                        </div>
                            {/* <div className='col-span-2 md:col-span-4 container mx-auto max-w-sm md:max-w-none md:mx-0 md:mt-0'
                            >
                                <Review/>
                            </div> */}
                                        
                                
                    </div>
                    <div className="">
                        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 py-3 gap-4">
                            <DialogWithImage/>
                            <DialogWithImage/>
                            <DialogWithImage/>
                        </div>
                    </div>
                        {/* button mobile */}
                        <div className='md:hidden fixed  w-full bottom-5 px-5'>   
                            {
                                user.role ==="admin"?
                                <div className=' flex gap-3'>
                                    {/* <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                        <FaRegTrashCan  size={20}/>
                                    </div>   */}
                                     <DeleteProps/>
                                    <div className="w-full">
                                    <EditDialog/>
                                        {/* <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] font-semibold text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Edit
                                        </button> */}
                                    </div>            
                                </div>
                                :
                                <div className=' flex gap-3'>
                                    <div className=" cursor-pointer rounded-xl text-white bg-[#39A2DB] hover:bg-[#A2DBFA]  p-2 "> 
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>  
                                    <div className="w-full">
                                        <button   className='bg-[#39A2DB] hover:bg-[#A2DBFA] text-white w-full rounded-2xl py-[10px] text-sm transition ease-in-out duration-300 disabled:opacity-40'>
                                            Hubungi Penjual
                                        </button>
                                    </div>            
                                </div>
                            }
                            
                            
                        </div>
                    </div>
                   
                </div>
            </div>
            
        </Fragment>
    )
}
export default ProductDetail