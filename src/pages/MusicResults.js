import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchProducts } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Error from '../components/Error'




const MusicResults = () => {
    const {id} = useParams()
    const {products,loading,err} = useSelector(state => state.product)
    console.log(products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts(id))

    }, [])
  return (
    <>
    <Navbar />
    {products && products.error && err &&  <Error name={products.error.message || err} />}
    {err &&  <Error name={err} />}
    {products && products && (
        <section className='solo-artist w-screen'>
        <div className='solo-artist-img' style={{backgroundImage:`linear-gradient(rgba(15, 8, 200, 0.5),rgba(12, 0, 0, 0.5)), url(${products && products.data && products.data.artist.visuals.gallery.items[0].sources[0].url})`,backgroundPosition:'center',backgroundSize:'cover'}}>
        <div className='solo-outer'>
            <div className='solo-inner'>
                <h1>{products.data && products.data.artist.profile.name}</h1>
            </div>
        </div>
        </div>
    </section>)}

    <section className='results  w-screen '>
    {loading ?  <Loader /> :(
      <>
      <div className='results-outer'>
          {products && products &&(
            <>

            <div className='results-card'>
             <div className='results-card-img'>
                <img src={products && products.data && products.data.artist.visuals.avatarImage.sources[0].url} alt={products.data && products.data.artist.profile.name}  />
             </div>
             <div className='results-card-text'>
                <h1>Album: {products.data && products.data.artist.profile.name}</h1>
             </div>
            </div>
            </>)}
        </div>
        



      <div className="ace">
      <h1 className='text-5xl tid text-light text-center m-24'>Albums by {products.data && products.data.artist.profile.name}</h1>
      <div className="albums-container mt-9 py-7">
        <>
    {products && products.data && products.data.artist.discography.albums.items && products.data.artist.discography.albums.items.map(music => (
        <div className="card">
            <div className="card-img">

                 <img src={music.releases.items[0].coverArt.sources[2].url} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="fonh m-4 text-light">Album: {music.releases.items[0].name}</h1>

            </div>
        </div>
    ))}
        </>
      </div>
      </div> 
      </>
      )}
        
        
        
    </section>

    <Footer />
    </>
  )
}

export default MusicResults