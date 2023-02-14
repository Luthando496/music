import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from'react-redux'
import { fetchSingleProduct } from '../store/actions'


const Navbar = () => {
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const Submit =(e)=>{
        e.preventDefault()
        dispatch(fetchSingleProduct(search))
        setSearch('')
        navigate(`/music/search/${search}`)

        
    }
    
  return (
    <>
    <section id="header-music " class="header-music bg-cyan-500">
    <div class="header-container w-full">
    <nav class="navbar p-4 w-10/12 mx-auto flex justify-between items-center">

        <div class="logo">
            <Link to="/">
                <img src="img/logo.png.webp" alt="Logo" />
            </Link>
        </div>

        <ul class="lists flex justify-between items-center text-white uppercase text-2xl">
                <li class="list p-7">
                    <Link class="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Home</Link>
                </li>
                <li class="list p-7">
                    <Link class="link border-emerald-500 duration-150 hover:border-b-[1px] pb-4 transition-all" to="/about">About</Link>
                </li>
                <li class="list p-7">
                    <Link class="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/music">Music</Link>
                </li>
                <li class="list p-7">
                    <Link class="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Blog</Link>
                </li>
                <li class="list p-7">
                    <Link class="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Contact</Link>
                </li>
        </ul>

        <form class="list-icons flex  items-center" onSubmit={Submit}>
           <div class="form-input">
            <input type="text" class="search-input" placeholder="search songs or artist" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}  />
           </div>
        </form>

    </nav>
</div>
</section>
</>
  )
}

export default Navbar