import React from 'react';
import Banner from '../components/Home/Banner';
import BigBanner from '../components/Home/BigBanner';
import NewProduct from '../components/Home/NewProduct';
import AllProduct from '../components/Home/AllProduct';
import ServiceArea from '../components/Home/ServiceArea';
import Slider from '../components/Home/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <ServiceArea />
      <Banner />
      <NewProduct />
      <BigBanner />
      <AllProduct />
    </div>
  );
};

export default Home;
