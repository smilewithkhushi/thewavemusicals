import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black">
            <div className="container mx-auto">
                <div className="">
                    <div className="">
                        <img src="logo.png" alt="Website Logo" />
                        <h2 className="text-white font-poppins">Website Name</h2>
                    </div>
                    <div className="">
                        <ul className="">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <ul className="">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
