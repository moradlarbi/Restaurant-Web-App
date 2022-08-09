import React from 'react'

const BlogItem = ({item}) => {
  return (
    <div className='mt-4 pt-8 cursor-pointer bg-darkGrey'>
        <div className='px-6 pb-10'>
            <h3 className=' text-grey text-xs mb-4'>{item.date}</h3>
            <h1 className=' text-3xl font-bold mb-4'>{item.title}</h1>
            <h4 className=' text-grey text-base'>{item.overview}</h4>
        </div>
        <img src='/assets/blog-item.png' alt='blog img'></img>
    </div>
  )
}

export default BlogItem