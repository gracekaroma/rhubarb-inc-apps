import React, { Component } from 'react';
import dataBase from '../Data/Data Base/DataBase';
import { Link } from 'react-router-dom';

class ContinueApp extends Component {
    render() {

        const continueAppImg = dataBase.continueApp.continueAppImg;

        return (
            <div style={{backgroundColor: '#FFFFFF'}}>
                <div className='py-20 flex justify-center'>
                    <div>
                        <img src={continueAppImg} alt='404' />
                        <div className='text-center py-5'>
                            <h2 className='font-semibold font-fairplay text-darkChoco'>
                                Continue to App
                            </h2>
                        </div>
                        <div className='flex justify-center'>
                            <div className='space-y-5 w-1/4'>
                                <div className='bg-darkChoco py-3 rounded-xl hover:bg-choco duration-150'>
                                    <Link to='/ContinueWeb'>
                                        <h5 className='font-libre text-white font-bold text-center'>
                                            Open
                                        </h5>
                                    </Link>
                                </div>
                                <div className='bg-darkChoco py-3 rounded-xl hover:bg-choco duration-150'>
                                    <Link to='/DownloadApp'>
                                        <h5 className='font-libre text-white font-bold text-center'>
                                            Download Application
                                        </h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContinueApp;