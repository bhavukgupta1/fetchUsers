import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../App.css'
export default function User(props) {
    let { uname, id, email, avatar } = props
    const ref = useRef(null)
    const [style, setStyle] = useState({ color: "green" })
    // console.log(props);
    const [status, setStatus] = useState("active")



    useEffect(() => {
        CheckStatus()
    }, [])

    const CheckStatus = () => {
        // console.log(id);
        if (id % 3 === 0) {
            setStatus("inactive")
            setStyle({ color: "red" })
            // console.log(id);
        }
        else if (id % 5 === 0) {
            setStatus("removed")
            setStyle({ color: "grey" })
            // console.log(id);
        }

    }
    // const handleClick = () => {
    //     setDisplay({ display: 'block' })
    //     ref.current.click()
    // }

  
    return (






        <div className="container my-3" style={{ width: 600 }}>




            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                   
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h3>Contact Details</h3>
                        </div>
                        <div className="modal-header">
                            <div className="modal-title ">
                                <div >
                                    <img width={30} height={30} src={avatar} alt="image" className='m-2' />
                                    <span className='username navbar-text' style={{ cursor: 'pointer', color: "#6610f2" }} >
                                        {uname}
                                    </span>
                                </div>

                                <div >
                                    <span className="navbar-text " style={style}> {status} </span>
                                </div>
                            </div>


                        </div>
                        <div className="modal-body">

                            <p>thsi is info Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aliquam, nesciunt fugiat distinctio pariatur vero culpa modi provident libero enim.</p>

                        </div>

                        <div className="modal-footer">
                            <div className="container text-center" >
                                more contact details
                            </div>
                            <div className="container text-center">

                                <button type="button" style={{ backgroundColor: "#6cdee8", color: 'black' }} className="btn btn-primary mx-3">Email</button>
                                <button type="button" style={{ backgroundColor: "#6610f2" }} className="btn btn-primary mx-3">Phone</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
















            <div className='d-flex justify-content-between'>
                <span>
                    <img width={25} src={avatar} alt="image" />
                    <span className='username navbar-text' data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer', color: "#6610f2" }} >
                        <button type="button" style={{ cursor: 'pointer', color: "#6610f2" }} className="btn btn-link " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {uname}
                        </button>
                    </span>
                </span>
                <span className="navbar-text">
                    {email}
                </span>
                <span className="navbar-text" style={style}>
                    {status}
                </span>
                <span className='my-3'>
                    <ion-icon name="eye-outline" />
                </span>
            </div>






        </div>

    )
}


