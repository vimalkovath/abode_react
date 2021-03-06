import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Slider from 'infinite-react-carousel';

import './CarosalDiv.css';
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

import {Button} from '@adobe/react-spectrum'

import {HooksCakeContainer} from './HooksCakeContainer';
import reduxStore from '../../redux/reduxStore'

import { Provider } from 'react-redux'

export const CarosalDiv = (props) => {
  let settings = {
    dots: true,
    dotsScroll: 1,
    className: 'carosalBlock',
    gutter: 1,
    overScan: 1,
    initialSlide: 3,
    shift: 1,
    slidesPerRow: 3,
    swipe: false
  };

  if (props.settings) {
    settings = props.settings;
    // console.log(settings, 'settings');
  }
  // const carosal_data=props.carosal_data;
  const carosal_data =
    [
      {
        image: one,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"LightRoom"
        

      }, {
        image: one,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
        tag:"Photoshop"

      }, {
        image: two,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
        tag:"InDesign"
       

      }, {
        image: three,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
        tag:"Classic"

      }, {
        image: four,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"
        

      }, {
        image: five,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"

      }, {
        image: six,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"InDesign"

      }, {
        image: sevan,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"InDesign1"

      }, {
        image: eight,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"
      }
      , {
        image: nine,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"
      }
      , {
        image: ten,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"

      }
      , {
        image: eleven,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Photoshop1"

      }, {
        image: twelve,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"LightRoom"
      }
      , {
        image: therten,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"LightRoom1"
      }
      , {
        image: fourteen,
        heading: "Adobe exchange",
        sub: "New sub ",
        desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
        ,tag:"Classic"
      }
    ];

  const listItems2 = carosal_data.map((dat, i) =>
    <div className="CarosalDiv" key={dat.image}>
      <div className="CarosalDivInner">
      <div className="CarosalHeaderPart">
        <img className="carosal_Logo" src={dat.image} alt="" />
        <div className="CarosalHeaderPartHead">
          <div className="CarosalHeaderPartHeadH">
            {dat.heading}
          </div>
          <div className="CarosalHeaderPartHeadSub">
            {dat.sub}
          </div>
        </div>
      </div>
      <div className="Desc">
      {dat.desc}
      </div>
      <hr/>
      <div className="BottomCarosal">
        <div>
        {dat.tag}
        </div>
      <Button variant="primary" >
       Get
    </Button>
      </div>
      </div>
    </div>
  );




  return (
    <>
      <div>

        {/* <Slider {...settings}>
          {listItems2}
        </Slider> */}

          {/* <Provider store={reduxStore}> */}
<HooksCakeContainer settings={settings} ></HooksCakeContainer>
{/* </Provider> */}

      </div>
    </>
  );
}

