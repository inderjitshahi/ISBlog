import React from 'react';
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image';
import Link from 'next/link';

function ReadersNav(props) {
    return (
        <div className=' flex md:flex-col  md:h-screen  justify-center items-center p-2'>
            <Link href='/'>
                <div>
                    <p className='text-xl md:text-2xl lg:text-4xl'>~IS~</p>
                </div>
            </Link>

            <div className='flex flex-1 md:flex-col justify-center gap-3 text-2xl text-gray-500'>
                <HiOutlineHome className='cursor-pointer'/>
                <FiBell className='cursor-pointer'/>
                <BiBookmarks className='cursor-pointer'/>
                <RiArticleLine className='cursor-pointer'/>
                <BsPencilSquare className='cursor-pointer'/>
            </div>
            <div className='cursor-pointer relative w-8 h-8 md:h-10 md:w-10 overflow-hidden rounded-full'>
                <Image
                    src='/images/18233896_v1032-v286-aew-071-health-logo.jpg'
                    fill
                    alt="profile Image"
                />
            </div>
        </div>
    );
}

export default ReadersNav;