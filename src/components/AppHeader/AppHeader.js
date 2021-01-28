/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Suspense } from 'react';
import _ from 'lodash';

import { useStore, createComponent } from 'effector-react';
import { AppStore } from '../../store/store';
import './AppHeader.css';

import { Provider, defaultTheme, Button, Link } from '@adobe/react-spectrum';
import { Grid } from '@react-spectrum/layout';
import { View } from '@react-spectrum/view';
import { Flex } from '@adobe/react-spectrum'
import { HeaderAdobe } from '../HeaderAdobe/HeaderAdobe';
import { Carosal } from '../Carosal/Carosal';
import { AppFooter } from '../AppFooter/AppFooter';

import { Banner } from "../Banner/Banner";
import bannerDefault from '../../assets/img/home_img.png'

import { carosal_data } from "../../global/data";

// import { connect } from 'react-redux'
// import { buyCake } from '../../redux'
import reduxStore from '../../redux/reduxStore'
import { MainContainer } from '../MainContainer/MainContainer';




export const AppHeader = createComponent(AppStore, (props, AppData) => {

  
  let settings = {
    dots: false,
    dotsScroll: 1,
    className: 'carosalBlock',
    gutter: 1,
    overScan: 1,
    initialSlide: 3,
    shift: 1,
    slidesPerRow: 3,
    swipe: false
  };
  // console.log("carosal_data", carosal_data);

  const handleListClick = (_fromListChild) => {
    console.log("_fromListChild", _fromListChild);
  }

  const advertise = "";
  const campaign = "";
  const contentMangement = "";
  const personalize = "";
  const audienceManager = "";





  return (
    <div className=''>

      <Provider  theme={defaultTheme} colorScheme="light">

        <Suspense fallback={"Loading"}>

          <Flex direction="column" gap="size-100">
            <View height="size-800" >
              <HeaderAdobe />
            </View>
            <View  >
              <Banner bannerimage={bannerDefault} />
              {/* {props.children} */}
            </View>
            <View   >
              <div className="CarosalWrap">
                <Carosal />
              </div>
            </View>



           <MainContainer></MainContainer>




            <View   >
              <AppFooter />
            </View>


          </Flex>



        </Suspense>
      </Provider>




    </div>
  );
}
);


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AppHeader)


// export default AppHeader;