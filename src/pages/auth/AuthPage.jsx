import React, { Fragment } from "react";

import { useLocation,Outlet } from "react-router";
import { Link } from "react-router-dom";

import ims from '../../assets/images/pp.jpeg'
import Email from '../../settings/profil.json'

// icons
const AuthPage = () =>{
    const location = useLocation();
    // const email = Email.data.email
    // console.log(email)

    return(
        <Fragment>
            <div className="">
                <div className="flex gap-2 ">
                    <div className="fixed w-full h-full md:left-0 md:w-1/2">
                        <img className="w-full h-full object-cover" src={ims} alt="tumb"/>
                    </div>
                    <div className="w-full z-[30] flex justify-center items-center p-8 md:p-0 h-full md:justify-end">
                        <div className="w-3/4 md:w-1/2 h-full overflow-y-scroll hide-scroll-bar" >
                            <Outlet/>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-[#A2DBFA] h-screen shadow-md from-[#A2DBFA] overflow-hidden">

                    <div className="grid  grid-cols-2 h-full justify-items-center items-center  ">
                        <div className="flex-col md:w-full"
                        >
                            <img className="w-full object-cover" src={ims} alt="tumb"/>
                        </div>
                        <div className="flex-col md:w-9/12 font-body">
                            <div className=" flex flex-row gap-4 py-2  items-center justify-center">
                                <Link to="/login">
                                    <div className={"mt-2"+
                                        (location.pathname === "/login" ||
                                        location.pathname === "/login/"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >
                                    </div>
                                </Link>
                                <Link to="/auth-page/login-penjual">
                                    <div className={""+
                                        (location.pathname === "/auth-page/login-penjual" ||
                                        location.pathname === "/auth-page/login-penjual/"
                                            ? "active-state text-[#0172AF]"
                                            : "nonActive-state")}
                                    >      
                                    </div>
                                </Link>
                                
                            </div>
                            <div 
                                >
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}
export default AuthPage