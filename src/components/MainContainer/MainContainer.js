import React from 'react';
import { View } from '@react-spectrum/view';
import { Flex } from '@adobe/react-spectrum'

import _ from 'lodash';
import { CarosalDiv } from '../CarosalDiv/CarosalDiv';
import { CheckBoxs } from '../CheckBoxs/CheckBoxs';
import { ListItems } from '../ListItems/ListItems';

import reduxStore from '../../redux/reduxStore'
import { Provider } from 'react-redux'

export const MainContainer = () => {


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

  return (
      <>
       <Provider store={reduxStore}>
{/* <HooksCakeContainer settings={settings} Ptore={reduxStore}></HooksCakeContainer> */}

    <Flex direction="row" gap="size-100">
    <View width="size-3000" >
      <div>

        <h6>View Product</h6>
        <ListItems onListClick={handleListClick} ></ListItems>
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
        <CarosalDiv settings={settings} Carosaldata="" />
      </div>

      <div>
        <h3>Popular Apps For Campain</h3>
        <CarosalDiv settings={settings} Carosaldata="" />
      </div>

      <div>
        <h3>Popular Apps For Content Management</h3>
        <CarosalDiv settings={settings} Carosaldata="" />
      </div>

      <div>
        <h3>Popular Apps For Audience Management</h3>
        <CarosalDiv settings={settings} Carosaldata="" />
      </div>

      <div>
        <h3>Popular Apps For Personalizatipn</h3>
        <CarosalDiv settings={settings} Carosaldata="" />
      </div>

    </View>
  </Flex>
  </Provider>

  </>
  );
};
