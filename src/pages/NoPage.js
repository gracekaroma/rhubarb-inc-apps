import React, { Component } from 'react';
import dataBase from '../Data/Data Base/DataBase';

class NoPage extends Component {
    render() {

        const background = dataBase.nopage.background;
        const errorImg = dataBase.nopage.errorImg;

        return (
            <div style={{backgroundImage: `url(${background})`}}>
                <div className='py-20 flex justify-center'>
                    <div className='w-4/5 bg-white/20 rounded-xl shadow-2xl'>
                        <div className='p-20 flex justify-center'>
                            <img src={errorImg} alt='404' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoPage;