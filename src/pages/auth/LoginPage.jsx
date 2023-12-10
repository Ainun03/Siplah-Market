import React, { Fragment,useState } from "react";

// icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// react dom
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginUser } from "../../slices/authSlice";

import axios from 'axios'



function LoginPage () {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = () => {
        const validationObject = {
            email: Yup.string()
                .email("Email tidak valid")
                .required("Tolong masukkan email"),
            password: Yup.string().required("Tolong masukkan password"),

        };
        return Yup.object().shape(validationObject);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => { 
            toast.loading("Signing in . . .",{
                position: "top-center",
				autoClose: 3000,
            });
            dispatch(loginUser(values))
            .unwrap()
            .then((res) => {
                toast.dismiss()
                if (res.data === "Login Succes"){
                    // formik.setFieldError("email", "email atau kata sandi anda tidak valid!");
                    // toast.error('email atau kata sandi anda tidak valid!')
                    console.log("Berhasil")
                    toast.success("Login berhasil!")
                    navigate('/')

                }else {
                    toast.error('email atau kata sandi anda tidak valid!')
                    console.log("Gagal")
                    // toast.success("Login berhasil!"),
                    // navigate("/home-sel")
                }
                
                     
            });
            // axios.post('http://localhost:8081/login',values)
            // .then(res =>{
            //     if(res.data === "Login Succes"){
            //         navigate('/')
            //     }else{
            //         alert("no record")
            //     }
            // })
            // .catch(err => console.log(err))


        },
    });
    return(
        <Fragment>
            
            <div className=" h-full border md:border-none border-xl rounded-lg bg-white p-8"
                >
                    <div className="flex justify-between font-bold text-xl ">
                        <div className="">
                            <p>Logo</p>
                        </div>
                        <div className="text-brown-700">
                            <h1>Login</h1>
                        </div>
                    </div>
                <div className="pt-12">
                    <form onSubmit={formik.handleSubmit} method="POST"
                    encType="multipart/form-data"
                    >
                        <fieldset>
                            <label className="font-bold text-xl" htmlFor="email">
                                Email{" "}
                                <span className="text-red-500">*</span>            
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="peer ... mt-1 px-3 py-3 bg-[#EEFFF6] border-2 shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1" 
                                placeholder="john@gmail.com" />
                                {formik.touched.email && formik.errors.email && (
                                    <span className="text-sm text-red-500">
                                        {formik.errors.email}
                                    </span>
                                )}

                        </fieldset>

                        <fieldset className="mt-4 space-y-1">
                            <label className="font-bold text-xl" htmlFor="password">
                                Password{" "}
                                <span className="text-red-500">*</span>            
                            </label>
                            <div className="flex  fex-grow border-2  border-[#D0D0D0] bg-[#EEFFF6] mt-1 pr-2  rounded-lg items-center justify-between">
                                <input 
                                    type={isVisible ? 'text' : 'password'} 
                                    name="password" 
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Masukkan password'
                                    className="peer ... px-3 py-3 bg-[#EEFFF6] border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-lg sm:text-sm focus:ring-1"
                                        />
                                {
                                    isVisible ?
                                    <AiOutlineEyeInvisible
                                        onClick={() => setIsVisible(false)}
                                        size={25}
                                    /> :
                                    <AiOutlineEye
                                        onClick={() => setIsVisible(true)}
                                        size={25}
                                    />
                                }
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.password}
                                </span>
                            )}

                        </fieldset>

                        <button type="submit" className="px-4 font-serif py-2 mt-4 border w-full text-brown-700 bg-orange-700 hover:bg-orange-300 font-bold text-2xl rounded-xl">
                            Login
                        </button>

                        <button type="button" className="px-4 flex justify-center items-center gap-2 py-2 mt-4  border  w-full  text-2xl shadow-lg rounded-xl">
                           <FcGoogle/> <span className="text-brown-700 font-bold text-sm">Login With Google</span> 
                        </button>
                    </form>

                        <div className="text-center font-sans font-semibold text-gray-700 pt-4">
                            <span>Don’t have an account?</span>
                        </div>
                        <button onClick={()=>navigate('/auth/register')} type="button" className="px-4 py-2 mt-4 font-mono text-md border w-full text-white bg-brown-700 hover:bg-brown-400 font-bold text-2xl rounded-xl">
                            Sign Up Here
                        </button>
                    </div>
                        
                
            </div>
        </Fragment>
    )
}
export default LoginPage