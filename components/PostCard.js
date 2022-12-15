import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
function PostCard({ Article }) {
    const [authorData,setAuthorData]=useState({
        name:"anonymous",
        imgUrl:"/images/not_found.jpg",
    });
    useEffect(()=>{
        const getAuthorData=async ()=>{
            setAuthorData((await getDoc(doc(db,'Users',Article.data.author))).data())
        }
        getAuthorData();
    },[Article])
    return (
        <Link href={`/post/${Article.id}`}>
            <div className='flex rounded-md cursor-pointer gap-5 my-3 mx-3 border p-2  shadow-lg hover:shadow-none hover:scale-105 transition transform duration-100 ease-out min-h-[13rem]'>
                <div className='space-y-2 flex-grow'>
                    <div className='flex gap-2 items-center'>
                        <div className='relative overflow-hidden w-10 h-10 items-center rounded-full'>
                            <Image
                                src={authorData?.imgUrl}
                                alt="author image"
                                fill
                            />
                        </div>
                        <p className='font-semibold'>{authorData?.name}</p>
                    </div>
                    <div className=''>
                        <h2 className='text-xl  font-bold'>{Article.data.title}</h2>
                        <h3 className='text-gray-500'>{Article.data.brief}</h3>
                        <span className="text-sm text-gray-500">{new Date(Article.data.postedOn.toDate()).toLocaleString('en-US',{
                            day:'numeric',
                            month:'short',
                            year:'numeric'
                        })} . {Article.data.postLength}min Read .  </span>
                        <span className='text-sm bg-purple-200 px-2 py-1 rounded-xl '>{Article.data.category}</span>
                        <span className='cursor-pointer'>
                            <FiBookmark className='h-6 w-6 ml-auto' />
                        </span>
                    </div>
                </div>
                <div className='relative w-32 h-32 rounded-md overflow-hidden'>
                    <Image
                        src={Article.data.bannerImage}
                        fill
                        alt='Article Image'
                    />
                </div>
            </div>
        </Link>

    );
}

export default PostCard;