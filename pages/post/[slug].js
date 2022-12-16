import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations';
import IsblogContext from '../../context/IsblogContext';
function Post(props) {
    const [article, setArticle] = useState([]);
    const [author, setAuthor] = useState([]);
    const { Users, Articles } = useContext(IsblogContext);
    const router = useRouter();
    useEffect(() => {
        if (Article.length == 0) {
            return;
        }
        setArticle(Articles.find(Article => Article.id === router.query.slug));
        setAuthor(Users.find(user => user.id === article.data?.author));
    }, [article]);
    return (
        <>
            <Header />
            < div className="flex flex-col md:grid md:grid-cols-12">
                <div className='md:col-span-8'>
                    <Article
                        slug={router.query.slug}
                        className="" />
                </div>
                <div className='md:col-span-4'>
                    <Recommendations
                        Author={author}
                        Articles={Articles}
                        className="" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Post;