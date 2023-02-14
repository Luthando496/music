import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-black w-screen" id="footer">
    <div className="footer-container flex justify-center items-center">
        <ul className='flex justify-between items-center'>
            <li>
                <Link to="/" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/about" className='link' >About</Link>
            </li>
            <li>
                <Link to="/" className='link' >Blog</Link>
            </li>
            <li>
                <Link to="/music" className='link' >Music</Link>
            </li>
        </ul>
    </div>
</footer>
  )
}

export default Footer