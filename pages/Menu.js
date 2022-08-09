import { useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'
const Menu = () => {
    const [menus,setMenus] = useState([
        {
          name:"Drp coffe",
          price: "8.85$",
          category: "Coffe",
        },
        {
          name:"Sandiwch",
          price: "8.85$",
          category: "Fast Food",
        },
        {
          name:"Cocktail sodaruch",
          price: "8.85$",
          category: "Cocktail"
        },
        {
          name:"Cheese cake",
          price: "8.85$",
          category: "Quafe Cake",
        },
        {
          name:"speciale",
          price: "8.85$",
          category: "Snacks"
        },
        {
          name:"Drp coffe",
          price: "8.85$",
          category: "Coffe"
        },
    
      ])
      const [categories, setCategories] = useState([
        {
          title: "Quafe Cake",
          desc: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
          title: "Coffe",
          desc: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
          title: "Fast Food",
          desc: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
          title: "Cocktail",
          desc: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
        {
          title: "Snacks",
          desc: "Through True Rich Attended no end it his mother since favourable real had half every him."
        },
      ])
      const [showCategorie, setShowCategorie] = useState("");
      const actifCategorie = useRef()
      function updateActifCategorie(el) {
        actifCategorie.current.classList.remove("font-bold")
        actifCategorie.current = el
        actifCategorie.current.classList.add("font-bold")
      }

  return (
    <div className='px-[24px] md:px-[120px] w-full'>
        <Header />
        <div className=' my-28'>
            <h1 className=' flex items-center uppercase text-primary text-base relative after:ml-4 after:w-12 after:h-tiny after:content-[""]  after:bg-primary '>Our Menu</h1>
            <div className=' flex md:flex-row flex-col my-8 items-center justify-between'>
              <h1 className='font-bold text-5xl md:w-1/3 md:mb-0 mb-4'>Discover Our menu Chart</h1>
              <h3 className='text-grey text-base tracking-tight md:w-1/3'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother</h3>
            </div>     
        </div>
        <div>
            <ul className='categories flex gap-6 flex-wrap '>
                <li ref={actifCategorie} className=' cursor-pointer font-bold text-lg' onClick={(e) => {
                  setShowCategorie("");
                  updateActifCategorie(e.target)
                }}>All</li>
                {
                    categories.map((categorie,index) => {
                        return <li key={index} title={categorie.title} className=' cursor-pointer text-lg' onClick={(e) => {
                          setShowCategorie(e.target.title);
                          updateActifCategorie(e.target);
                        }}>{categorie.title}</li>
                    })
                }
            </ul>
            <div className='grid gap-8 grid-cols-minMax mt-7 mb-7'>
            {
                menus.map((menu,index) => {
                    return ( (showCategorie == "") ||(menu.category == showCategorie) ) && <MenuItem key={index} item={menu} />
                })
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Menu