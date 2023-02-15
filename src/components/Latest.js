import React from 'react'


const Latest = () => {
  return (
    <>
    <section className="latest">
    <h1 className="h1">latest Releases</h1>

    <div className="latest-container">
        <div className="card">
            <div className="card-img">
                 <img src="img/artist5.jpg" alt="artist1" />
            </div>
            <div className="card-body">
                <h1>Thunder cat</h1>
                <h2>2017</h2>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                <img src="img/artist6.jpg" alt="artist1" />
            </div>
            <div className="card-body">
                <h1>Adele</h1>
                <h2>2017</h2>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                 <img src="img/artist3.jpg" alt="artist1" />
            </div>
            <div className="card-body">
                <h1>Thunder cat</h1>
                <h2>2018</h2>
            </div>
        </div>
        <div className="card">
            <div className="card-img">
                 <img src="img/artist4.jpg" alt="artist1" />
            </div>
            <div className="card-body">
                <h1>A.K.A</h1>
                <h2>2020</h2>
            </div>
        </div>
    </div>

</section>


<section className="popular">
        <h1 className="h1">Most popular</h1>

        <div className="latest-container">
            <div className="card">
                <div className="card-img">
                    <img src="img/pop1.jpg" alt="popularImage" />
                </div>
                <div className="card-body">
                    <h1>Thunder cat</h1>
                    <h2>2017</h2>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="./img/pop2.jpg" alt="popularImage" />
                </div>
                <div className="card-body">
                    <h1>Adele</h1>
                    <h2>2017</h2>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="./img/pop3.jpg" alt="popularImage" />
                </div>
                <div className="card-body">
                    <h1>Thunder cat</h1>
                    <h2>2018</h2>
                </div>
            </div>
            <div className="card">
                <div className="card-img">
                    <img src="./img/pop4.jpg" alt="popularImage" />
                </div>
                <div className="card-body">
                    <h1>A.K.A</h1>
                    <h2>2020</h2>
                </div>
            </div>
        </div>

    </section>
</>
  )
}

export default Latest