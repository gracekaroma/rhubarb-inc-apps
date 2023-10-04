import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import dataBase from '../Data/Data Base/DataBase';
import { Link } from 'react-router-dom';
import { Carousel, Input, Button } from '@material-tailwind/react';
import { Fade, Slide } from 'react-awesome-reveal';

function InputWithButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   
    return (
      <div className="relative flex w-full max-w-[30rem]">
        <Input
          type="email"
          label="Enter Your Email Address"
          value={email}
          onChange={onChange}
          color='white'
          className="pr-20"
          containerProps={{
            className: "min-w-0 font-fairplay italic",
          }}
        />
        <Button
          size="sm"
          color={email ? "white" : "white"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded font-fairplay font-semibold px-8"
        >
          SIGN UP
        </Button>
      </div>
    );
};

class Home extends Component {
    render() {
        
        const background1 = dataBase.home.background1;
        const background2 = dataBase.home.background2;
        const background3 = dataBase.home.background3;
        const background4 = dataBase.home.background4;
    
        const partner = dataBase.home.partner.map(function(partner) {
            const partnerImg = require("../Data/Images/Logo/" + partner.image);
    
            return (
                <div>
                    <img src={partnerImg} alt={partner.name} />
                </div>
            );
        });
    
        const team = dataBase.home.team.map(function(team) {
            const teamImg = require('../Data/Images/Profile/Team/' + team.image);
    
            const social = dataBase.home.social.map(function(social) {
                const socialImg = require('../Data/Images/Logo/' + social.image);
    
                return (
                    <div>
                        <img src={socialImg} alt={social.name} />
                    </div>
                );
            });
    
            return (
                <div key={team.name}>
                    <div className='home-team-container'>
                        <div className='home-team-card'>
                            <div className='home-team-front flex justify-center items-center'>
                                <div className='text-center'>
                                    <div className='flex justify-center'>
                                        <img src={teamImg} alt={team.name} />
                                    </div>
                                    <div className='py-3'>
                                        <h5 className='text-white font-libre italic'>{team.name}</h5>
                                        <h6 className='text-choco font-libre font-bold'>{team.position}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='home-team-back flex justify-center items-center'>
                                <div className='px-5'>
                                    <p className='text-abu font-libre'>{team.notes}</p>
                                    <div className='flex justify-center gap-3 py-2'>{social}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    
        return (
            <section id='home'>
                <div style={{backgroundImage: `url(${background1})`}}>
                    <Header />

                    <Fade bottom duration={3000}>
                        <div className='text-center py-52'>
                            <h5 className='text-choco font-libre italic'>Come and Join</h5>
                            <h1 className='text-white font-fairplay font-semibold'>Unlock Your Music's With Us</h1>
                            <div className='pt-32'>
                                <Link to='/Information' className='text-oren font-bold font-libre'>Learn More</Link>
                            </div>
                        </div>
                    </Fade>
                </div>
                    
                <div style={{backgroundImage: `url(${background2})`}}>
                    <Fade cascade duration={3000}>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    The Number Of Our Record
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    We're the top digital music distributor in the World, 
                                    discovering fresh talent and collaborating with global platforms.
                                </h5>
                            </div>
                            <div className='py-20 flex justify-center'>
                                <div className='home-container py-10 px-28'>
                                    <div className='flex justify-between'>
                                        <div className='text-center'>
                                            <h3 className='text-white font-libre font-bold'>4.1M+</h3>
                                            <h5 className='text-white font-libre italic'>Tracks</h5>
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='text-white font-libre font-bold'>500K+</h3>
                                            <h5 className='text-white font-libre italic'>Artists</h5>
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='text-white font-libre font-bold'>3.5M+</h3>
                                            <h5 className='text-white font-libre italic'>Albums</h5>
                                        </div>
                                    </div>
                                    <div className='py-8'>
                                        <hr />
                                    </div>
                                    <div className='text-center'>
                                        <h3 className='text-white font-libre font-bold'>$ 1.000.000.000.000 + </h3>
                                        <h5 className='text-white font-libre italic'>Total Net Worth</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div style={{backgroundColor: '#2D1600'}}>
                    <Fade cascade duration={3000}>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Our Music Partner
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Find your perfect music partner and create unforgettable melodies together. 
                                    Let the rhythm take over!
                                </h5>
                            </div>
                            <div className='pt-10 px-8'>
                                <Slide left duration={3500}>
                                    <div className='flex justify-between items-center'>
                                        {partner}
                                    </div>
                                </Slide>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div style={{backgroundImage: `url(${background3})`}}>
                    <Fade cascade duration={2000}>
                        <div className='py-12'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Meet Our Team
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Get to know our awesome crew and discover the faces behind the magic
                                </h5>
                            </div>
                            <Fade cascade duration={3000}>
                                <div className='py-10 flex flex-wrap-reverse justify-center gap-10'>
                                    {team}
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                </div>

                <div style={{backgroundColor: '#2D1600'}}>
                    <Slide left duration={2000}>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Start Your Purchase Now
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Don't miss out the best from our artists
                                </h5>
                                <div className='pt-10'>
                                    <h5>
                                        <Link 
                                            to='/ContinueApp' 
                                            className='bg-choco text-white py-3 px-8 font-fairplay font-bold hover:bg-abu hover:text-darkChoco'>
                                            Click Here
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>

                <div style={{backgroundImage: `url(${background4})`}}>
                    <Fade cascade duration={3000}>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Testimonial
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    What They Say About Us
                                </h5>
                            </div>
                            <div className='pt-10'>
                                <Carousel transition={{duration: 2}}>
                                    {
                                        dataBase.home.testimonial.map(function(testimonial) {
                                            const testiImg = require('../Data/Images/Profile/Testimonial/' + testimonial.image);
                                            
                                            return (
                                                <div className='home-testimonial-container flex justify-center'>
                                                    <div className='py-10 px-5 bg-black/60 rounded-xl space-y-3'>
                                                        <div className='flex justify-center'>
                                                            <img src={testiImg} alt={testimonial.name} />
                                                        </div>
                                                        <div className='text-center'>
                                                            <h5 className='italic text-white font-libre'>
                                                                {testimonial.notes}
                                                            </h5>
                                                            <p className='italic text-choco font-libre'>
                                                                {testimonial.name} - {testimonial.job}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </Fade>
                </div>

                <div style={{backgroundColor: '#2D1600'}}>
                    <Slide left duration={2000}>
                        <div className='py-20'>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                Be The First to Know About Our Update
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    By signing up, you agree to periodic email marketing from Rhubarb Inc. 
                                    to the email address you have provided.
                                </h5>                               
                            </div>
                            <div className='flex justify-center pt-10'>
                                <div className="relative flex w-full max-w-[30rem]">
                                    {<InputWithButton />}
                                </div>
                            </div>
                        </div>
                    </Slide>    
                </div>

                <Footer />
            </section>
        );
    }

}

export default Home;