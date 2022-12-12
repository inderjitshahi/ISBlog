import React from 'react';
import Image from 'next/image';
function Banner(props) {
    return (
        <div className='bg-purple-600 justify-center items-center'>
            <div className='px-5 py-5 sm:px-10  flex md:w-[80%] md:mx-auto flex-col sm:flex-row-reverse'>
                <div className='w-[50%]'>
                    <video autoPlay loop playsInline muted className=''>
                        <source src='/IS.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className='space-y-5 w-[50%]'>
                    <h1 className='text-2xl md:text-4xl lg:text-6xl'>Read Write and Grow</h1>
                    <h3 className='text-md lg:text-lg font-semibold'>
                        Discover, Teach and explore expertise
                    </h3>
                    <button className='button'>Start Reading</button>
                </div>

            </div>

        </div>
    );
}

export default Banner;