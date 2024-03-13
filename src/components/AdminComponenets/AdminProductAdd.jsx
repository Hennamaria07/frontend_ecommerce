import React, { useEffect, useState } from 'react'
import AdinNavbar from './AdinNavbar'
import { useSelector } from 'react-redux'
import instance from '../../utils/axios'
import { Flip, ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AdminProductAdd = () => {
  const show = useSelector(state => state.mode.show);
  const [formValues, setFormValues] = useState({});
  const [checkboxValue, setCheckboxValues] = useState({});
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    const imageFiles = fileList.filter(file => file.type.match('image.*'));
  
    if (imageFiles.length !== fileList.length) {
      setErrors(prev => ({ ...prev, image: 'Only image files are allowed. Please select again.' }));
      setFiles([]);
    } else if (imageFiles.length !== 5) { // Check if exactly 5 images are selected
      setErrors(prev => ({ ...prev, image: 'Please select exactly 5 images.' }));
      setFiles([]);
    } else {
      setErrors(prev => ({ ...prev, image: '' })); // Clear any previous image error
      setFiles(imageFiles);
    }
  };


  const validation = (values) => {
    const errors = {};
    const nameRe = /^[a-zA-Z0-9\s\-_&().,']+$/;
    const brandRe = /^[a-zA-Z0-9\s\-_&().,']+$/;
    const categoryRe = /^[a-zA-Z0-9\s\-_&().,']+$/;
    const descriptionRe = /[A-Za-z0-9\s.,-]{20,}$/;
    const priceRe = /^1([0-9]{0,8}|000000000)$/;
    const stockRe = /^(1|[1-9][0-9]?|1\d{2}|2[0-4][0-9]|25[0-5])$/;

    if (!values.productName || !nameRe.test(values.productName)) {
      errors.productName = "Invalid product name";
    }
    if (!values.productDescription || !descriptionRe.test(values.productDescription)) {
      errors.productDescription = "Product description must be at least 20 characters";
    }
    if (!values.productPrice || !priceRe.test(values.productPrice)) {
      errors.productPrice = "Invalid price format";
    }
    if (!values.productCategory || !categoryRe.test(values.productCategory)) {
      errors.productCategory = "Invalid category format";
    }
    if (!values.productBrand || !brandRe.test(values.productBrand)) {
      errors.productBrand = "Invalid brand format";
    }
    if (!values.productStock || !stockRe.test(values.productStock)) {
      errors.productStock = "Invalid stock value";
    }
    if (Object.keys(checkboxValue).length === 0) {
      errors.size = "please select atleast one field"
    }
    if(files.length === 0 ) {
      // console.log(files.length);
      errors.image = 'upload atleast 5 images'
    }
    return errors;
  }

  const handleInput = (e) => {
    console.log("Field: ", e.target.name, " Value: ", e.target.value);
    console.log(formValues);
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleCheckboxInput = (e) => {
    const { name, checked } = e.target;
    const newValue = checked ? e.target.value : '';

    setCheckboxValues(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  }

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form is submitted');
    console.log(validation(formValues))
    const validationErrors = validation(formValues);
    setErrors(validationErrors);
    
    console.log(`form value${formValues.productPrice}`);
    if (Object.keys(validationErrors).length === 0) { 
      const formData = new FormData();
      formData.append('name', formValues.productName);
      formData.append( 'description', formValues.productDescription);
      formData.append('brand', formValues.productBrand);
      formData.append('stock', formValues.productStock);
      formData.append('category', formValues.productCategory);
      formData.append('actualPrice', formValues.productPrice);
      formData.append('discountPrice', formValues?.productDiscountPrice || 0);
      formData.append('size', checkboxValue);
      formData.append('product', files);
        try {
          const res = await instance.post('/api/v1/product/add', formData, {withCredentials: true, headers: {
            "Content-Type": "multipart/form-data"
          }});
            if (res.data.success) {
                toast.success(res.data.message);
                await new Promise((resolve) => setTimeout(resolve, 1000))
                setTimeout(() => {
                    navigate('/admin/products');
                }, 1000);
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
  }
  return (
    <>
      <section className="w-full h-full text-black dark:text-white min-h-[100vh] lg:bg-white lg:dark:bg-[#121212ed]">
        <AdinNavbar />
        <div className={`${show ? 'w-[calc(100vw-256px)] relative top-0 z-8 pt-[64px] left-[256px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent' : 'lg:w-[calc(100vw-256px)] w-full absolute top-0 z-100 lg:left-[256px] pt-[64px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent'}`}>
          <div className="p-5">
            <form action="#" className='grid gap-5' onSubmit={handleSubmit} >
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
                />
              <div className="relative">
                <input type="text" id="productName" name='productName' onChange={handleInput} className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                <label htmlFor="productName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Name</label>
                {errors.productName && <p className='text-red-600'>{errors?.productName}</p>}
              </div>
              <div className="relative">
                <input type="text" id="productDescription" onChange={handleInput} name='productDescription' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                <label htmlFor="productDescription" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Description</label>
                {errors.productDescription && <p className='text-red-600'>{errors?.productDescription}</p>}
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <div className="relative">
                  <input type="text" id="productBrand" onChange={handleInput} name='productBrand' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                  <label htmlFor="productBrand" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Brand</label>
                  {errors.productBrand && <p className='text-red-600'>{errors?.productBrand}</p>}
                </div>
                <div className="relative">
                  <input type="text" id="productCategory" onChange={handleInput} name='productCategory' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                  <label htmlFor="productCategory" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Category</label>
                  {errors.productCategory && <p className='text-red-600'>{errors?.productCategory}</p>}
                </div>
                <div>
                  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input id="extraSmall" name='extraSmall' type="checkbox" onChange={handleCheckboxInput} value="XS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="extraSmall" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">XS</label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input id="small" name='small' type="checkbox" onChange={handleCheckboxInput} value="S" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="small" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">S</label>
                      </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input id="medium" name='medium' type="checkbox" onChange={handleCheckboxInput} value="M" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="medium" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M</label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input id="large" name='large' type="checkbox" value="L" onChange={handleCheckboxInput} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="large" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">L</label>
                      </div>
                    </li>
                    <li className="w-full dark:border-gray-600">
                      <div className="flex items-center ps-3">
                        <input id="none" name='none' type="checkbox" value="none" onChange={handleCheckboxInput} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="none" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">None</label>
                      </div>
                    </li>
                  </ul>
                  {errors.size && <p className='text-red-600'>{errors?.size}</p>}
                </div>

              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <div className="relative">
                  <input type="number" id="productPrice" onChange={handleInput} value={formValues.productPrice} name='productPrice' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                  <label htmlFor="productPrice" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Price</label>
                  {errors.productPrice && <p className='text-red-600'>{errors?.productPrice}</p>}
                </div>
                <div className="relative">
                  <input type="number" id="productDiscountPrice" onChange={handleInput} name='productDiscountPrice' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                  <label htmlFor="productDiscountPrice" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Discount Price</label>
                </div>
                <div className="relative">
                  <input type="number" id="productStock" onChange={handleInput} name='productStock' className="block px-2.5 pb-2.5 pt-4 w-full   text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-600 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " />
                  <label htmlFor="productStock" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-2 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-gray-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Stock</label>
                  {errors.productStock && <p className='text-red-600'>{errors?.productStock}</p>}
                </div>
              </div>
              <div className="relative col-span-full">
                <label htmlFor="cover-photo" className="block text-sm  text-gray-500 dark:text-gray-400">Product images</label>
                <div className="mt-2 flex justify-center rounded-lg border  dark:border-gray-400  border-gray-600 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold dark:bg-transparent dark:text-orange-300">
                        <span>Upload a file</span>
                        <input id="file-upload" required name="file-upload" onChange={handleFileChange} type="file" multiple className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">PNG, JPG, GIF mininum up to 5 images</p>
                  </div>
                </div>
                {errors.image && <p className='text-red-600'>{errors?.image}</p>}
              </div>
              <div className="relative">
                <button className='p-2 bg-[#8CB9BD] dark:bg-[#043E44] w-full'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminProductAdd
