import React from 'react'
import "../App.css"

export default function Navbar() {
    return (
        <div >           
            <nav className="navbar ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/* <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="image" width="30" height="24" /> */}

                        <img src="favicon-32x32.png" width={50} alt="" />
                    </a>
                    <form id='navform' className="d-flex" role="search">
                        <input id="search" className="form-control  me-2"style={{width:'400px'}} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
                    </form>
                    <a id='admin' className="navbar-brand" href="#">
                        <span class="navbar-text">
                            Admin
                        </span>
                        <img className='mx-1' src="favicon-32x32.png" alt="image" />
                    </a>
                </div>
            </nav>

        </div>
    )
}



