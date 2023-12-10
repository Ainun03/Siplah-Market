import React, { Fragment,useState } from "react";

import ProfileMenu from "../components/ProfilMenu";
// react-dom
import { useMatch, useResolvedPath,Link} from 'react-router-dom';
import { useSelector} from "react-redux";
// icons
import {FaUserAlt} from 'react-icons/fa'

export default function NavbarPar(){
    const { isAuthenticated} = useSelector(
        (store) => store.auth
      );
    const [profileMenu, setProfileMenu] = useState(true);
    const profileMenuClick = () => {
    setProfileMenu(!profileMenu);
    };

    return(
        <Fragment>
        <div className='border-b-2 font-body md:fixed bg-white bg-opacity-95 md:z-[30] shadow md:static flex w-full z-[30] md:block md:top-0 '>
            <div className="hidden md:block">
            <div className="container py-2  md:mx-auto max-w-7xl ">
                <div className="items-center py-2 absolute  w-full flex-none "> 
                    <h1 className="font-semibold  text-primary h-full justify-center inline-flex items-center text-3xl">Laros<span className="text-black underline decoration-primary">GunaKarya</span>.</h1>
                </div>
                    <div className=" relative ml-36 flex">
                        <div className="justify-center  w-full flex items-center">
                            <nav className="  ">
                                <ul className="flex gap-2">
                                    <li className=" py-2 ">
                                        <CustomLink to="/">Home</CustomLink>
                                    </li>
                                    <li className="py-2">
                                        <CustomLink to="/produk">Products</CustomLink>
                                    </li>
                                    <li className="py-2">
                                        <CustomLink to="#">Jasa</CustomLink>
                                    </li>
                                    <li className=" py-2 ">
                                        <CustomLink to='#'>
                                            Your Cart
                                        </CustomLink>
                                    </li> 
                                </ul>
                            </nav>
                        </div>
                        <div className="pt-2 hidden md:block">
              
                        {
                            isAuthenticated ? (
                            <div className="">
                                <div className="flex flex-row justify-end gap-4 ">
                                    <div className="w-32">
                                        <h1 className="text-right text-[#053742]"><p className="font-thin text-[#808080] text-sm">Selamat Datang</p> Anonim </h1>     
                                    </div>
                                    <div className=" flex justify-center mx-auto md:mx-0 items-center">
                                        <button onClick={profileMenuClick}
                                        className='bg-gray-400 text-dark p-3 border border-gray-400  rounded-3xl hover:bg-primary ease-in-out duration-200' >       
                                            <FaUserAlt />
                                        {/* {
                                            profil.photo ==="" ? 
                                            <div className="py-4 px-4">
                                                <span ><FaUserAlt /></span>
                                            </div>
                                            :
                                            <img className="rounded-full h-[40px] w-[40px] object-cover" src={profil.photo} alt="profile" />
                                        }                      */}
                                            
                                        {/* <span className='my-auto mr-2 hover:animate-bounce'> <FiLogIn /> </span> Keluar */}
                                    </button>
                                    </div>
                                
                                </div>

                                <ProfileMenu hidden={profileMenu ? 'translate-x-full scale-0' : '-translate-x-[35%]'} />
                            </div>
                            ) :(
                                <div className="gap-2  items-center flex flex-row">
                                    <Link to="/auth/login">
                                        <div className="border border-brown-500 p-1 hover:text-white hover:bg-brown-500 px-6 rounded-3xl text-gray-700 ">

                                        <h1 className="tracking-wide text-md font-semibold">SignIn </h1>
                                        </div>
                                    </Link>
                                    <Link to="/auth/register">
                                        <div className="bg-brown-500 hover:bg-brown-300 p-1 px-6 rounded-3xl text-white ">
                                        <h1 className="tracking-wide text-md font-semibold">Register </h1>
                                        </div>
                                    </Link>
                                </div> 
                            )
                        }
                        </div>
                               
                    </div>
                </div> 
            </div>       
{/* mobilee  */}          
        </div>
    </Fragment>
)
}
function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })

return (
<li className={isActive ? 'text-base text-brown-500 border-b-2 border-brown-500 border-shadow font-extrabold  text-[1.3rem] p-2 ' : 'text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-brown-500 p-2 hover:text-brown-500 hover:text-base '}>
  <Link to={to} {...props}>
    {children}
  </Link>
</li>
)
}