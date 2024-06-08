import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewProducts = () => {
    const [data, changeData] = useState(
        { 
            "articles":[]
    })

    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">

                            {data.articles.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <div class="card">
                                            <img src={value.urlToImage} height="250px"class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.author}</h5>
                                                <p class="card-text">{value.title}</p>
                                                <p class="card-text">{value.name}</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts