import React, { Fragment } from "react";
import {AiOutlineCheck} from 'react-icons/ai'
import ims from '../../assets/images/img_car.png'

function Test({item}){
    return(
        <Fragment>
             {/* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 bg-blue-200"> */}
                <div className="">
                    <div className="border border-black bg-green-100 rounded-md p-6" >
                        <div className="flex flex-col items-center justify-center">
                            <img className="w-24 rounded-full" src={item ? item.image :ims} alt='mobil'/>
                            <h1 className="pt-4 font-semibold">{item ? item.title:""}</h1>
                        </div>
                        <div className="flex flex-col items-start mx-12   pt-5 gap-5">
                            <div className="flex gap-4 justify-center items-center">
                                <AiOutlineCheck size={17} color="green"/>
                                <p>{item?item.date:""}</p>
                            </div>
                            {/* <div className="flex gap-4 justify-center items-center">
                                <AiOutlineCheck size={17} color="green"/>
                                <p>{item?item.strIngredient2:""}</p>
                            </div>
                            <div className="flex gap-4 justify-center items-center">
                                <AiOutlineCheck size={17} color="green"/>
                                <p>{item?item.strIngredient3:""}</p>
                            </div> */}
                        </div>
                        <div className="pt-20 flex flex-col w-full items-center">
                            <div className="">
                                <h1>IDR 20000</h1>
                            </div>
                            <button className="p-4 bg-blue-200 border rounded-xl">
                                    ordernow
                            </button>
                        </div>
                    </div>
                </div>
             {/* </div> */}

        </Fragment>
    )
}
export default Test