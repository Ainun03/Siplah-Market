import React from 'react'

const LoadPulse=()=>{
    return(
        // <div class="border border-blue-400 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        //     <div class= "animate-pulse flex space-x-4">
        //         <div class="rounded-full bg-gray-200 h-10 w-10"></div>
        //         <div class="flex-1 space-y-6 py-1">
        //         <div class="h-2 bg-gray-200 rounded"></div>
        //         <div class="space-y-3">
        //             <div class="grid grid-cols-3 gap-4">
        //             <div class="h-2 bg-gray-200 rounded col-span-2"></div>
        //             <div class="h-2 bg-gray-200 rounded col-span-1"></div>
        //             </div>
        //             <div class="h-2 bg-gray-200 rounded"></div>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <div className='card inline-block  border-2 hover:origin-top-left bg-gray-50   p-2 shadow-main shadow-slate-700 w-64 h-64 cursor-pointer  overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-400 ease-in-out' 
         >
             <div className='animate-pulse'>
                {/* <img className="rounded-md h-[100px] w-full object-cover" src={item ? item.image : 'https://static.vecteezy.com/system/resources/previews/003/475/012/original/confused-man-with-question-mark-concept-flat-illustration-free-vector.jpg'} alt='product' /> */}
                <div className="card-body h-32 w-full bg-gray-400 ">
                </div>
                <div className='h-32 '>
                    <div className="pt-3 grid grid-cols-3 gap-4">
                        <div className="bg-gray-400 flex col-span-2 w-full h-3 rounded">                     
                        </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-4">
                        <div className="bg-gray-400 flex col-span-1 w-full h-3 rounded">                     
                        </div>
                    </div>
                    {/* <div className="mt-3 grid grid-cols-3 gap-4">
                        <div className="bg-gray-400 flex col-span-2 w-full h-3 rounded">          
                        </div>
                        <div className="flex bg-gray-400 flex col-span-1 rounded h-3 w-full text-primary">
                        </div>

                    </div> */}
                    <div className="flex flex-row h-14 gap-4 items-end ">
                        <div className="bg-gray-400 basis-2/3  w-full h-3 rounded">          
                        </div>
                        <div className="flex bg-gray-400 basis-1/3  rounded h-3 w-full text-primary">
                        </div>

                    </div>
                </div>
             </div>
        </div>
            

    )
}
export default LoadPulse