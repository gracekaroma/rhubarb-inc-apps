import React from 'react';
import Header from './Header';
import Footer from './Footer';
import dataBase from '../Data/Data Base/DataBase';
import { Link, useNavigate } from 'react-router-dom';

function Product() {
    let history = useNavigate();

    function setID(id, name, artist, image, price, category) {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('artist', artist);
        localStorage.setItem('image', image);
        localStorage.setItem('price', price);
        localStorage.setItem('category', category);
    }

    const background = dataBase.product.background;

    const products = dataBase.product.products.map(function(products) {
        return (
            <div>
                <Link 
                    to='/ProductDetail' 
                    onClick={(e) => setID(
                        products.id, 
                        products.name, 
                        products.artist, 
                        products.image, 
                        products.price, 
                        products.category)}
                >
                    <img src={products.image} alt={products.name} className='max-w-xs'/>
                    <div className='text-left py-3'>
                        <h6 className='font-libre text-white'>{products.name}</h6>
                        <h5 className='font-libre font-bold text-white'>{products.price}</h5>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <section id='product'>
            <div style={{backgroundImage: `url(${background})`}}>
                <Header />

                <div className='py-20 px-10'>
                    <div className='text-left'>
                        <h2 className='text-white font-fairplay font-bold'>
                            All Product
                        </h2>
                        <h5 className='text-choco font-libre italic'>
                            "Our blog provides insightful and informative content on various 
                            topics relevant to our industry."
                        </h5>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: '#2D1600'}}>
                <div className='py-20'>
                    <div className='flex justify-center'>
                        <div className='text-oren font-libre font-bold'>
                            {/* {ProductList()} */}
                        </div>
                    </div>
                </div>
                <div className='py-20'>
                    <div className='flex justify-center flex-wrap gap-10'>
                        {products}
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Product;