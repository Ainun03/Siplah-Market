import React, { Fragment } from "react";
import {AiOutlineCheck} from 'react-icons/ai'
import ims from '../../assets/images/img_car.png'

function ListProduct({item}){
    return(
        <Fragment>
             {/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 bg-blue-200"> */}
                <div className="">
                    <div className="drop-shadow-2xl shadow-xl w-40 rounded-3xl cursor-pointer transition transition-shadow hover:-translate-y-1 hover:scale-110 duration-1000 ease-in-out delay-150" >
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-24 rounded-full" src={item ? item.strDrinkThumb :ims} alt='mobil'/>
                            <h1 className="pt-4 font-extrabold uppercase font-serif text-xl">{item ? item.strDrink:""}</h1>
                        </div>
                        <div className="pt-20 pb-4 flex flex-col w-full items-center">
                            <div className="">
                                <h1 className="font-bold font-mono text-brown-700">IDR 20.000</h1>
                            </div>
                        </div>
                    </div>
                </div>
             {/* </div> */}

        </Fragment>
    )
}
export default ListProduct