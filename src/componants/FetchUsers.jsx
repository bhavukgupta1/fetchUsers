import React from 'react'
import User from './User'
import '../App.css';
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function FetchUsers() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    useEffect(() => {
        fetchMoreData()
    }, [])
    const fetchMoreData = async () => {


        let url = `https://reqres.in/api/users?page=${page}`

        let user = await fetch(url)
        let parsedData = await user.json()
        console.log(parsedData, page);


        setpage(page + 1)
        setData(data.concat(parsedData.data))
        setLoading(false)
        setTotalResults(parsedData.totalResults)

    };





    return (






        <div>


            <nav className="container d-flex justify-content-between my-3" style={{ width: 650 }}>

                <span class="navbar-text">
                    <h2> Visitors     </h2>
                </span>
                <span >
                    <button className=' colorBtn btn  btn-sm my-3'>Add Visitor</button>
                </span>


            </nav>







            <InfiniteScroll style={{ overflow: "visible" }}
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length !== totalResults}
                loader=''>




                <div className="container" style={{ width: 600 }}>


                    <div className='d-flex justify-content-between'>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Status</span>
                        <span>Actions</span>
                    </div>
                </div>
                {data.map((element, key) => {
                    // console.log(element);

                    return (

                        <div>

                            <User id={element.id} avatar={element.avatar} uname={element.first_name} email={element.email} />

                        </div>
                    )
                })
                }




            </InfiniteScroll>





        </div>
    )
}