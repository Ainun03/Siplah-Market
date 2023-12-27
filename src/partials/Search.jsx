import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Input, Select, Option } from "@material-tailwind/react";

function SearchMenu({ hidden,input,handleSearch }) {
  return (
    <div className={`${hidden} bg-white absolute z-[999] rounded-lg shadow-main px-5 py-3  w-64 border`}>
        <div className=''>
            <p className='font-bold text-gray-700 text-md'>Keyword</p>
            <div className="flex justify-center items-center">
                <div className="pt-2 relative mx-auto inline-flex  py-3 text-gray-600">
                    <Input 
                    label="Search "
                    className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" 
                    id="search"
                    value={input}
                    onChange={(e) => handleSearch(e.target.value)}
                    // onChange={handleSearch}
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <svg className="text-gray-600 h-4 w-4 fill-current" 
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" 
                            width="512px" height="512px">
                            <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className=''>
            <p className='font-bold text-gray-700 text-md'>Order by</p>
            <div className="flex justify-center items-center">
                <div className="pt-2 relative mx-auto inline-flex  py-3 text-gray-600">
                    <Select
                        label="Select Order "
                        id="countryID"
                        name="countryID"
                        // value={formik.values.countryID}
                        // onChange={(e) =>dispatch(getListProvince({id:e})) && formik.setFieldValue("countryID",e)}
                    >
                        <Option
                            // key={idx}
                            value="1"
                        >
                            New
                        </Option>
                        <Option
                            // key={idx}
                            value="1"
                        >
                            Price
                        </Option>
                        <Option
                            // key={idx}
                            value="1"
                        >
                            Category
                        </Option>
                            
                    </Select>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SearchMenu;