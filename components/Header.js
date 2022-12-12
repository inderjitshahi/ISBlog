import React from 'react';

function Header(props) {
    return (
        <div className='flex justify-center drop-shadow-xl  gap-10 p-5 bg-fuchsia-600 border-b-2 border-purple-400'>
            <div className=' max-w-7xl flex-1 flex  justify-between'>
                <div className='logo-container flex items-center cursor-pointer'>
                    <h1 className=' text-3xl md:text-5xl text-white'>~IS~</h1>
                </div>
                <div className='flex space-x-5 cursor-pointer text-white text-sm sm:text-md items-center'>
                    <div className='hidden sm:inline'>My Story</div>
                    <div className='hidden sm:inline'>Membership</div>
                    <div className='button'>SignIn</div>
                    <div className='button'>Get Started</div>
                </div>
            </div>
        </div>
    );
}

export default Header;