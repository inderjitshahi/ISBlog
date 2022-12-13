import React from 'react';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations';
function Post(props) {
    return (
        <>
            < div className="flex flex-col md:grid md:grid-cols-12">
                <div className='md:col-span-1'>
                    <ReadersNav className="" />
                </div>
                <div className='md:col-span-8'>
                    <Article className="" />
                </div>
                <div className='md:col-span-3'>
                    <Recommendations className="" />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Post;