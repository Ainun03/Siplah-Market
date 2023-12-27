import React,{Fragment, useState} from "react";

// utils
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import NavbarPar from "../partials/Navbar";
// react dom
import {  useLocation, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, } from "react-redux";
import { toast } from "react-toastify";

import { postProducts } from "../slices/productsSlice";

import axios from "axios";

const getBase64 = (img, callback) => {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
};

const AddProduct = () => {

    const location = useLocation();
    if (location.pathname.includes("edit_kolam"))
        document.title = "Edit Kolam";
    else document.title = "Add Kolam";

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* ======== for changing categories ======== */
  
    /* ======== for changing upload product ======== */
    const [previewProductImages, setPreviewProductImages] = useState([]);
    const FiletoDataURL = (file, callback) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(reader.result);
        };
        reader.onerror = function (error) {
            toast.error(error);
        };
    };
    const handleUploadProdct = (e) => {
        const files = e.target.files;
        setPreviewProductImages([]);
        // console.log(e);

        // reset error message
        formik.setFieldError("image", "");
        formik.setFieldValue("image", "");

        // if users upload more than 3 images
        if (files.length > 3) {
            formik.setFieldError("image", "Hanya bisa mengunggah 3 gambar");
            formik.setFieldTouched("image", true);
        } else {
            // set data url images for previews
            [...Array(files.length)].forEach((item, index) => {
                FiletoDataURL(files[index], (result) => {
                    setPreviewProductImages((prevState) => [
                        ...prevState,
                        result,
                    ]);
                });
            });
            // set formik value
            // formik.setFieldValue("image", files, files.length <= 3);
            formik.setFieldValue("image", files[0]);
        }
    };

    const [data, setData] =useState('')
    const handleBerkas =(e)=>{
        const berkas = e.target.files[0]
        // setData(berkas)
        // setData(
        //     URL.createObjectURL(berkas)
        //   );
        // formik.setFieldValue("image",berkas);
        getBase64(berkas,(url)=>{
            setData(url)
            return;
        })
        // if (berkas) {
        //     if (berkas.size / 1000000 <= 2) {
        //         formik.setFieldValue("image", berkas);
        //         FiletoDataURL(e.target.files[0], (result) => {
        //             // console.log(result)
        //             // formik.setFieldValue("image", result);
        //         });
        //     } else {
        //         formik.setFieldError("image", "Maksimal ukuran file 2 Mb");
        //     }
        // }
        // formik.setFieldValue("image", berkas);
        // console.log(berkas)
    }

    /* ======== formik stuff ======== */
    const initialValues = {
        productName: "",
        category: "",
        desc:"",
        price:"",
        stok:"",
        image: "",
    };
    
    const validationSchema = () => {
        const validationObject = {
            productName: Yup.string().required("Masukkan nama Product"),
            category: Yup.string()
                .required("Tolong masukkan Panjang category"),
            desc: Yup.string()
                .required("Tolong masukkan Panjang desc"),
            price: Yup.string()
                .required("Tolong masukkan Panjang price")
                .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            stok: Yup.string()
                .required("Tolong masukkan Panjang stok")
                .matches(/^[0-9]*$/, "Tolong hanya masukkan angka"),
            // image: Yup.string().required(
            //     "Tolong masukkan gambar produk (Maks 3)"
            // ),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            values.price=parseInt(values.price)
            values.stok=parseInt(values.stok)
            values.image=previewProductImages[0]
            console.log(values)
            toast.loading("Menambahkan Product . . .");
            dispatch(postProducts(
                values
                ))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Berhasil menambahkan Product!");
                    navigate("/");
                });

            // fetch('http://localhost:8081/api/create-post',{
            //     method:"POST",
            //     crossDomain:true,
            //     headers:{
            //         Accept: "application/json",
            //         "Content-Type": "application/json",
            //         "Accsess-Control-Allow-Origin":"*",
            //     },
            //     body:JSON.stringify(values)
            // })
            //  .then(res =>{
            //     console.log("iki res",res)
            // })
            // .catch(err => console.log(err))
            
            // .catch(err => console.log(err))
            // axios.post('http://localhost:8081/api/create-post',values)
            // .then(res =>{
            //     console.log("iki res",res)
            //     // if(res.data === "Login Succes"){
            //     //     navigate('/')
            //     // }else{
            //     //     alert("no record")
            //     // }
            // })
            // .catch(err => console.log(err))
         
        },
    });

   

    return (
        <Fragment>
            <div className="relative" 
            data-aos="fade-up"
            data-aos-durations="1000"
            data-aos-delay="500">
                <NavbarPar/>
                <div className="pt-20">

                    <div className="container px-4 mx-auto max-w-3xl pt-0 pb-20 md:py-7 relative">
                        <div className="text-center text-3xl font-semibold">
                            <h1>Post product</h1>
                        </div>
                        {/* <div className="flex container  mx-auto max-w-3xl pt-3" > */}			
                        <section className="pt-5 md:pt-8 pb-8">
                            <div className="container-small relative">
                            
                                <p className="text-center font-medium mb-10 md:hidden pt-1">
                                    Lengkapi Detail Produk
                                </p>
                                <form
                                    onSubmit={formik.handleSubmit}
                                    method="POST"
                                    encType="multipart/form-data"
                                >
                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                        <label htmlFor="productName">
                                            Nama Produk{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="productName"
                                            name="productName"
                                            placeholder="nama Product"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.productName}
                                        />
                                        {formik.touched.productName &&
                                            formik.errors.productName && (
                                                <span className="text-sm text-red-500">
                                                    {formik.errors.productName}
                                                </span>
                                            )}
                                    </fieldset>
                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                        <label htmlFor="category">
                                            Kategori{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="category"
                                            name="category"
                                            placeholder="Kategory"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.category}
                                        />
                                        {formik.touched.category &&
                                            formik.errors.category && (
                                                <span className="text-sm text-red-500">
                                                    {formik.errors.category}
                                                </span>
                                            )}
                                    </fieldset>
                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                        <label htmlFor="desc">
                                            Deskripsi{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="desc"
                                            name="desc"
                                            placeholder="Deskripsi"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.desc}
                                        />
                                        {formik.touched.desc &&
                                            formik.errors.desc && (
                                                <span className="text-sm text-red-500">
                                                    {formik.errors.desc}
                                                </span>
                                            )}
                                    </fieldset>
                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                        <label htmlFor="price">
                                            Harga{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="price"
                                            name="price"
                                            placeholder="Harga"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.price}
                                        />
                                        {formik.touched.price &&
                                            formik.errors.price && (
                                                <span className="text-sm text-red-500">
                                                    {formik.errors.price}
                                                </span>
                                            )}
                                    </fieldset>
                                    <fieldset className="flex flex-col mt-4 space-y-1">
                                        <label htmlFor="stok">
                                            Stok{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="stok"
                                            name="stok"
                                            placeholder="Stok"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.stok}
                                        />
                                        {formik.touched.stok && formik.errors.stok && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.stok}
                                            </span>
                                        )}
                                    </fieldset>
                                    <fieldset className="mt-4">
                                        <p className="mb-1">
                                            Foto kolam (Maks 3){" "}
                                            <span className="text-red-500">*</span>
                                        </p>
                                        <div className="flex space-x-2">
                                            {previewProductImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    htmlFor="image"
                                                    className=" w-24 h-24 flex items-center justify-center rounded-lg border bg-white hover:bg-gray-100 transition"
                                                >
                                                    <img
                                                        src={image}
                                                        className="object-cover h-full w-full rounded-lg"
                                                        alt="preview"
                                                    />
                                                </div>
                                            ))}
                                            {previewProductImages.length <= 3 && (
                                                <div>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        accept="image/png, image/jpg, image/jpeg"
                                                        className="h-full w-full hidden"
                                                        multiple
                                                        onBlur={formik.handleBlur}
                                                        onChange={handleUploadProdct}
                                                        onClick={(e) =>
                                                            (e.target.value = "")
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="image"
                                                        className=" w-24 h-24 flex items-center justify-center rounded-lg border-2 border-dashed bg-white hover:bg-gray-100 transition"
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 5V19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M5 12H19" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                        {formik.touched.image && formik.errors.image && (
                                            <span className="text-sm text-red-500">
                                                {formik.errors.image}
                                            </span>
                                        )}
                                    </fieldset>
                                    {/* <fieldset className="mt-4"  htmlFor="image">
                                        <p className="mb-1">
                                            Foto kolam (Maks 3){" "}
                                            <span className="text-red-500">*</span>
                                        </p>
                                        <div className="flex space-x-2">
                                            <input 
                                                type="file"  
                                                id="image"
                                                name="image"
                                                accept="image/png, image/jpg, image/jpeg"
                                                onChange={handleBerkas}
                                            />
                                        </div>
                                    </fieldset> */}

                                    <div className="flex flex-row items-start mt-6 gap-4">
                                        <Button
                                            type="button"
                                            // onClick={handlePreview}
                                            className="w-full"
                                            variant="secondary"
                                        >
                                            Preview
                                        </Button>
                                        <Button type="submit" className="w-full bg-primary ">
                                        
                                                Terbitkan
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </section>		
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default AddProduct