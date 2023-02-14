import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchProducts } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'




const MusicResults = () => {
    const {id} = useParams()
    const {products,loading} = useSelector(state => state.product)
    console.log(products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts(id))

    }, [])
  return (
    <>
    <Navbar />
    {loading && <Loader />}
    {products && products && (
        <section className='solo-artist w-screen'>
        <div className='solo-artist-img' style={{backgroundImage:`url(${products.artist && products.artist.picture_xl})`}}>
        <div className='solo-outer'>
            <div className='solo-inner'>
                <h1>{products.artist && products.artist.name}</h1>
            </div>
        </div>
        </div>
    </section>)}

    <section className='results w-screen mt-24'>
        
        <div className='results-outer'>
          {products && products &&( 
            <div className='results-card'>
             <div className='results-card-img'>
                <img src={products && products.album && products.album.cover_xl} alt={products && products.title_short}  />
             </div>
             <div className='results-card-text'>
                <h1>Artist: {products && products.artist && products.artist.name}</h1>
                <h1>Song title: {products && products.title_short}</h1>
                <h1>Album: {products && products.album && products.album.title}</h1>
                <h1>Release Date: {products.album && products.album.release_date}</h1>
                <h1>Track Number: {products && products.track_position && products.track_position}</h1>
             </div>
           
            </div>)}
        
        </div>
        
        
    </section>

    <Footer />
    </>
  )
}

export default MusicResults