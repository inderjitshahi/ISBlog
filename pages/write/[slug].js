import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useForm } from "react-hook-form";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
function Write(props) {
    const router = useRouter();
    const currentUser = router.query.slug;
    const { register, handleSubmit } = useForm();
    const [c, setC] = useState();
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const addPostToFireBase = async (data) => {
        console.log(data.body);
        if (currentUser) {
            // console.log(currentUser);
            await addDoc(collection(db, 'Articles'), {
                ...data,
                author: currentUser,
                body: c,
                postedOn: new Date(),
            }).then(res => router.push('/'))
                .catch(err => console.log(err));
        } else {
            alert("not logged in");
            router.push('/');
        }
    }

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],

            ['bold', 'italic', 'underline', 'strike', 'blockquote',],
            [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
            [{ 'background': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
        // "emoji-toolbar": true,
        // "emoji-textarea": true,
        // "emoji-shortname": true,
    }
    /*
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'color',
        'background',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        // 'image',
    ]


    const onSubmit = data => console.log(data);
    return (
        <div className='min-h-screen'>
            <Header />
            <div className='flex justify-center  py-5'>
                <form onSubmit={handleSubmit(data => addPostToFireBase(data))} className="flex flex-col w-[90%] lg:w-[50%]">
                    <h2 className='my-5 text-center text-lg font-semibold'>Write Something Amazing</h2>

                    <div className="form-floating mb-3 ">
                        <input type="text" {...register("title", { required: true, validate: value => value.trim().length >= 1 })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="Creative Writing" />
                        <label htmlFor="floatingInput" className="text-gray-700">Title</label>
                    </div>
                    <div className="form-floating mb-3 ">
                        <input type="text" {...register("brief", { required: true, validate: value => value.trim().length >= 1 })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
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
                        <input type='number' max={1000} min={1} {...register("postLength", { required: true, validate: value => value >= 1 })} className="form-control block w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput" className="text-gray-700">Reading Time in Minutes</label>
                    </div>

                    <div className="form-floating mb-3 ">
                        {/* <QuillNoSSRWrapper
                            name="content"
                            value={value} onChange={onContentChange}
                            rows={10} {...register("postLength", { required: true, validate: value => value.trim().length >= 1 })} className="w-full py-1.5 px-3 text-gray-700  border border-solid border-gray-300 rounded focus:border-blue-600 focus:outline-none" placeholder='Your Thoughts' /> */}
                        <ReactQuill modules={modules} formats={formats} onChange={data => setC(data)}  theme="snow"/>
                    </div>

                    <input data-mdb-ripple="true" data-mdb-ripple-color="light" type="submit" className="bg-blue-600 text-white border border-solid border-gray-300 mb-2 p-2 cursor-pointer focus:border-blue-600 w-full uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg hover:scale-95 transition duration-150 ease-in-out" />
                </form>

            </div >

            < Footer />
        </div >
    );
}

export default Write;