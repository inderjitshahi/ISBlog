import React, { useContext } from 'react';
import IsblogContext from '../context/IsblogContext';
import Modal from 'react-modal';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import PostModal from './PostModal';

Modal.setAppElement('#__next')

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%,-50%)',
        backgroundColor: '#fff',
        padding: "1rem",
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
        <div className='flex justify-center drop-shadow-xl  gap-10 p-5 bg-fuchsia-600 border-b-2 border-purple-400'>
            <div className=' max-w-7xl flex-1 flex flex-col items-center space-y-5 sm:flex-row  justify-between'>
                <div className='logo-container flex items-center cursor-pointer'>
                    <h1 className=' text-3xl md:text-5xl text-white'>~IS~</h1>
                </div>
                {currentUser ?
                    <div className='flex space-x-5 cursor-pointer text-white text-sm sm:text-md items-center'>
                        <Link href='https://port-folio-jydi.vercel.app/' target="_blank">
                            <div className='inline'>My Story</div>
                        </Link>
                        <Link href='/?addNew=1'>
                            <button className='button'>Write</button>
                        </Link>
                        <button className='button' onClick={handleSignOut}>Sign out</button>
                    </div> :
                    <div className='flex space-x-5 cursor-pointer text-white text-sm sm:text-md items-center'>
                        <div className='inline'>My Story</div>
                        <button className='button' onClick={handleUserAuth}>Sign in</button>
                    </div>

                }
            </div>
            <Modal
                isOpen={Boolean(router.query.addNew)}
                onRequestClose={() => router.push('/')}
                style={modalStyle}
            >
                <PostModal />
            </Modal>
        </div>
    );
}

export default Header;