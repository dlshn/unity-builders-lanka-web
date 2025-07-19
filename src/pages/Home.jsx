import React from 'react';
import  {About}  from './About';
import  {Contact}  from './Contact';
import  {Project}  from './Project';
import  {Packages} from './Packages';
import  {Hero} from '../components/Hero';

export const Home = () => {
  return (
          <>
            <Hero />
            <Packages />
            <About />     
            <Project/>
            <Contact/>
          </>
  );
};
