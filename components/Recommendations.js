import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdMarkEmailUnread } from 'react-icons/md';
import logo from '../public/images/18233896_v1032-v286-aew-071-health-logo.jpg';
import image from '../public/images/10782951_19199360.jpg';
import { useRouter } from 'next/router';
import IsblogContext from '../context/IsblogContext';
function Recommendations() {
    const router=useRouter();
    console.log(router.query);
    const [article, setArticle] = useState({
        data:{
            title:"anonymous",
            bannerImage:"/images/not_found.jpg",
            brief:"loading brief"
        }
    });
    const [author, setAuthor] = useState({
        data:{
            name:"anonymous",
            imgUrl:"/images/not_found.jpg",
        }
    });
    const { Users, Articles } = useContext(IsblogContext);
    console.log(article,author,"Article");
    useEffect(() => {
        if (Articles.length == 0) {
            return;
        }
        setArticle(Articles.find(Article => Article.id === router.query.slug));
        setAuthor(Users.find(user => user.id === article?.data?.author));
    }, [Articles,article]);

    const DATE = new Date( article?.data?.postedOn?.toDate() || new Date()).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className='flex justify-center items-center space-y-5 border-t-4 pt-2 px-2 flex-col'>
            <div className='flex items-center md:gap-5 border rounded-full px-2 py-1 w-full'>
                <AiOutlineSearch />
                <input placeholder='search' className='outline-none w-[30%]' type="text" />
            </div>
            <div className='flex flex-col items-center justify-center md:space-y-1 md:mt-5'>
                <div className='relative w-10 h-10 md:w-20 md:h-20 overflow-hidden rounded-full md:mb-1'>
                    <Image
                        src={author?.data?.imgUrl}
                        fill
                        alt="author image"
                    />
                </div>
                <span className='font-semibold'>{author?.data?.name}</span>
                <span className='text-gray-500'>{author?.data?.followerCount} followers</span>
                <div className='flex md:space-x-2'>
                    <button className='button bg-green-500 hover:bg-green-400'>follow</button>
                    <button className='button bg-green-500 hover:bg-green-400 rounded-full'><MdMarkEmailUnread /></button>
                </div>
            </div>
            <div className='md:mt-10'>
                <p className='mb-2 text-center'>More From ISBlog</p>
                <div>
                    {
                        Articles?.splice(3).map(Article => (
                            <div key={Article.id} className='border-b-2 rounded-xl p-1 cursor-pointer active:scale-95 transition transform duration-100 ease-out flex'>
                                <div className=''>
                                    <div className='flex space-x-2 items-center text-sm'>
                                        <div className='relative h-5 w-5 rounded-full overflow-hidden'>
                                            <Image
                                                src={Article?.data?.bannerImage}
                                                fill
                                                alt='article logo'
                                            />
                                        </div>
                                        <span>Inderjit Shahi</span>
                                    </div>
                                    <p className='font-semibold'>Ultimate Course For Js</p>
                                </div>
                                <div className='relative h-16 w-16 rounded-full overflow-hidden'>
                                    <Image
                                        src={image}
                                        fill
                                        alt='article logo'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Recommendations;