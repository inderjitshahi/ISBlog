import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>ISBlog</title>
        <meta name="description" content="Blogging Website to Spread Ideas using Tech" />
        <meta name="author" content="Inderjit Shahi"></meta>
      </Head>
      <Header />
      <Banner />
      <div className=' flex-1 justify-center'>
        <div className='flex flex-col  p-1 sm:p-5 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3'>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

      </div>
      <Footer/>
    </div>
  )
}
