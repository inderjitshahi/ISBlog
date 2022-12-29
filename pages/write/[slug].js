import React, { useContext, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Link from 'next/link';
import IsblogContext from '../../context/IsblogContext';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
function Write(props) {
    const router = useRouter();
    const currentUser = router.query.slug;
    // if(!currentUser){
    //     router.push('/');
    // }
    const [title, setTitle] = useState("");
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
    const [BannerImage, setBannerImage] = useState("");
    const [readLength, setReadLength] = useState("");
    const [body, setBody] = useState("");
    // console.log(currentUser);
    const addPostToFireBase = async (data) => {
        // console.log(data);
        if (currentUser) {
            // console.log(currentUser);
            await addDoc(collection(db, 'Articles'), {
                ...data,
                author: currentUser,
                postedOn: new Date(),
            }).then(res => router.push('/'))
                .catch(err => console.log(err));
        } else {
            alert("not logged in");
            router.push('/');
        }
    }


    const { register, handleSubmit } = useForm();


    const onSubmit = data => console.log(data);
    return (
        <div className='min-h-screen'>
            <Header />
            <div className='flex justify-center  py-5'>
                <form onSubmit={handleSubmit(data => addPostToFireBase(data))} className="flex flex-col w-[90%] lg:w-[50%]">
                    <h2 className='my-5 text-center text-lg font-semibold'>Write Something Amazing</h2>

                    <div className="form-floating mb-3 ">
                        <input type="text" {...register("title", { required: true, })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="Creative Writing" />
                        <label htmlFor="floatingInput" className="text-gray-700">Title</label>
                    </div>
                    <div className="form-floating mb-3 ">
                        <input type="text" {...register("brief", { required: true, })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="text-gray-700">Brief</label>
                    </div>
                    <div className="form-floating mb-3 ">
                        <input type="url" {...register("bannerImage", { required: false })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="text-gray-700">Blog Image Url</label>
                    </div>
                    <div>
                        <select {...register("category", { required: true })} className="mb-3 form-select appearance-none block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" >
                            <option selected value="Tech">Programming</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Science">Science</option>
                            <option value="Math">Math</option>
                            <option value="Arts">Arts</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Carrier">Carrier</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                            <option value="Movie">Movie</option>
                            <option value="Political">Political</option>
                            <option value="Business">Business</option>
                            <option value="Sports">Sports</option>
                            <option value="News">News</option>
                            <option value="Personal">Personal</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-floating mb-3 ">
                        <input type='number' max={1000} min={1} {...register("postLength", { required: true, maxLength: 100 })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="text-gray-700">Reading Time in Minutes</label>
                    </div>

                    <div className="form-floating mb-3 ">
                        <textarea rows={10} {...register("postLength", { required: true, })} className="w-full py-1.5 px-3 text-gray-700  border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none" placeholder='Your Thoughts' />
                    </div>

                    <input data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" className="bg-blue-600 text-white border border-solid border-gray-300 mb-2 p-2 cursor-pointer focus:border-blue-600 w-full uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg hover:scale-95 transition duration-150 ease-in-out" />
                </form>

            </div >

            < Footer />
        </div >
    );
}

export default Write;