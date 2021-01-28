import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Slider from 'infinite-react-carousel';

import './Carosal.css';
import banner_img from '../../assets/img/Banner_full_img.png'
import logo_jgate from '../../assets/img/home_img.png'

import one from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import three from '../../assets/img/3.png'
import four from '../../assets/img/4.png'
import five from '../../assets/img/5.png'
import six from '../../assets/img/6.png'
import sevan from '../../assets/img/7.png'
import eight from '../../assets/img/5.png'
import nine from '../../assets/img/6.png'
import ten from '../../assets/img/7.png'

import eleven from '../../assets/img/2.png'
import twelve from '../../assets/img/3.png'
import therten from '../../assets/img/4.png'
import fourteen from '../../assets/img/5.png'


import { CarosalItem } from "../CarosalItem/CarosalItem";


export const Carosal = (props) => {
  let settings = {
    dots: true,
    dotsScroll: 1,
    className: 'carosalBlock',
    gutter: 1,
    overScan: 1,
    initialSlide: 4,
    shift: 1,
    slidesPerRow: 4,
    swipe: false
  };
  console.log(props, 'props');

  if (props.settings) {
    settings = props.settings;
  }
  // const carosal_data=props.carosal_data;
  const carosal_data =
    [
      {
        image: one,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: one,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: two,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: three,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: four,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: five,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: six,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: sevan,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: eight,
        heading: "Adobe exchange",
        sub: "New sub "
      }
      , {
        image: nine,
        heading: "Adobe exchange",
        sub: "New sub "
      }
      , {
        image: ten,
        heading: "Adobe exchange",
        sub: "New sub "

      }
      , {
        image: eleven,
        heading: "Adobe exchange",
        sub: "New sub "

      }, {
        image: twelve,
        heading: "Adobe exchange",
        sub: "New sub "
      }
      , {
        image: therten,
        heading: "Adobe exchange",
        sub: "New sub "
      }
      , {
        image: fourteen,
        heading: "Adobe exchange",
        sub: "New sub "

      }
    ];

  const listItems2 = carosal_data.map((dat, i) =>
    <div className="Carosal1Container" key={dat.image}> 
    <img className="carosal_Image" src={dat.image} alt="" />
      <div> <div className="Carosal1ContainerHead">
        {dat.heading}
      </div> <div className="Carosal1ContainerSub">
          {dat.sub}
        </div> </div></div>
  );




  return (
    <>
      <div>

        <Slider {...settings}>
          {listItems2}
        </Slider>
      </div>
    </>
  );
}

