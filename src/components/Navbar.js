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
    <section id="header-music " className="header-music bg-black w-screen">
    <div className="header-container w-full">
    <nav className="navbar p-4 w-10/12 mx-auto flex justify-between items-center">

        <div className="logo">
            <Link to="/">
                <img src="img/logo.png.webp" alt="Logo" />
            </Link>
        </div>

        <ul className="lists flex justify-between items-center text-white uppercase text-2xl">
                <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Home</Link>
                </li>
                <li className="list p-7">
                    <Link className="link border-emerald-500 duration-150 hover:border-b-[1px] pb-4 transition-all" to="/about">About</Link>
                </li>
                <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/music">Music</Link>
                </li>
                <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Blog</Link>
                </li>
                <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/">Contact</Link>
                </li>
        </ul>

        <form className="list-icons flex basis-1/4 items-center" onSubmit={Submit}>
           <div className="form-input w-full">
            <input type="text" className="search-input w-full" placeholder="search songs or artist or album" value={search} onChange={e => setSearch(e.target.value.toLowerCase())}  />
           </div>
        </form>

    </nav>
</div>
</section>
</>
  )
}

export default Navbar