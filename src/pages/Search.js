import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import {useDispatch,useSelector} from 'react-redux'
import { fetchSingleProduct } from '../store/actions'
import Navbar from '../components/Navbar'
import {Helmet} from 'react-helmet'
import Loader from '../components/Loader'
import Error from '../components/Error'



const Search = () => {
    const {name} = useParams()

    const dispatch = useDispatch()
    const {singlePro,loading} = useSelector(state => state.product)



    useEffect(()=>{
        dispatch(fetchSingleProduct(name))
    },[])
  return (
    <>
    <Helmet>
        <title>{name} Results</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar />

    {loading && <Loader />}

<section className="albums">
    <h1 className="h1">Most Popular Songs of {name}</h1>
    

    {loading && <Loader />}
    
    
    {singlePro && singlePro.data.length < 1 && <Error name={'No Results of that search available'} />}

    <div className="albums-container">
    {singlePro && singlePro.data && singlePro.data.length > 1 && singlePro.data.map(music => (
        <Link to={`/music/${music.id}`} key={music.id}>

        <div className="card">
            <div className="card-img">
                 <img src={music.album.cover_xl} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Artist: {music.artist.name}</h1>
                <h1 className="m-4">Album: {music.album.title}</h1>
                <h1 className="m-4 ">Title: {music.title_short}</h1>
                <h2 className="m-4">Year : 2017</h2>
            </div>
        </div>
        </Link>
    ))}

    </div>

    </section>

    <Footer />
    </>
  )
}

export default Search