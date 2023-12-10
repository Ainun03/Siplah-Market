import React, { Fragment } from "react";

// icon
import{AiOutlineInstagram,AiOutlineTwitter,AiOutlineCopyrightCircle,AiFillYoutube} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

function Footer(){
    return(
        <Fragment>
            <div className="pt-4 bg-gray-300">
                <div className="mx-8 grid grid-cols-2 py-4 md:grid-cols-2">
                    <div className="py-2"> 
                        <div className=" flex py-2">
                            <AiOutlineCopyrightCircle size={20} className="text-gray-500 "/>
                            <p className="text-gray-500 text-sm">Copyright 2023 Laros<span className="underline">GunaKarya</span>. Terms & Privacy</p>
                        </div>
                    </div>
                    <div className="py-2"> 
                        {/* <h1 className='font-semibold text-primary text-2xl' >Fish<span className="text-black underline decoration-primary">Venture</span>.</h1> */}
                        <div className="flex justify-end flex-row  ">
                            <div className=" grid grid-cols-5   px-1 md:grid-cols-5 gap-2">
                                <div className="border-x-4 border-y-4 border-white bg-white flex justify-center items-center bg-white rounded-full">
                                    <AiOutlineInstagram size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-0 border-white bg-white flex justify-center items-center  rounded-full">
                                    <FaFacebookF size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <AiFillYoutube size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <AiOutlineTwitter size={20}/>
                                </div>
                                <div className=" border-x-4 border-y-4  shadow-2xl drop-shadow-2xl border-white bg-white flex justify-center items-center  rounded-full">
                                    <BsWhatsapp size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;