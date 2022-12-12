import React from 'react';
import Image from 'next/image';
import logo from '../public/images/10782951_19199360.jpg';
import { AiFillPlayCircle } from 'react-icons/ai'
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook } from 'react-icons/fa'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
function Article(props) {
    return (
        <div className='border-r-2 border-l-2'>
            <div className='p-2 h-screen'>
                {/* Post Header */}
                <div className='flex justify-between mb-2 p-1 items-center border-b-2'>
                    {/* author profile */}
                    <div className='flex gap-2'>
                        <div className='relative h-10 w-10 rounded-full overflow-hidden'>
                            <Image
                                src={logo}
                                fill
                                alt='article logo'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>Inderjit Shahi</span>
                            <span className='text-gray-500 text-sm flex items-center'>June 15 . 5min read. &nbsp;<span className='text-green-600' > <AiFillPlayCircle /></span><span className='text-green-600'>Listen</span></span>
                        </div>
                    </div>
                    {/* social links of author*/}
                    <div className='flex gap-2 text-lg'>
                        <BsGlobe className='cursor-pointer' />
                        <GrLinkedin className='cursor-pointer'/>
                        <FaFacebook className='cursor-pointer'/>
                        <BiBookBookmark className='cursor-pointer'/>
                        <HiOutlineLink className='cursor-pointer'/>
                    </div>
                </div>
                {/* Content */}
                <div>
                    <div className='relative h-[50vh] w-[100%] rounded-full overflow-hidden'>
                        <Image
                            src={logo}
                            fill
                            objectFit='cover'
                            alt='article logo'
                        />
                    </div>
                    <h1 className='font-semibold text-2xl mt-3 mb-1'>Ultimate Js Course for beginners, Lets Start</h1>
                    <div className='text-gray-500'>
                        <h2>Inderjit Shahi, June, 2022</h2>
                        <h2>Best Course to learn</h2>
                    </div>
                    <div className='mt-5'>
                        <p>

                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;