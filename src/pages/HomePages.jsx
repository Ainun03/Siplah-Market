import React, { Fragment,useEffect } from "react";

// assets
import ims from '../assets/images/pp.jpeg'

// partials
import NavbarPar from '../partials/Navbar';
import Footer from "../partials/Footer";

// icons
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {BiSolidUserCircle} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

function HomePage (){
    // useEffect(()=>{
    //     fetch ('http://localhost:8081/users')
    //     .then(res=>res.json())
    //     .then(data =>console.log(data))
    //     .catch(err => console.log(err))
    // },[])
    return(
        <Fragment>
           
            <NavbarPar/>
            <div className="pt-20">
                    <section className="1">
                        <div className="">
                            <img className="rounded-md w-full object-cover" src={ims} alt='mobil'/>
                        </div>
                        <div className="max-w-6xl relative mx-auto bg-white border-2 shadow-xl -mt-12 rounded-md p-4">
                            <div className="flex w-full">
                                <div className="border-r-2  border-gray-400 w-full p-4">
                                    <div className="flex items-center justify-center">
                                        <h1>staff</h1>
                                    </div>
                                </div>
                                <div className="border-r-2 border-gray-400 w-full p-4">
                                    <div className="flex items-center justify-center">
                                        <h1>staff</h1>
                                    </div>
                                </div>
                                <div className=" w-full p-4">
                                    <div className="flex items-center justify-center">
                                        <h1>staff</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="2 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 pt-8 ">
                            <div className="">
                                <img src={ims} alt='mobil'/>
                            </div>
                            <div className="md:pt-0 md:px-0 flex flex-col h-full justify-center  ">
                                <h1 className="font-bold text-4xl text-gray-500">We Provide Good Product and Healthy Meals</h1>
                                <div className="flex flex-col gap-3 pt-4 ">
                                    <div className="flex gap-6 ">
                                        <BsFillCheckCircleFill size={25} color="green"/>
                                        <p className="font-semibold text-sm text-gray-700">High quality beans</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <BsFillCheckCircleFill size={25} color="green"/>
                                        <p className="font-semibold text-sm text-gray-700">High quality beans</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <BsFillCheckCircleFill size={25} color="green"/>
                                        <p className="font-semibold text-sm text-gray-700">High quality beans</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <BsFillCheckCircleFill size={25} color="green"/>
                                        <p className="font-semibold text-sm text-gray-700">High quality beans</p>
                                    </div>
                                    <div className="flex gap-6">
                                        <BsFillCheckCircleFill size={25} color="green"/>
                                        <p className="font-semibold text-sm text-gray-700">High quality beans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="3 max-w-6xl mx-auto">
                        <div className="  pt-8 ">
                            <div className="md:pt-0 md:px-0 flex flex-col h-full items-center justify-center  ">
                                <h1 className="font-bold text-4xl text-gray-500">Here is People’s Favorite</h1>
                                <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                                
                                <div className="grid pt-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 justify-center lg:grid-cols-3 md:grid-cols-2 w-full gap-6">      
                                    {/* {
                                        
                                        products.length>0 ?
                                        products
                                        .map((items, idx)=>
                                        
                                            <CardProduct key={idx}  item={items}/>
                                        )
                                        :""
                                    } */}
                               </div>
                            </div>
                        </div>
                    </section>
                    <section className="4 max-w-6xl mx-auto py-4">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center w-full h-full gap-1">
                                            <BiSolidUserCircle size={50} color="gray"/>
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold">Lee</h1>
                                                <p className="text-gray-700 text-xs">Paiton</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h1>4.5</h1>
                                            <AiFillStar size={20} color="yellow"/>
                                        </div>
                                    </div>
                                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                                    </div>
                                </div>
                                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center w-full h-full gap-1">
                                            <BiSolidUserCircle size={50} color="gray"/>
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold">Jimin</h1>
                                                <p className="text-gray-700 text-xs">Kelor</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h1>4.5</h1>
                                            <AiFillStar size={20} color="yellow"/>
                                        </div>
                                    </div>
                                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                                    </div>
                                </div>
                                <div className="border border-gray-300 hover:border-red-300 rounded-md p-6 ">
                                    <div className="flex justify-between w-full">
                                        <div className="flex items-center w-full h-full gap-1">
                                            <BiSolidUserCircle size={50} color="gray"/>
                                            <div className="flex flex-col">
                                                <h1 className="font-semibold">Sunghee</h1>
                                                <p className="text-gray-700 text-xs">Tanjung</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <h1>4.5</h1>
                                            <AiFillStar size={20} color="yellow"/>
                                        </div>
                                    </div>
                                    <div className="pt-4 break-all whitespace-normal  text-gray-700 font-serif">
                                        <h1>" Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!"</h1>
                                    </div>
                                </div>
                            </div>
                    </section>
                <Footer/>
            </div>
        
        </Fragment>
    )
}
export default HomePage