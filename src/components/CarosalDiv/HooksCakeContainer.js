
import React, { useMemo } from 'react';
import { useSelector, useDispatch, useState } from 'react-redux'
import { buyCake, removeCake, filterCake,filterAll } from '../../redux'
import _ from 'lodash';

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

import { Button } from '@adobe/react-spectrum'
import Slider from 'infinite-react-carousel';

export const HooksCakeContainer = (props) => {

  const settings = props.settings;

  const numOfCakes = useSelector(state => state.cake)

  let listItems2 = "";
  let carosal_data1 = numOfCakes;



  if (!_.isEmpty(carosal_data1) && !_.isEmpty(carosal_data1.cake)) {

    console.log(carosal_data1.cake.length, "carosal data inside", carosal_data1.cake);

    listItems2 = carosal_data1.cake.map((dat) =>
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
              </div> </div> </div>
          <div className="Desc">
            {dat.desc}
          </div>
          <hr />
          <div className="BottomCarosal">
            <div> {dat.tag}</div>
            <Button variant="primary" >  Get</Button>
          </div> </div> </div>
    );
  }

  // let listItems3 = useMemo(()=> listItems2 , [])
  // console.log("dsds");

  return (
    <div>
      {((carosal_data1) && (carosal_data1.cake) && (carosal_data1.cake.length > 0))
        &&
        <Slider {...settings}>
          {listItems2}
        </Slider>
      }
    </div>
  )

}