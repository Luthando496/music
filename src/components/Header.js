import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header w-screen">
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
                {/* <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/block">Blog</Link>
                </li>
                <li className="list p-7">
                    <Link className="link duration-150 hover:border-b-[1px] pb-4 transition-all border-emerald-500" to="/contact">Contact</Link>
                </li> */}
        </ul>

        <ul className="list-icons flex justify-between items-center">
            <li className="list-icon m-2">
                <Link to="https://www.facebook.com/" className="link-icon" >
                    <img src="img/facebook.png" alt="ikhih" />
                </Link>
            </li>
            <li className="list-icon m-2">
                <Link to="https://www.instagram.com/" className="link-icon" >
                    <img src="img/instagram.png" alt="jvvhj" />
                </Link>
            </li>
            <li className="list-icon m-2">
                <Link to="https://www.twitter.com/" className="link-icon" >
                    <img src="img/twitter.png" alt="jvj" />
                </Link>
            </li>
        </ul>

    </nav>
</div>
<div className="back-img">
    <div className="back-content flex justify-center items-center h-full">
        <div className="back-title uppercase">
            <h1 className="text-7xl text-white">Spectacular sound.</h1>
            <h1 className="text-7xl text-white">No Compromises.</h1>
        </div>
    </div>

</div>
</header>
  )
}

export default Header