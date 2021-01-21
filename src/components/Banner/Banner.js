import _ from 'lodash';
import React from 'react';
import './Banner.css';
import banner_img from '../../assets/img/Banner_full_img.png'
import logo_jgate from '../../assets/img/home_img.png'
export const Banner = (props) => {
  let banner = props.bannerimage;
  return(
    <>
 
 <img className="w-100" src={banner_img} alt="" />
    
    
    </>
  );
}