import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import IsblogContext from '../context/IsblogContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
function PostModal(props) {
    const { currentUser } = useContext(IsblogContext);
    const [title, setTitle] = useState("");
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [readLength, setReadLength] = useState("");
    const [body, setBody] = useState("");
    const addPostToFireBase = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'Articles'), {
            bannerImage,
            title,
            brief,
            author: currentUser.email,
            body,
            postLength: readLength,
            category,
            postedOn: serverTimestamp

        });
    }
    return (
        <div className='h-[50rem] w-[40rem] gap-1 p-1 flex flex-col overflow-scroll justify-center items-center'>
            <div className='font-bold my-5'>Write Something Amazing</div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Title</span>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.val)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Brief</span>
                <input
                    value={brief}
                    onChange={(e) => setBrief(e.target.val)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 '"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Image Url</span>
                <input
                value={bannerImage}
                onChange={(e)=>setBannerImage(e.target.val)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Category</span>
                <input
                value={category}
                onChange={(e)=>setCategory(e.target.val)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Reading Time(in Minutes)</span>
                <input
                value={readLength}
                onChange={(e)=>setReadLength(e.target.val)}
                    type="text"
                    className="p-2 bg-transparent outline-none h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Main Content</span>
                <textarea
                value={body}
                onChange={(e)=>setBody(e.target.val)}
                    rows={5}
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <button className='button'  onClick={addPostToFireBase}>Submit</button>
        </div>
    );
}

export default PostModal;