import React from 'react';
import Image from 'next/image';
import { FiBookmark } from 'react-icons/fi';
import Link from 'next/link';
function PostCard({ img, authImg }) {
    return (
        <Link href='/post/123'>
            <div className='flex rounded-md cursor-pointer gap-5 my-3 mx-3 border p-2  shadow-lg hover:shadow-none hover:scale-105 transition transform duration-100 ease-out'>
                <div className='space-y-2 flex-grow'>
                    <div className='flex gap-2'>
                        <div className='relative overflow-hidden w-5 h-5 items-center rounded-full'>
                            <Image
                                src='/images/18233896_v1032-v286-aew-071-health-logo.jpg'
                                alt="author image"
                                fill
                            />
                        </div>
                        <p className='font-semibold'>Inderjit</p>
                    </div>
                    <div className=''>
                        <h2 className='text-xl  font-bold'>Learn Js</h2>
                        <h3 className='text-gray-500'>Best Js Practices You Should Adopt for modern development</h3>
                        <span className="text-sm text-gray-500">November 15,2022 . 5min Read .  </span>
                        <span className='text-sm bg-purple-200 px-2 py-1 rounded-xl '>Coding</span>
                        <span className='cursor-pointer'>
                            <FiBookmark className='h-6 w-6 ml-auto' />
                        </span>
                    </div>
                </div>
                <div className='relative w-32 h-32 rounded-md overflow-hidden'>
                    <Image
                        src="/images/10782951_19199360.jpg"
                        fill
                        alt='Article Image'
                    />
                </div>
            </div>
        </Link>

    );
}

export default PostCard;