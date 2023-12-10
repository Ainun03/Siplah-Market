import React,{Fragment,useState,useEffect} from "react";
import ims from '../assets/images/img_car.png'
// partials
import Footer from "../partials/Footer";
import NavbarPar from "../partials/Navbar";
import ListProduct from "../partials/cardProducts/List";
import SearchMenu from "../partials/Search";
// 
import { useSelector } from "react-redux";
import {RxTriangleUp} from 'react-icons/rx'
// component
import Loader from "../components/Loader";



export default function ProductPage(){
    const [category, setCategory] = useState('product');
    const [searchMenu, setSearchMenu] = useState(true);
    const searchMenuClick = () => {
        setSearchMenu(!searchMenu);
      };

    const {products} =useSelector(
        (store) =>store.product
      )

    useEffect(() => {
        switch (category) {
          case 'product':
            setCategory(category)
            break;
          case 'elektronik':
            setCategory(category);
            break;
          default:
            break;
        }
      }, [category]);

    return(
        <Fragment>
            <div className="relative">

            <NavbarPar/>
            <div className="py-0 pb-20 md:py-20 md:pb-0 max-w-6xl mx-auto ">    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <section className="1 order-last w-full md:order-none border-r-2">
                        <div className=" relative py-4">
                            <div className="flex flex-col text-center justify-center items-center">
                                <h1 className="font-bold text-2xl font-serif">Promo Today</h1>
                                <p className="text-sm font-semibold text-gray-700 pt-4">Coupons will be updated every weeks. Check them ou</p>
                            </div>
                        </div>
                        {/* <div className="flex flex-col justify-center items-center">
                            <div className="border w-80 h-32 bg-gray-200 rounded-md p-4 ">
                                <div className="flex h-full items-center gap-4">
                                    <div className="">
                                        <img className="w-24 rounded-full" src={ims} alt='produ'/>
                                    </div>
                                    <div className="">
                                        <h1 className="font-bold text-lg">Elektronik</h1>
                                        <p className="text-sm font-semibold text-gray-700">barange elektronik</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border  w-80 h-32 bg-gray-200 mt-4 rounded-md p-4 ">
                                <div className="flex h-full items-center gap-4">
                                    <div className="">
                                        <img className="w-24 rounded-full" src={ims} alt='produ'/>
                                    </div>
                                    <div className="">
                                        <h1 className="font-bold text-lg">Elektronik</h1>
                                        <p className="text-sm font-semibold text-gray-700">barange elektronik</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </section>
                    <section className="2 md:col-span-2  ">
                        <div className=" w-full relative flex  items-center">   
                            <ul className="flex gap-2 justify-around w-full">
                                <li className=" py-2">
                                    <button onClick={() => setCategory('product')} className="w-full ">
                                        <div className={
                                                "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                            +(category === 'product'
                                                ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                : "nonActive-state ")
                                        }>
                                            <h1>Favorite {'&'} Promo</h1>
                                        </div>
                                    </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('eletronik')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'eletronik'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Elektronik</h1>
                                            </div>
                                        </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('eletronik')} className="w-full ">
                                        <div className={
                                                "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                            +(category === 'eletronik'
                                                ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                : "nonActive-state ")
                                        }>
                                            <h1>Elektronik</h1>
                                        </div>
                                    </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('eletronik')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'eletronik'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Elektronik</h1>
                                            </div>
                                        </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('eletronik')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'eletronik'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Dll</h1>
                                            </div>
                                        </button>
                                </li>
                                <li className=" py-2 ">
                                    <button onClick={searchMenuClick} className="w-full ">
                                            <div className={
                                                    "text-gray-700 transition  p-1 font-bold text-[1.2rem] " 
                                                +(searchMenu === true
                                                    ? " font-extrabold transition rotate-180 text-[1.2rem] p-1  "
                                                    : "nonActive-state ")
                                            }>
                                                <RxTriangleUp size={30}/>
                                            </div>
                                        </button>
                                    <SearchMenu hidden={searchMenu ? 'translate-x-full scale-0' : '-translate-x-[90%]'}/>
                                </li> 
                            </ul>
                        </div>
                        {
                            category === "product"?
                                <div className="grid pt-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3  justify-items-center lg:grid-cols-4 md:grid-cols-3 w-full gap-6">      
                                    {
                                        
                                        products.length>0 ?
                                        products
                                        .map((items, idx)=>
                                            <ListProduct key={idx}  item={items}/>
                                        )
                                        :
                                        <div className="w-full col-span-4 flex justify-center items-center">
                                            <Loader/>
                                        </div>
                                    }
                               </div>
                            :""
                        }
                    </section>
                </div>   
            </div>
                <Footer/>
            </div>
        </Fragment>
    )
}