import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav d-flex align-items-center p-4'>
            <div className='d-flex align-items-center justify-content-start'>
                <img className='img-fluid' src='logo.png' alt='Website Logo' />
                <p className='fs-2 fw-bold text-white m-0 ms-2'>Meme Generator</p>
            </div>
        </nav>
    )
}

export default Navbar
