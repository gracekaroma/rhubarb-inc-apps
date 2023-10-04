import React, { Component } from 'react';
import dataBase from '../Data/Data Base/DataBase';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {

        const background = dataBase.footer.background;
        const logo = dataBase.footer.logo;
        const instagram = dataBase.footer.instagram;
        const facebook = dataBase.footer.facebook;
        const twitter = dataBase.footer.twitter;

        return (
            <div style={{backgroundImage: `url(${background})`}}>
                <div className='flex flex-col'>
                    <div className='p-16 flex justify-between'>
                        <div className='space-y-2'>
                            <Link to='/'><img src={logo} alt='404' /></Link>
                            <h6 className='italic font-libre text-white'>Your Best Melody Choices</h6>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-fairplay font-bold text-white text-center'>Follow Us</h3>
                            <div className='flex items-center gap-4'>
                                <a href='https://www.instagram.com/'><img src={instagram} alt='404' /></a>
                                <a href='https://www.facebook.com/'><img src={facebook} alt='404' /></a>
                                <a href='https://twitter.com/'><img src={twitter} alt='404' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end bg-black/60 justify-between px-8 py-4'>
                        <div>
                            <h6 className='italic font-libre text-white'>&copy; Copyright 2023 - Rhubarb Inc. &sdot; Design by Grace Karoma</h6>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <h6 className='italic font-libre text-white'>
                                <Link to='/Privacy'>Privacy Policy</Link>
                            </h6>
                            <h6 className='italic font-libre text-white'>
                                <Link to='/TnC'>Terms & Conditions</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;