import React from 'react'

function Footer() {
    return (
        <div>
            <div className="main-footer  bg-dark text-white">
                <div className="container">
                    <div className="row  pt-5">
                        {/* Colum-1  */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled text-light">
                                <li>Add - xyz/4 India</li>
                                <li>+9876543210</li>
                                <li>www.Lorem_ipsum@xyz.com</li>
                            </ul>
                        </div>
                        {/* Colum-2  */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>                    
                            </ul>
                        </div>
                        {/* Colum-3  */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>                    
                            </ul>
                        </div>
                        {/* Colum-4  */}

                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>
                            <li><a href="/" className='text-decoration-none text-secondary'>Lorem ipsum</a></li>                    
                            </ul>
                        </div>
                    </div>
                    
                    {/* Footer Bottom  */}

                    <div className="footer-bottom pb-2">     
                        <p className="text-xs-center mt-5  ">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights reserved
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer
