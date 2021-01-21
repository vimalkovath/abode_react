import _ from 'lodash';
import React, { Component, useState, useEffect } from 'react';
import { useStore, createComponent } from 'effector-react';
import { $HomeStore } from "./HomeStore";
import { navigate } from "@reach/router"
import { Banner } from "../../components";

import bannerDefault from '../../assets/img/home_img.png'
import './Home.css';
import {Grid,View} from '@adobe/react-spectrum'


export const Home = createComponent($HomeStore, (props, HomeData) => {

  const [value, setValue] = useState("");
  const [searches, setSearches] = useState([]);
  const [isPersonalize, setIsPersonalize] = useState(false);
  const [options, setOptions] = useState([]);


  const { AppData, CarouselData } = HomeData;



  const handleSubmit = (option) => {

  };




  // Banner
  let bannerImg = bannerDefault;
  let bannerData = '';
  if (AppData.customerData) {
    if (!_.isEmpty(AppData.customerData.banner)) { bannerImg = AppData.customerData.banner; }
    bannerData = (
      <div className="col-lg-12 col-xs-12 homecontent_box1" >
        <Banner bannerimage={bannerImg} />
      </div>
    );
  }





  return (
    <div>
 
            {bannerData}



    </div>
  );
});