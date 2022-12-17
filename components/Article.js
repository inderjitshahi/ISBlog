import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'
import IsblogContext from '../context/IsblogContext';
import { useRouter } from 'next/router';
function Article({author,article}) {
    const router = useRouter();
    // console.log(author,article);
    const DATE = new Date(article?.data?.postedOn?.toDate() || new Date()).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className='border-x-2 '>
            <div className='p-2'>
                {/* Post Header */}
                <div className='flex justify-between mb-2 p-1 items-center border-b-2'>
                    {/* author profile */}
                    <div className='flex gap-2'>
                        <div className='relative h-10 w-10 rounded-full overflow-hidden'>
                            <Image
                                src={author?.data?.imgUrl}
                                fill
                                alt='article logo'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>{author?.data?.name}</span>
                            <span className='text-gray-500 text-sm flex items-center'>{DATE} . {article?.data?.postLength}min read.</span>
                        </div>
                    </div>
                    {/* social links of author*/}
                    <div className='flex gap-2 text-lg'>
                        <BsGlobe className='cursor-pointer' />
                        <GrLinkedin className='cursor-pointer' />
                        <FaFacebook className='cursor-pointer' />
                    </div>
                </div>
                {/* Content */}
                <div>
                    <div className='relative h-[80vh] :w-[100%] rounded-lg overflow-hidden'>
                        <Image
                            src={article?.data?.bannerImage}
                            fill
                            objectFit='cover'
                            alt='article logo'
                        />
                    </div>
                    <div className='border-b-2 p-2 flex flex-col space-y-2'>
                        <h1 className='font-semibold text-2xl mt-3 mb-1'>{article?.data?.title}</h1>
                        <h2 className='text-gray-400 text-sm'>{author?.data?.name}, {DATE}</h2>
                        <h2 className='text-gray-400 text-sm'>{article?.data?.brief}</h2>
                    </div>
                    <div className='mt-5 p-2'>
                        <p>
                            {article?.data?.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;