import React from 'react'
const Category = ({categorie}) => {
  return (
    <div className=' flex flex-col bg-categorie md:p-16 py-6 px-4  cursor-pointer'>
        <img src={categorie.link} alt='icon' className=' w-10 h-10 mb-6'></img>
        <h1 className='font-bold text-3xl mb-7'>{categorie.title}</h1>
        <h3 className='text-grey text-sm tracking-tight mb-3'>{categorie.desc}</h3>
    </div>
  )
}

export default Category