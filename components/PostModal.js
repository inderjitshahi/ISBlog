import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import IsblogContext from '../context/IsblogContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';
import Link from 'next/link';
function PostModal(props) {
    const router = useRouter();
    const { currentUser } = useContext(IsblogContext);
    const [title, setTitle] = useState("");
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
    const [BannerImage, setBannerImage] = useState("");
    const [readLength, setReadLength] = useState("");
    const [body, setBody] = useState("");
    const addPostToFireBase = async (e) => {
        e.preventDefault();
        if (currentUser) {
            await addDoc(collection(db, 'Articles'), {
                bannerImage: BannerImage,
                title: title,
                brief: brief,
                author: currentUser.email,
                body: body,
                postLength: readLength,
                category: category,
                postedOn: new Date(),

            }).then(res => {
                window.location.reload();
                router.push('/')
            })
                .catch(err => console.log(err));
        }
    }
    return (
        <div className='w-full gap-1 px-1 sm:px-2 md:px-10 flex flex-col overflow-scroll justify-center items-center'>
            <div className='font-bold my-5'>Write Something Amazing</div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Title</span>
                <input
                    placeholder='enter the title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className=" p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Brief</span>
                <input
                    placeholder='briefly describe your idea'
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    type="text"
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 '"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Image Url <Link className='text-blue text-[.5rem] underline' target="_blank" href="https://stackoverflow.com/questions/15557392/how-do-i-display-images-from-google-drive-on-a-website">Get Image Url</Link></span>
                <input
                    placeholder='eg: https://drive.google.com/uc?id=1m9LdIF9Q33ojm4pSGMmp3gG6RETYRcfg'
                    value={BannerImage}
                    onChange={(e) => setBannerImage(e.target.value)}
                    type="text"
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Category</span>
                <input
                    placeholder='Coding, ML, Motivation, Web Development ...'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    className="p-1 md:p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Reading Time(in Minutes)</span>
                <input
                    placeholder='eg: 5'
                    value={readLength}
                    onChange={(e) => setReadLength(e.target.value)}
                    type="text"
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
    );
}

export default PostModal;