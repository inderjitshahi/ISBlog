import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
function PostCard({ Article }) {
    const [bookmarked, setBookmarked] = useState(false);
    const [authorData, setAuthorData] = useState({
        name: "anonymous",
        imgUrl: "/images/not_found.jpg",
    });
    useEffect(() => {
        const getAuthorData = async () => {
            setAuthorData((await getDoc(doc(db, 'Users', Article?.data?.author))).data())
        }
        getAuthorData();
    }, [Article])
    // console.log(Article,"PostCard");
    return (
        <Link href={`/post/${Article.id}`}>
            <div className='flex rounded-md cursor-pointer  my-2 mx-2 border p-2  overflow-hidden shadow-lg hover:shadow-none hover:scale-105 transition transform duration-100 ease-out h-[20rem] max-w-4xl'>
                <div className='flex flex-col space-y-2 w-[70%]'>
                    <div className='flex   space-x-2 items-center'>
                        <div className='relative overflow-hidden h-[2rem] w-[2rem] items-center rounded-full'>
                            <Image
                                src={authorData?.imgUrl}
                                alt="author image"
                                fill
                            />
                        </div>
                        <p className='font-semibold'>{authorData?.name}</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h2 className='text-md  font-bold max-h-[3rem] overflow-hidden'>{Article.data.title}</h2>
                        <h3 className='text-gray-500 max-h-[6rem] w-full overflow-hidden text-sm'>{Article.data.brief}</h3>
                        <span className="text-sm text-gray-500">{new Date(Article?.data?.postedOn?.toDate()).toLocaleString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        })} . {Article.data.postLength}min Read .  </span>
                        <div>
                            <span className='bg-purple-300 px-2 py-1 rounded-full'>{Article.data.category}</span>
                        </div>
                        <span className=''>
                            <FiBookmark className={`cursor-pointer w-6 h-6 ${bookmarked ? 'bg-yellow-500' : ''}`} onClick={e => setBookmarked(!bookmarked)} />
                        </span>
                    </div>
                </div>
                <div className='relative w-full  rounded-md overflow-hidden'>
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