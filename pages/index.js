import React from 'react';
import Banner from '../components/Home/Banner';
import ServiceArea from '../components/Home/ServiceArea';
import Slider from '../components/Home/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <ServiceArea />
      <Banner />
    </div>
  );
};

export default Home;
