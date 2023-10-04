import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer';
import { Link, useNavigate} from 'react-router-dom';
import dataBase from '../Data/Data Base/DataBase.js';

function ProductDetail() {
    const plus = dataBase.product.plus;
    const minus = dataBase.product.minus;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [counter, setCounter] = useState(0);

    const handleClick1 = () => {
        setCounter(counter + 1)
      }
      
      const handleClick2 = () => {
        setCounter(counter - 1)
      }

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    let history = useNavigate();

    var index = dataBase.product.products.map(function (e) {
        return e.id;
    }). indexOf(id);

    useEffect(() =>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setArtist(localStorage.getItem('artist'))
        setImage(localStorage.getItem('image'))
        setPrice(localStorage.getItem('price'))
        setCategory(localStorage.getItem('category'))
    }, []);

    const totalPrice = parseFloat(price);
    const total = totalPrice * counter;

    return (
        <section id='productDetail'>
            <div style={{backgroundColor: '#2D1600'}}>
                <Header />

                <div className='py-5'>
                    <div className='flex justify-center gap-10 px-20'>
                        <div className='flex items-center'>
                            <img src={image} alt={artist} className='max-w-sm'/>
                        </div>
                        <div className='text-left space-y-6'>
                            <h6 className='font-libre text-white font-bold'>{artist}</h6>
                            <h2 className='font-fairplay text-white'>{name}</h2>
                            <h4 className='font-libre text-white font-bold'>$ {price}</h4>
                            <hr />
                            <h6 className='font-libre text-white'>{name}</h6>
                            <div className='flex justify-between'>
                                <div className='flex flex-nowrap gap-5 items-center'>
                                    <button onClick={handleClick2}>
                                        <img src={minus} alt='404' />
                                    </button>
                                    <h5 className='font-libre text-white'>{counter}</h5>
                                    <button onClick={handleClick1}>
                                        <img src={plus} alt='404' />
                                    </button>
                                </div>
                                <div>
                                    <h6 className='font-libre text-white'>$ {price}</h6>
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <div>
                                    {
                                        counter > 1 ?
                                        <h6 className='font-libre text-white'>Total ({counter} items)</h6>
                                        : <h6 className='font-libre text-white'>Total ({counter} item)</h6>
                                    }
                                </div>
                                <div>
                                    <h6 className='font-libre text-white font-semibold'>
                                        {
                                            total > 1 ?
                                            <h6 className='font-libre text-white'>$ {total.toFixed(2)}</h6>
                                            : <h6 className='font-libre text-white'>$ 0.00</h6>
                                        }
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <Link to='/ContinueApp'>
                                    <div className='flex justify-center gap-5'>
                                        <button className='button-buy font-libre text-oren'>Add To Cart</button>
                                        <button className='button-buy font-libre text-darkChoco bg-oren'>Buy Now</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='px-10'>
                    <hr />
                </div>
                
                <div className='py-20 px-14'>
                    <div className='space-y-8'>
                        <div className='space-y-2'>
                            <h6 className='font-libre text-white font-bold'>Description</h6>
                            <p className='font-libre text-white text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Id porta nibh venenatis cras sed. Bibendum neque egestas congue quisque egestas diam. 
                                Interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem. 
                                Arcu non odio euismod lacinia at quis. Mauris pellentesque pulvinar pellentesque habitant. 
                                Eget arcu dictum varius duis at consectetur lorem. 
                                Augue neque gravida in fermentum et sollicitudin ac orci. 
                                Tincidunt tortor aliquam nulla facilisi cras. Purus non enim praesent elementum facilisis leo vel. 
                                Ornare suspendisse sed nisi lacus sed viverra tellus in. 
                                Egestas dui id ornare arcu odio ut sem nulla pharetra. 
                                Justo laoreet sit amet cursus sit. A iaculis at erat pellentesque adipiscing commodo elit at. 
                                Mollis nunc sed id semper risus in. Auctor elit sed vulputate mi sit amet mauris commodo.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h6 className='font-libre text-white font-bold'>Shipping/Region</h6>
                            <p className='font-libre text-white text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Id porta nibh venenatis cras sed. Bibendum neque egestas congue quisque egestas diam. 
                                Interdum posuere lorem ipsum dolor sit amet. Velit dignissim sodales ut eu sem. 
                                Arcu non odio euismod lacinia at quis. Mauris pellentesque pulvinar pellentesque habitant. 
                                Eget arcu dictum varius duis at consectetur lorem. 
                                Augue neque gravida in fermentum et sollicitudin ac orci. 
                                Tincidunt tortor aliquam nulla facilisi cras. Purus non enim praesent elementum facilisis leo vel. 
                                Ornare suspendisse sed nisi lacus sed viverra tellus in. 
                                Egestas dui id ornare arcu odio ut sem nulla pharetra. 
                                Justo laoreet sit amet cursus sit. A iaculis at erat pellentesque adipiscing commodo elit at. 
                                Mollis nunc sed id semper risus in. Auctor elit sed vulputate mi sit amet mauris commodo.
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h6 className='font-libre text-white font-bold'>Information</h6>
                            <div className='w-2/5 space-y-2'>
                                <hr />
                                <div className='grid grid-cols-4 gap-7'>
                                    <p className='font-libre text-white'>Product Name</p>
                                    <p className='font-libre text-white col-span-3'>{name}</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-4 gap-7'>
                                    <p className='font-libre text-white'>Release Date</p>
                                    <p className='font-libre text-white col-span-3'>{date}</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-4 gap-7'>
                                    <p className='font-libre text-white'>Manufacture</p>
                                    <p className='font-libre text-white col-span-3'>HYBE</p>
                                </div>
                                <hr />
                                <div className='grid grid-cols-4 gap-7'>
                                    <p className='font-libre text-white'>Country</p>
                                    <p className='font-libre text-white col-span-3'>KOREA</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </section>
    );
}

export default ProductDetail;