import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppointment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
      <Header/>
      <Services/>
      <FeatureService/>
      <MakeAppoinment/>
      <Testimonials/>
      <Blogs/>
      <Doctors></Doctors>
      <Contact></Contact>
      <Footer></Footer>
      <footer style={{color:'grey'}} className="text-center">Copyright {new Date().getFullYear()} All Rights Reserved</footer>
        </div>
    );
};

export default Home;