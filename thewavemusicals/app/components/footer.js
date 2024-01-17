import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    <div className="footer__logo">
                        <img src="logo.png" alt="Website Logo" />
                        <h2 className="text-white font-poppins">Website Name</h2>
                    </div>
                    <div className="footer__links mt-4 md:mt-0">
                        <ul className="flex space-x-4">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                        <ul className="flex space-x-4 mt-4 md:mt-0">
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
