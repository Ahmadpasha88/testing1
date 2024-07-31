import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary sticky-top">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold">Bloger App</Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div>
                        <button className='btn btn-danger'>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
