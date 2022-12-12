import React from 'react';
import Article from '../../components/Article';
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations';
function Post(props) {
    return (
        < div className="grid grid-cols-12">
            <div className='col-span-1'>
                <ReadersNav className="col-span-1" />
            </div>
            <div className='col-span-8'>
                <Article className="" />
            </div>
            <div className='col-span-3'>
                <Recommendations className="" />
            </div>
        </div>
    );
}

export default Post;