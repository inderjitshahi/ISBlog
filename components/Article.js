import React from 'react';
import Image from 'next/image';
import logo from '../public/images/10782951_19199360.jpg';
import { AiFillPlayCircle } from 'react-icons/ai'
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook } from 'react-icons/fa'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
function Article({ Article, Author }) {
    // console.log(Article, Author, "Article");
    const DATE= new Date(Article?.data?.postedOn.toDate()).toLocaleString('en-US', {
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
                                src={Author?.data?.imgUrl}
                                fill
                                alt='article logo'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>{Author?.data?.name}</span>
                            <span className='text-gray-500 text-sm flex items-center'>{DATE} . {Article?.data?.postLength}min read. &nbsp;<span className='text-green-600' > <AiFillPlayCircle /></span><span className='text-green-600'>Listen</span></span>
                        </div>
                    </div>
                    {/* social links of author*/}
                    <div className='flex gap-2 text-lg'>
                        <BsGlobe className='cursor-pointer' />
                        <GrLinkedin className='cursor-pointer' />
                        <FaFacebook className='cursor-pointer' />
                        <BiBookBookmark className='cursor-pointer' />
                        <HiOutlineLink className='cursor-pointer' />
                    </div>
                </div>
                {/* Content */}
                <div>
                    <div className='relative h-[80vh] :w-[100%] rounded-lg overflow-hidden'>
                        <Image
                            src={Article?.data?.bannerImage}
                            fill
                            objectFit='cover'
                            alt='article logo'
                        />
                    </div>
                    <h1 className='font-semibold text-2xl mt-3 mb-1'>{Article?.data?.title}</h1>
                    <div className='text-gray-500'>
                        <h2>{Author?.data?.name}, {DATE}</h2>
                        <h2>{Article?.data?.brief}</h2>
                    </div>
                    <div className='mt-5'>
                        <p>
                            {Article?.data?.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;