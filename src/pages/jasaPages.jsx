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

export default function JasaPage(){
    const {products} =useSelector(
        (store) =>store.product
      )
    const [category, setCategory] = useState('promo');
    const [productsData, setProductsData] = useState([]);
    const [resultSearch, setResultSearch] = useState([]);
    const [input, setInput] = useState("");
    console.log(productsData)
    const [searchMenu, setSearchMenu] = useState(true);
    const searchMenuClick = () => {
        setSearchMenu(!searchMenu);
      };

    useEffect(() => {
        setProductsData(products)
    }, [products])

    
    useEffect(() => {
        switch (category) {
          case 'promo':
            productFilter(category)
            break;
          case 'elektronik':
            productFilter(category);
            break;
          case 'buku':
            productFilter(category);
            break;
          case 'pakaian':
            productFilter(category);
            break;
          default:
            break;
        }
      }, [category]);


    //   const findDuplicateItem =  products?.filter(function(item, index) {
    //     return index === products.findIndex(function(obj){
    //         return (item.category === obj.category)
    //     })
    // })
    // console.log(findDuplicateItem)

    const productFilter = (category) => {
        if (category === 'promo') {
            setProductsData(products);
        } else {
            setProductsData(products.filter(item => item.category === category));
        }
      };
    const productSearch = (value) => {
        if (value) {
            setProductsData(products.filter((item) =>{
                return(
                    value &&
                    item &&
                    item.productName &&
                    item.productName.toLowerCase().includes(value)
                )
            } ));
        } else {
            setProductsData(products);
        }
      };

      const handleSearch =(value)=>{
        setInput(value);
        productSearch(value);
  }
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
                    </section>
                    <section className="2 md:col-span-2  ">
                        <div className=" w-full relative flex  items-center">   
                            <ul className="flex gap-2 justify-around w-full">
                                <li className=" py-2">
                                    <button onClick={() => setCategory('promo')} className="w-full ">
                                        <div className={
                                                "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                            +(category === 'promo'
                                                ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                : "nonActive-state ")
                                        }>
                                            <h1>Favorite {'&'} Promo</h1>
                                        </div>
                                    </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('elektronik')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'elektronik'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Banner</h1>
                                            </div>
                                        </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('buku')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'buku'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Buku</h1>
                                            </div>
                                        </button>
                                </li>
                                <li className="py-2">
                                    <button onClick={() => setCategory('pakaian')} className="w-full ">
                                            <div className={
                                                    "text-gray-700  font-bold hover:border-b-2 hover:border-shadow  hover:border-orange-700 p-2 hover:text-orange-700 hover:text-base " 
                                                +(category === 'pakaian'
                                                    ? "text-base text-orange-700 border-b-2 border-orange-700 border-shadow font-extrabold  text-[1.3rem] p-2  "
                                                    : "nonActive-state ")
                                            }>
                                                <h1>Pakaian</h1>
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
                                    <SearchMenu handleSearch={handleSearch}  hidden={searchMenu ? 'translate-x-full scale-0' : '-translate-x-[90%]'} input={input ? input :""}/>
                                </li> 
                            </ul>
                        </div>
                        {
                            category === "promo"?
                                <div className="grid pt-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3  justify-items-center lg:grid-cols-4 md:grid-cols-3 w-full gap-6">      
                                    {        
                                        productsData.length>0 ?
                                        productsData
                                        .map((items, idx)=>
                                            <ListProduct key={idx}  item={items}/>
                                        )
                                        : (
                                        <div className="w-full col-span-4 flex justify-center items-center">
                                            <Loader/>
                                        </div>
                                        )
                                        // <div className="w-full col-span-4 flex justify-center items-center">
                                        //     <Loader/>
                                        // </div>
                                    }
                               </div>
                         : 
                         <div className="grid pt-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-3  justify-items-center lg:grid-cols-4 md:grid-cols-3 w-full gap-6">      
                            {        
                                productsData.length>0 ?
                                productsData
                                .map((items, idx)=>
                                    <ListProduct key={idx}  item={items}/>
                                )
                                : (
                                    <div className=' text-center w-full flex items-center justify-center md:text-center'>
                                        <p className='mt-20 text-lg font-bold'>Produk Kosong</p>
                                </div>
                                )
                                // <div className="w-full col-span-4 flex justify-center items-center">
                                //     <Loader/>
                                // </div>
                            }
                    </div>
                        } 
                    </section>
                </div>   
            </div>
                {/* <Footer/> */}
            </div>
        </Fragment>
    )
}