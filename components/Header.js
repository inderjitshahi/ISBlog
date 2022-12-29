import React, { useContext } from 'react';
import IsblogContext from '../context/IsblogContext';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '../firebase'; 
import {TbWriting} from 'react-icons/tb'
function Header(props) {
    const router = useRouter();
    const { handleUserAuth, currentUser} = useContext(IsblogContext);
    // console.log(currentUser,"header");
    return (
        <div className='drop-shadow-xl  gap-10 p-5 bg-fuchsia-600 border-b-2 border-purple-400'>
            <div className='flex justify-between'>
                <div className='logo-container flex items-center cursor-pointer'>
                    <Link href='/'>
                        <h1 className=' text-3xl md:text-5xl text-white'>~IS~</h1>
                    </Link>
                </div>
                {currentUser ?
                    <div className='space-x-5  cursor-pointer text-white text-sm sm:text-md items-center flex'>
                        <Link href="https://port-folio-vxwv.vercel.app/" target="_blank">Me</Link>
                        <Link href={`/write/${currentUser?.email}`} >
                            <button className='button flex items-center'><TbWriting className='mr-2'/>Write</button>
                        </Link>
                        <div className='relative overflow-hidden w-10 h-10 items-center rounded-full border-purple-400 border-2' onClick={() => { auth.signOut() }}>
                            <Image
                                src={currentUser.photoURL}
                                alt="author image"
                                fill
                            />
                        </div>
                    </div> :
                    <div className=' space-x-5 cursor-pointer text-white text-sm sm:text-md flex items-center'>
                        <Link href='https://port-folio-vxwv.vercel.app/' target="_blank">
                            <div className='inline text-lg'>Me</div>
                        </Link>
                        <button className='button' onClick={handleUserAuth}>Sign in</button>
                    </div>

                }
            </div>
        </div>
    );
}

export default Header;