import { useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'
const Menu = () => {
  const [categories, setCategories] = useState([
    {
      title: "quafe cake",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/6X7xZbR/cake.png"
    },
    {
      title: "snacks",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/tChxMXz/snacks.png"
    },
    {
      title: "coffee",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/RzSQmVM/coffee.png"
    },
    {
      title: "cocktail",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/nCDrQZG/cocktail.png"
    },
    {
      title: "fast food",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/t3mVXyc/fast-food.png"
    },
    {
      title: "grill",
      desc: "Through True Rich Attended no end it his mother since favourable real had half every him.",
      link: "https://i.ibb.co/Qjx42v2/grill.png"
    },
  ])
  const [menus,setMenus] = useState([
    {
      name:"Drp coffe",
      price: "8.85$",
      category: "coffee",
      link: "https://i.ibb.co/SRygcRN/drp-cofee.png"
    },
    {
      name:"Sandiwch",
      price: "4$",
      category: "fast food",
      link: "https://i.ibb.co/wcdn5wL/sandwich.png"
    },
    {
      name:"Cocktail",
      price: "6$",
      category: "cocktail",
      link: "https://i.ibb.co/vzYPVNL/cocktail.png"
    },
    {
      name:"quafe brade",
      price: "9.85$",
      category: "quafe cake",
      link: "https://i.ibb.co/dfmSwMj/quafe-brade.png"
    },
    {
      name:"french fries",
      price: "3.85$",
      category: "snacks",
      link: "https://i.ibb.co/zhnQ99s/french-fries.png"
    },
    {
      name:"fruit salade",
      price: "5$",
      category: "snacks",
      link: "https://i.ibb.co/FX6zx15/fruit-salad.png"
    },
    {
      name:"chwimn noodle",
      price: "5$",
      category: "snacks",
      link: "https://i.ibb.co/vqzRk6v/chowmin-nodle.png"
    },
    {
      name:"cola",
      price: "5$",
      category: "cocktail",
      link: "https://i.ibb.co/HhDvhYT/coka-cola.png"
    },
    {
      name:"dalgona coffee",
      price: "5$",
      category: "coffee",
      link: "https://i.ibb.co/pdkgFpN/dalgona-cofee.png"
    },
    {
      name:"choco cake",
      price: "6$",
      category: "quafe cake",
      link: "https://i.ibb.co/9ZQV83p/choco-cake.png"
    },
    {
      name:"chicken burger",
      price: "5$",
      category: "grill",
      link: "https://i.ibb.co/KsWDFnp/chicken-burger.png"
    },
    {
      name:"chinese soupe",
      price: "5$",
      category: "snacks",
      link: "https://i.ibb.co/kQG2MRz/chinese-soup.png"
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