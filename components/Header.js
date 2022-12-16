import React, { useContext } from 'react';
import IsblogContext from '../context/IsblogContext';
import Modal from 'react-modal';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import PostModal from './PostModal';
import Image from 'next/image';
Modal.setAppElement('#__next')

const modalStyle = {
    content: {
        width:"90%",
        maxHeight: "90vh",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#fff',
        padding: ".25rem",
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10,11,13,0.75)',
    }
}

function Header(props) {
    const router = useRouter();
    const { handleUserAuth, currentUser, handleSignOut } = useContext(IsblogContext);
    return (
        <div className='flex drop-shadow-xl  gap-10 p-5 bg-fuchsia-600 border-b-2 border-purple-400'>
            <div className=' flex w-full flex-col  space-y-3 justify-center sm:space-y-0 items-center sm:flex-row  max-w-10xl sm:justify-between sm:items-center'>
                <div className='logo-container flex items-center cursor-pointer '>
                    <Link href='/'>
                        <h1 className=' text-3xl md:text-5xl text-white'>~IS~</h1>
                    </Link>
                </div>
                {currentUser ?
                    <div className='flex space-x-5  cursor-pointer text-white text-sm sm:text-md items-center'>
                        <Link href="https://port-folio-vxwv.vercel.app/" target="_blank">Contact</Link>
                        <Link href='/?addNew=1'>
                            <button className='button'>Write</button>
                        </Link>
                        <div className='relative overflow-hidden w-10 h-10 items-center rounded-full border-purple-400 border-2' onClick={handleSignOut}>
                            <Image
                                src={currentUser.photoURL}
                                alt="author image"
                                fill
                            />
                        </div>
                    </div> :
                    <div className='flex space-x-5 cursor-pointer text-white text-sm sm:text-md items-center top-1/2 '>
                        <Link href='https://port-folio-vxwv.vercel.app/' target="_blank">
                            <div className='inline'>Contact</div>
                        </Link>
                        <button className='button' onClick={handleUserAuth}>Sign in</button>
                    </div>

                }
            </div>
            <Modal
                isOpen={Boolean(router.query.addNew) && currentUser}
                onRequestClose={() => router.push('/')}
                style={modalStyle}
            >
                <PostModal />
            </Modal>
        </div>
    );
}

export default Header;