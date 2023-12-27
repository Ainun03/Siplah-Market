import React, { Fragment } from "react";
import {AiOutlineCheck} from 'react-icons/ai'
import ims from '../../assets/images/img_car.png'
import {useNavigate} from 'react-router-dom'

function ListProduct({item}){
    const navigate =useNavigate()
    return(
        <Fragment>
             {/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 bg-blue-200"> */}
                <div className="">
                    <div className="drop-shadow-2xl shadow-xl w-40 rounded-3xl transition transition-shadow hover:-translate-y-1 hover:scale-110 duration-1000 ease-in-out delay-150" >
                        <div className="flex flex-col items-center justify-center">
                            <img className="h-[100px] w-screen object-cover rounded-full" src={item ? item.image :ims} alt='mobil'/>
                            <h1 className="pt-4 font-extrabold uppercase font-serif text-xl">{item ? item.productName:""}</h1>
                            <h1 className="pt-2 font-semibold capitalize font-serif text-sm">{item ? item.category:""}</h1>
                        </div>
                        
                        <div className="pt-16 pb-4 flex flex-col w-full items-center">
                            <div className="px-4 ">
                                <div className="border cursor-pointer font-semibold p-2 flex justify-center border-brown-700 text-brown-700 ">
                                    <button onClick={()=>navigate(`/produk/${item._id}`)}>LOAD MORE</button>
                                </div>
                            </div>
                            <div className="pt-2">
                                <h1 className="font-bold font-mono text-brown-700">
                                    IDR {new Intl.NumberFormat('id-ID',
                                            { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
                                        ).format(item.price)
                                    }
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
             {/* </div> */}

        </Fragment>
    )
}
export default ListProduct