import React, { useContext, useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import Link from 'next/link';
import IsblogContext from '../../context/IsblogContext';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";;
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
    const addPostToFireBase = async (e) => {
        e.preventDefault();
        if (currentUser) {
            await addDoc(collection(db, 'Articles'), {
                bannerImage: BannerImage,
                title: title,
                brief: brief,
                author: currentUser,
                body: body,
                postLength: readLength,
                category: category,
                postedOn: new Date(),

            }).then(res => router.push('/'))
                .catch(err => console.log(err));
        } else {
            alert("not logged in");
            router.push('/');
        }
    }
    return (
    <div className='min-h-screen'>
        <Header />
        <div className='bg-purple-200 flex flex-col space-y-5 justify-center items-center px-5 py-5 relative'>
            <Link href='/' className='flex items-center font-bold absolute left-3 top-3 text-2xl'><BsFillArrowLeftCircleFill/></Link>
            <div className='font-bold text-lg sm:text-2xl'>Write Something Amazing</div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Title</span>
                <input
                    placeholder='Enter the Title of Your Idea'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className=" p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Brief</span>
                <input
                    placeholder='Briefly Describe Your Idea'
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    type="text"
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 '"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Image Url <Link className='text-blue text-[.5rem] underline' target="_blank" href="https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website">Get Image Url</Link></span>
                <input
                    placeholder='Eg: https://drive.google.com/uc?id=1m9LdIF9Q33ojm4pSGMmp3gG6RETYRcfg'
                    value={BannerImage}
                    onChange={(e) => setBannerImage(e.target.value)}
                    type="text"
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Category</span>
                <select
                    value={category}
                    placeholder="Select a Category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 bg-purple-200">
                    <option value="Tech">Tech</option>
                    <option value="Productivity">Productivity</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Health">Health</option>
                    <option value="Movie">Movie</option>
                    <option value="Political">Political</option>
                    <option value="Business">Business</option>
                    <option value="Arts">Arts</option>
                    <option value="Sports">Sports</option>
                    <option value="News">News</option>
                    <option value="Personal">Personal</option>
                    <option value="General">General</option>
                </select>
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Reading Time(in Minutes)</span>
                <input type="number" id="hour" min="1" max="1000" step={1}
                    placeholder='Eg: 5'
                    value={readLength}
                    onChange={(e) => setReadLength(e.target.value)}
                    className="p-1 md:p-2 bg-transparent outline-none h-min border-2 border-gray-400 rounded-lg col-span-3"
                />

            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Main Content</span>
                <textarea
                    placeholder='Add Your Thoughts Here...'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={5}
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <button className='button' onClick={addPostToFireBase}>Submit</button>
        </div>
        <Footer/>
    </div>
    );
}

export default Write;