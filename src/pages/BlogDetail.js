import React, { useState, useEffect } from 'react';
import dataBase from '../Data/Data Base/DataBase';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function BlogDetail() {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [imageOut, setImageOut] = useState('');
    const [imageIn, setImageIn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [datePost, setDatePost] = useState('');
    const [category, setCategory] = useState('');
    const [desc, setDesc] = useState('');

    let history = useNavigate();

    var index = dataBase.blog.blogs.map(function (e) {
        return e.id;
    }). indexOf(id);

    useEffect(() =>{
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'))
        setImageOut(localStorage.getItem('imageOut'))
        setImageIn(localStorage.getItem('imageIn'))
        setPublisher(localStorage.getItem('publisher'))
        setDatePost(localStorage.getItem('datePost'))
        setCategory(localStorage.getItem('category'))
        setDesc(localStorage.getItem('desc'))
    }, []);

    return (
        <section id='blogDetail'>
            <div style={{backgroundColor: '#2D1600'}}>
                <Header />

                <div className='py-10 px-20'>
                    <div className='text-center'>
                        <h2 className='font-fairplay font-semibold text-white'>{title}</h2>
                        <h6 className='font-libre text-abu'>{category}</h6>
                    </div>
                    <div className='flex justify-center py-5'>
                        <img src={imageIn} alt={title} className='w-3/4'/>
                    </div>
                    <div className='text-justify'>
                        <h5 className='font-fairplay text-abu'>{desc}</h5>
                    </div>
                    <div className='text-right py-5'>
                        <p className='font-libre text-abu font-bold'>{datePost}</p>
                        <h5 className='font-libre text-white font-nold'>{publisher}</h5>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default BlogDetail;