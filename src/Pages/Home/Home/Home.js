import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import BannerButtom from '../BannerButtom/BannerButtom';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BannerButtom></BannerButtom>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;