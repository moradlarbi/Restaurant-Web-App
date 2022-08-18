import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import Article from '../../components/Article'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {
            "id": "1",
            "title": "The best guacamole recipe with only 4 ingredients",
            "desc": "It is a long established fact that a reader will be distracted by the readable content of a page.",
            "date": "22/05/2001",
            "writer": "Morad Larbi",
            "img": "/assets/blog1.svg",
        },
        {
            "id": "2",
            "title": "How to store Tomatoes (and Whether to Refrigerate Them)",
            "desc": "Writing UX copies can be a little frustrating and confusing, and sometimes ",
            "date": "22/05/2001",
            "writer": "Morad Larbi",
            "img": "/assets/blog2.svg",
        },
        {
            "id": "3",
            "title": "The Absolute Best Way to Cook French Fries",
            "desc": "It is a long established fact that a reader will be distracted by the readable content of a page.",
            "date": "22/05/2001",
            "writer": "Morad Larbi",
            "img": "/assets/blog3.svg",
        },
        {
            "id": "4",
            "title": "A guide to Thai curries",
            "desc": "Writing UX copies can be a little frustrating and confusing, and sometimes ",
            "date": "22/05/2001",
            "writer": "Morad Larbi",
            "img": "/assets/blog4.svg",
        },
    ])
    const [featuredBlogs, setFeaturedBlogs] = useState([0,1,2])
    const [actifBlog,setActifBlog] = useState(featuredBlogs[0]);
    
  return (
    <div className='px-0 md:px-[120px] w-full'>
        <Header />
        <div className=' w-full flex flex-col items-center mt-10'>
            <h1 className=' text-6xl mb-14'>Featured Blogs</h1>
            <div className='w-full grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-8'>
                <div className=' row-span-3 relative my-2 before:content-[""] before:w-full before:z-10 before:h-full before:absolute before:top-0 before:left-0 before:bg-darkGrey/60 '>
                    <img src={blogs[actifBlog].img} alt="" className='absolute top-0 left-0 z-0 w-full h-full'></img>
                    <div className='relative z-20 flex flex-col pb-10 h-full'>
                        <button className=' uppercase bg-brown/50 px-8 py-5 w-fit '>Trending</button>
                        <h1 className=' text-6xl px-16 flex-auto flex items-end mb-14'>{blogs[actifBlog].title}</h1>
                        <div className='flex px-16 justify-between'>
                            <div className='flex items-center'>
                                <img src='/assets/writer-blog.png' alt="" className=' mr-4'></img>
                                <div className=' flex flex-col gap-2'>
                                    <h2>{blogs[actifBlog].writer}</h2>
                                    <h2 className=' text-grey'>{blogs[actifBlog].date}</h2>
                                </div>
                            </div>
                            <div className=' flex items-center'>
                                <Link href={{
                                    pathname: "/Blogs/"+ blogs[actifBlog].id,
                                    query: {
                                        data: JSON.stringify(blogs[actifBlog]),
                                    },
                                }}>
                                    <a className=' flex cursor-pointer'>Read More <img src='/assets/whiteArrow.svg' alt="" className=' ml-2'></img></a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    featuredBlogs.map((i,index) => {
                        return <div className=' row-span-1 flex gap-8' key={index} indice={i}>
                            <img src={blogs[i].img} alt="" className=' aspect-square cursor-pointer' onClick={(e) => {
                            setActifBlog(i)
                        }}></img>
                            <div className=' flex flex-col gap-y-3'>
                                <h1 className=' text-3xl mt-2'>{blogs[i].title}</h1>
                                <h3 className=' text-grey'>{blogs[i].desc}</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
        <div className=' w-full flex flex-col items-center mt-20'>
            <h1 className=' text-6xl mb-14'>All Articles</h1>
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-x-24 gap-y-10'>
            {
                blogs.map((blog,index) => {
                    return <Article blog={blog} key={index} />
                })
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Blogs