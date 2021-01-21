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
import { CarosalDiv } from '../CarosalDiv/CarosalDiv';
import { CheckBoxs } from '../CheckBoxs/CheckBoxs';
import { ListItems } from '../ListItems/ListItems';
import { AppFooter } from '../AppFooter/AppFooter';

import { Banner } from "../Banner/Banner";
import bannerDefault from '../../assets/img/home_img.png'


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



  return (
    <div className=''>


      <Provider theme={defaultTheme} colorScheme="light">

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
              {/* {props.children} */}
              <div className="CarosalWrap">
                <Carosal />

              </div>
            </View>

            <Flex direction="row" gap="size-100">
              <View width="size-3000" >
                <div>
                  <h6>View Product</h6>
                  <ListItems></ListItems>
                  <hr />
                </div>

                <div>
                  <h6>Filter By Popular Tags</h6>
                  <CheckBoxs></CheckBoxs>
                  <hr />
                </div>

                <div>
                  <h6>Resources</h6>
                  <ul>
                    <li>
                      <a>My Exchange</a>
                    </li>
                    <li>
                      <a>Forms</a>
                    </li>
                    <li>
                      <a>Help and View</a>
                    </li>
                    <li>
                      <a>Go to Product Page</a>
                    </li>
                  </ul>
                  <hr />
                </div>



                <div>
                  <ul className="social-iconsNear">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a>Follow Us On Facebook</li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a>Follow Us On Twitter</li>
                  </ul>
                </div>

              </View>

              <View flex >

                <div>
                  <h3>Popular Apps For Advertising</h3>
                  <CarosalDiv settings={settings} />
                </div>

                <div>
                  <h3>Popular Apps For Campain</h3>
                  <CarosalDiv settings={settings} />
                </div>

                <div>
                  <h3>Popular Apps For Content Management</h3>
                  <CarosalDiv settings={settings} />
                </div>

                <div>
                  <h3>Popular Apps For Audience Management</h3>
                  <CarosalDiv settings={settings} />
                </div>
                <div>
                  <h3>Popular Apps For Personalizatipn</h3>
                  <CarosalDiv settings={settings} />
                </div>

              </View>
            </Flex>

            <View   >
              <AppFooter />
            </View>


          </Flex>



        </Suspense>
      </Provider>




      {/* <AppFooter /> */}

    </div>
  );
});

