import React from 'react';
import Banner from '../components/Home/Banner';
import BigBanner from '../components/Home/BigBanner';
import NewProduct from '../components/Home/NewProduct';
import AllProduct from '../components/Home/AllProduct';
import ServiceArea from '../components/Home/ServiceArea';
import Slider from '../components/Home/Slider';
import SingleBanner from '../components/Home/SingleBanner';
import Instagram from '../components/Home/Instagram';

const Home = () => {
  return (
    <div>
      <Slider />
      <ServiceArea />
      <Banner />
      <NewProduct />
      <BigBanner />
      <AllProduct />
      <SingleBanner />
      <Instagram />
    </div>
  );
};

export default Home;
