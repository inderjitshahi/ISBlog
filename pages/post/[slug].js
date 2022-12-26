import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations';
import IsblogContext from '../../context/IsblogContext';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db, auth, provider } from "../../firebase";
function Post(props) {

    const { Articles,Users} = useContext(IsblogContext);
    // console.log(Users,"slug");
    const router = useRouter();
    // const [Articles, setArticles] = useState([]);
    // const [Users, setUsers] = useState([]);
    const [article, setArticle] = useState({
        data: {
            title: "anonymous",
            bannerImage: "/images/not_found.jpg",
            brief: "loading brief",
            body: "Cannot Load Main Content Now"
        }
    });
    const [author, setAuthor] = useState({
        data: {
            name: "anonymous",
            imgUrl: "/images/not_found.jpg",
        }
    });
    useEffect(() => {
        if (Articles.length == 0) {
            return;
        }
        setArticle(prev => (Articles.find(Article => Article.id === router.query.slug) || prev));
        setAuthor(prev => (Users.find(user => user.id === article?.data?.author) || prev));
    }, [Articles,Users,author,article]);
    // useEffect(() => {
    //     const getArticles = async () => {
    //         const querySnapshot = await getDocs(collection(db, "Articles"));
    //         setArticles([...Articles, ...querySnapshot.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     ...doc.data()
    //                 }
    //             }
    //         })]);
    //     }
    //     getArticles();
    // }, []);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const querySnapshot = await getDocs(collection(db, "Users"));
    //         setUsers(querySnapshot.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     ...doc.data()
    //                 }
    //             }
    //         }));
    //     }
    //     getUsers();
    // }, []);

    // console.log(author, "slug");

    return (
        <>
            <Header />
            < div className="flex flex-col md:grid md:grid-cols-12">
                <div className='md:col-span-8'>
                    <Article
                        author={author}
                        article={article}
                    />
                </div>
                <div className='md:col-span-4'>
                    <Recommendations
                        author={author}
                        Articles={Articles}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Post;