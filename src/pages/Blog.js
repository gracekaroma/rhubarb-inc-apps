import React from 'react';
import Header from './Header.js';
import Footer from './Footer';
import dataBase from '../Data/Data Base/DataBase.js';
import { Link, useNavigate } from 'react-router-dom';

function Blog() {
    let history = useNavigate();

    function setID(id, title, imageOut, imageIn, publisher, datePost, category, desc) {
        localStorage.setItem('id', id);
        localStorage.setItem('title', title);
        localStorage.setItem('imageOut', imageOut);
        localStorage.setItem('imageIn', imageIn);
        localStorage.setItem('publisher', publisher);
        localStorage.setItem('datePost', datePost);
        localStorage.setItem('category', category);
        localStorage.setItem('desc', desc);
    }

    const background = dataBase.blog.background;

    const blogs = dataBase.blog.blogs.map(function(blogs) {
        const blogImageOut = require('../Data/Images/Picture/Blog/' + blogs.imageOut);

        return (
            <div className='max-w-xs space-y-3'>
                <Link 
                    to='/BlogDetail' 
                    onClick={(e) => setID(
                        blogs.id,
                        blogs.title,
                        blogs.imageOut,
                        blogs.imageIn,
                        blogs.publisher,
                        blogs.publisher,
                        blogs.datePost,
                        blogs.category,
                        blogs.desc)}
                >
                    <img src={blogImageOut} alt={blogs.title} />
                    <div className='text-center'>
                        <h6 className='font-libre text-choco'>{blogs.category}</h6>
                        <h4 className='font-libre text-darkChoco font-bold'>{blogs.title}</h4>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <section id='Blog'>
            <div style={{backgroundImage: `url(${background})`}}>
                <Header />
                <div className='text-center py-24'>
                    <h5 className='text-choco font-libre italic'>Discover About Us</h5>
                    <h1 className='text-white font-fairplay font-semibold'>Our Blogs</h1>
                    <h5 className='text-choco font-libre italic'>"Our blog provides insightful and informative content on various topics relevant to our industry."</h5>
                    <div className='pt-32'>
                        <a href='#section2' className='text-oren font-bold font-libre scroll-smooth duration-200'>Get Started</a>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: '#D9D9D9'}}>
                <div id='section2' className='scroll-smooth duration-200 py-20 px-10'>
                    <div className='flex flex-wrap justify-center gap-20'>
                        {blogs}
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Blog;