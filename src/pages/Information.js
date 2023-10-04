import React, { Component, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { 
    Carousel, 
    Timeline, 
    TimelineBody, 
    TimelineConnector, 
    TimelineHeader, 
    TimelineIcon, 
    TimelineItem,
    Accordion,
    AccordionHeader,
    AccordionBody, } from '@material-tailwind/react';
import dataBase from '../Data/Data Base/DataBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Fade, Slide } from 'react-awesome-reveal';

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

function FaQ() {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
        <div className='bg-black/30 p-10 w-3/5 shadow-xl'>
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <h5 className='text-white duration-150 hover:text-choco font-libre font-bold'>
                        What is Material Tailwind?
                    </h5>
                </AccordionHeader>
                <AccordionBody>
                    <h6 className='text-white italic font-libre'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Convallis convallis tellus id interdum. Nulla aliquet porttitor lacus luctus accumsan tortor. 
                        Duis ultricies lacus sed turpis tincidunt id. Donec massa sapien faucibus et molestie ac feugiat sed.
                    </h6>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                <   h5 className='text-white duration-150 hover:text-choco font-libre font-bold'>
                        What is Material Tailwind?
                    </h5>
                </AccordionHeader>
                <AccordionBody>
                    <h6 className='text-white italic font-libre'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Convallis convallis tellus id interdum. Nulla aliquet porttitor lacus luctus accumsan tortor. 
                        Duis ultricies lacus sed turpis tincidunt id. Donec massa sapien faucibus et molestie ac feugiat sed.
                    </h6>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <h5 className='text-white duration-150 hover:text-choco font-libre font-bold'>
                        What is Material Tailwind?
                    </h5>
                </AccordionHeader>
                <AccordionBody>
                    <h6 className='text-white italic font-libre'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Convallis convallis tellus id interdum. Nulla aliquet porttitor lacus luctus accumsan tortor. 
                        Duis ultricies lacus sed turpis tincidunt id. Donec massa sapien faucibus et molestie ac feugiat sed.
                    </h6>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    <h5 className='text-white duration-150 hover:text-choco font-libre font-bold'>
                        What is Material Tailwind?
                    </h5>
                </AccordionHeader>
                <AccordionBody>
                    <h6 className='text-white italic font-libre'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Convallis convallis tellus id interdum. Nulla aliquet porttitor lacus luctus accumsan tortor. 
                        Duis ultricies lacus sed turpis tincidunt id. Donec massa sapien faucibus et molestie ac feugiat sed.
                    </h6>
                </AccordionBody>
            </Accordion>
        </div>
    );
}

class Information extends Component {
    render() {

        const background1 = dataBase.information.background1;
        const background2 = dataBase.information.background2;
        const background3 = dataBase.information.background3;
        const background4 = dataBase.information.background4;
        const instagram = dataBase.information.instagram;
        const twitter = dataBase.information.twitter;
        const facebook = dataBase.information.facebook;

        return (
            <section id='information'>
                <div style={{backgroundImage: `url(${background1})`}}>
                    <Header />
                    <div className='py-20'>
                        <Fade cascade duration={2000}>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Our Journey History
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                </h5>
                            </div>
                        </Fade>
                        <Slide left duration={2500}>
                            <div className='py-10'>
                                {
                                    dataBase.information.history.map(function(history) {
                                        return (
                                            <div className='flex justify-center'>
                                                <div className='w-[32rem]'>
                                                    <Timeline>
                                                        <TimelineItem>
                                                            <TimelineConnector />
                                                            <TimelineHeader>
                                                                <TimelineIcon className='p-2 bg-choco'></TimelineIcon>
                                                                <h5 className='text-white font-libre font-bold'>{history.year}</h5>
                                                            </TimelineHeader>
                                                            <TimelineBody className='pb-8'>
                                                                <h6 className='text-abu font-libre italic'>{history.desc}</h6>
                                                            </TimelineBody>
                                                        </TimelineItem>
                                                    </Timeline>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </Slide>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${background2})`}}>
                    <div className='py-20'>
                        <Fade cascade duration={2000}>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Our Vision and Mission
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Our organizational objectives and purpose are encapsulated in 
                                    our vision and mission statements.
                                </h5>
                            </div>
                        </Fade>
                        <Fade cascade duration={3000}>
                            <div className='py-10'>
                                <div className='flex justify-center'>
                                    <div className='bg-black/40 w-3/4'>
                                        <div className='p-20'>
                                            <div className='flex justify-center gap-24'>
                                                <div>
                                                    <h5 className='italic text-abu font-libre'>What we aspire to be</h5>
                                                    <h3 className='text-white font-fairplay font-bold pt-3'>Our Vision</h3>
                                                    <h5 className='italic text-white font-libre text-justify'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                                        tempor incididunt ut labore et dolore magna aliqua. 
                                                    </h5>
                                                    <h5 className='italic text-white font-libre text-justify'>
                                                        Convallis convallis tellus id interdum. 
                                                        Nulla aliquet porttitor lacus luctus accumsan tortor.
                                                    </h5>
                                                </div>
                                                <div>
                                                    <h5 className='italic text-abu font-libre text-right'>Who we are.. What we do</h5>
                                                    <h3 className='text-white font-fairplay font-bold text-right pt-3'>Our Mission</h3>
                                                    <h5 className='italic text-white font-libre text-justify'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                                        tempor incididunt ut labore et dolore magna aliqua. 
                                                    </h5>
                                                    <h5 className='italic text-white font-libre text-justify'>
                                                        Convallis convallis tellus id interdum. 
                                                        Nulla aliquet porttitor lacus luctus accumsan tortor.
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div style={{backgroundColor: '#2D1600'}}>
                    <div className='py-20'>
                        <Fade cascade duration={2000}>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Our Values
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Our core principles guide our actions and decisions, 
                                    shaping our culture and defining our organization's identity.
                                </h5>
                            </div>
                        </Fade>
                        <div className='py-10'>
                            <Slide duration={2000}>
                                <Carousel transition={{duration: 2}}>
                                    {
                                        dataBase.information.values.map(values => {
                                            const valuesImg = require('../Data/Images/Picture/Our Value/' + values.image);

                                            return (
                                                <div className='flex justify-center'>
                                                    <div className='bg-black/40 w-3/4 flex'>
                                                        <div className='flex justify-between gap-10'>
                                                            <div className='text-center flex items-center'>
                                                                <div>
                                                                    <h5 className='text-white font-libre font-bold'>{values.title}</h5>
                                                                    <h5 className='text-white font-libre italic'>{values.desc}</h5>
                                                                </div>
                                                            </div>
                                                            <div><img src={valuesImg} alt={values.title} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </Carousel>
                            </Slide>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${background3})`}}>
                    <div className='py-20'>
                        <Fade cascade duration={2000}>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Our Location
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Find us on your local place
                                </h5>
                            </div>
                        </Fade>
                        <Fade cascade duration={3000}>
                            <div className='pt-10 flex justify-center'>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4913171754!2d106.66469991185049!3d-6.2297209273159275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1694169937805!5m2!1sen!2sid" 
                                    width="600" 
                                    height="450" 
                                    style={{border:"0;"}} 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div style={{backgroundColor: '#2D1600'}}>
                    <div className='py-20'>
                        <Fade cascade duration={2000}>
                            <div className='text-center'>
                                <h2 className='text-white font-fairplay font-bold'>
                                    Frequently Ask Questions
                                </h2>
                                <h5 className='text-choco font-libre italic'>
                                    Got questions? We've got answers! Check out our FAQ section for all the info you need.
                                </h5>
                            </div>
                        </Fade>
                        <Fade cascade duration={3000}>
                            <div className='flex justify-center pt-10'>
                                <FaQ />
                            </div>
                        </Fade>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${background4})`}}>
                    <div className='py-20'>
                        <div className='flex justify-center py-12'>
                            <div className='contact-container py-12 px-12'>
                                <Fade bottom duration={2000}>
                                    <div>
                                        <h6 className='text-abu font-libre italic'>Need Help ?</h6>
                                        <h1 className='font-fairplay text-white font-medium'>Contact Us</h1>
                                        <p className='text-white font-libre w-2/5'>
                                            Hey there! Need to get in touch? Don't hesitate to contact us anytime. We're here to help!
                                        </p>
                                    </div>
                                </Fade>
                                <Fade bottom duration={3000}>
                                    <div className='flex justify-center gap-16 py-5'>
                                        <div className='contact-content flex items-center'>
                                            {/* buat dia v-align center */}
                                            <div className='py-5 font-libre italic'>
                                                <form action="" method="post" id="contactForm" name="contactForm">
                                                    <label for="fname" className='text-white'>Name <span className='text-choco'>*</span></label>
                                                    <input type="text" id="fname" name="firstname" placeholder="Enter Full Name" required></input>

                                                    <label for="femail" className='text-white'>Email Address <span className='text-choco'>*</span></label>
                                                    <input type="text" id="femail" name="email" placeholder="Enter Email Address" required></input>

                                                    <label for="fsubject" className='text-white'>Subject</label>
                                                    <input type="text" id="fsubject" name="subject" placeholder="Enter Subject Message"></input>

                                                    <label for="fmessage" className='text-white'>Message <span className='text-choco'>*</span></label>
                                                    <textarea type="text" id="fmessage" name="message" placeholder="Enter Your Message" required></textarea>

                                                    <input type="submit" value="Send"></input>
                                                </form>
                                            </div>
                                        </div>
                                        <div style={{borderRight: '1px solid white'}}></div>
                                        <div className='flex items-center'>
                                            <div className='space-y-5'>
                                                <div>
                                                    <h6 className='font-libre text-white'>Follow Us</h6>
                                                    <div className='flex flex-wrap gap-5 pt-1'>
                                                        <a href='https://www.instagram.com/'>
                                                            <img src={instagram} alt='404' />
                                                        </a>
                                                        <a href='https://twitter.com/'>
                                                            <img src={twitter} alt='404' />
                                                        </a>
                                                        <a href='https://www.facebook.com/'>
                                                            <img src={facebook} alt='404' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className='font-libre text-white'>Company Address</h6>
                                                    <p className='font-libre text-abu'>19162 Hermann Orchard, Ryleighfurt, Wyoming, USA</p>
                                                </div>
                                                <div>
                                                    <h6 className='font-libre text-white'>Zip Code</h6>
                                                    <p className='font-libre text-abu'>11589-8562</p>
                                                </div>
                                                <div>
                                                    <h6 className='font-libre text-white'>Phone</h6>
                                                    <div className='flex justify-start gap-2'>
                                                        <FontAwesomeIcon icon={faPhone} color='#FFFFFF' size='sm'/>
                                                        <p className='font-libre text-abu'>306-640-5307 x296</p>
                                                    </div>
                                                    <div className='flex justify-start gap-2'>
                                                        <FontAwesomeIcon icon={faMobile} color='#FFFFFF' size='sm' />
                                                        <p className='font-libre text-abu'>1-459-475-2170</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className='font-libre text-white'>Email Address</h6>
                                                    <p className='font-libre text-abu'>rhubarbinc.music@gmail.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        );
    }
}

export default Information;