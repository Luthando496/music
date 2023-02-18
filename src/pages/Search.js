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
    },[dispatch,name])

    console.log(singlePro)

  return (
    <>
    <Helmet>
        <title>{name} Results</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <Navbar />

    {loading && <Loader />}

<section className="albums">
    <h1 className="h1">Albums</h1>
    

    {loading && <Loader />}
    
    
    {singlePro && singlePro.data && singlePro.data.length < 1 && <Error name={'No Results of that search available'} />}
    {singlePro === null && <Error name={'No Results. Netlify'} />}


    <div className="albums-container">
    {singlePro && singlePro.length > 0 && singlePro.map(music => (
            music.albums && music.albums.items.map(i =>(
        <>
        <Link to={`/music/${i.data.artists.items[0].uri.split(':')[2]}`} key={i.data.artists.items[0].uri.split(':')[2]}>
        <div className="card">
            <div className="card-img">

                 <img src={i.data.coverArt.sources[2].url} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Artist: {i.data.artists.items[0].profile.name} {i.data.artists.items[1] && i.data.artists.items[1].profile.name}</h1>
                <h1 className="m-4">Album: {i.data.name}</h1>
                {/* <h1 className="m-4 ">Title: {music.title_short}</h1> */}
                <h2 className="m-4">Year : {i.data.date.year}</h2>
            </div>
        </div>
        </Link>
        </>
            ))
    ))}
    </div>

    <h1 className='text-6xl font-light m-9'>Tracks or Songs</h1>
    <div className="albums-container">

    {singlePro && singlePro.length > 0 && singlePro.map(music => (
            music.tracks && music.tracks.map(i =>(
        <>
        <Link to={`/music/${i.data.id}`} key={i.data.id}>
        <div className="card">
            <div className="card-img">

                 <img src={i.data.albumOfTrack.coverArt.sources[2].url} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Song: {i.data.albumOfTrack.name}</h1>
                <h1 className="m-4">Artist: {i.data.artists.items[0].profile.name} {i.data.artists.items[1] && i.data.artists.items[1].profile.name}</h1>
                {/* <h2 className="m-4">Year : {i.data.date.year}</h2> */}
            </div>
        </div>
        </Link>
        </>
            ))
    ))}
    </div>

    <h1 className='text-6xl font-light m-9'>Artists or Bands</h1>

    <div className="albums-container">

    {singlePro && singlePro.length > 0 && singlePro.map(music => (
            music.artists && music.artists.items.map(i =>(
        <>
        <Link to={`/music/${i.data.uri.split(':')[2]}`} key={i.data.uri.split(':')[2]}>
        <div className="card">
            <div className="card-img">

                 <img src={i.data.visuals && i.data.visuals.avatarImage ? i.data.visuals.avatarImage.sources[0].url : '../../public/img/man-303792_640.png'} alt="artist1" />
            </div>
            <div className="card-body">
                <h1 className="m-4">Artist: {i.data.profile.name}</h1>
                {/* <h1 className="m-4">Artist: {i.data.artists.items[0].profile.name} {i.data.artists.items[1] && i.data.artists.items[1].profile.name}</h1> */}
                {/* <h2 className="m-4">Year : {i.data.date.year}</h2> */}
            </div>
        </div>
        </Link>
        </>
            ))
    ))}
    </div>

    </section>

    <Footer />
    </>
  )
}

export default Search