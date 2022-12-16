import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import IsblogContext from '../context/IsblogContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';
function PostModal(props) {
    const router=useRouter();
    const { currentUser } = useContext(IsblogContext);
    const [title, setTitle] = useState("");
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
    const [BannerImage, setBannerImage] = useState("");
    const [readLength, setReadLength] = useState("");
    const [body, setBody] = useState("");
    const addPostToFireBase = async (e) => {
        e.preventDefault();
        if(currentUser){
            await addDoc(collection(db, 'Articles'), {
                bannerImage:BannerImage,
                title:title,
                brief:brief,
                author: currentUser.email,
                body:body,
                postLength: readLength,
                category:category,
                postedOn: new Date(),
    
            }).then(res=>router.push('/'))
            .catch(err=>console.log(err));
        }
    }
    return (
        <div className='h-[50rem] w-[40rem] gap-1 p-1 flex flex-col overflow-scroll justify-center items-center'>
            <div className='font-bold my-5'>Write Something Amazing</div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Title</span>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Brief</span>
                <input
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 '"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Image Url</span>
                <input
                value={BannerImage}
                onChange={(e)=>setBannerImage(e.target.value)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Category</span>
                <input
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                    type="text"
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Reading Time(in Minutes)</span>
                <input
                value={readLength}
                onChange={(e)=>setReadLength(e.target.value)}
                    type="text"
                    className="p-2 bg-transparent outline-none h-min border-2 border-gray-400 rounded-lg col-span-3"
                />
            </div>
            <div className='w-full border-gray-400 grid grid-cols-4 gap-x-5'>
                <span className=' text-center col-span-1'>Main Content</span>
                <textarea
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                    rows={5}
                    className="p-2 bg-transparent outline-none  h-min border-2 border-gray-400 rounded-lg col-span-3 "
                />
            </div>
            <button className='button'  onClick={addPostToFireBase}>Submit</button>
        </div>
    );
}

export default PostModal;