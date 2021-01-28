import { BUY_CAKE } from './cakeTypes'
import { SEARCH_TEXT } from './cakeTypes'
import { REMOVE_CAKE } from './cakeTypes'
import { FILTER_CAKE } from './cakeTypes'

import { FILTER_LIST } from './cakeTypes'

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
const initialState = {
  searchText: "LightRoom",
  "cake": [
    {id:1,
      image: one,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "LightRoom"


    }, {
      id:2,
      image: one,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
      tag: "Photoshop"

    }, {
      id:3,
      image: two,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
      tag: "InDesign"


    }, {
      id:4,
      image: three,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s ",
      tag: "Classic"

    }, {
      id:5,
      image: four,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"


    }, {
      id:6,
      image: five,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"

    }, {
      id:7,
      image: six,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "InDesign"

    }, {
      id:8,
      image: sevan,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "InDesign1"

    }, {
      id:9,
      image: eight,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"
    }
    , {
      id:10,
      image: nine,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"
    }
    , {
      id:11,
      image: ten,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"

    }
    , {
      id:12,
      image: eleven,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Photoshop1"

    }, {
      id:13,
      image: twelve,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "LightRoom"
    }
    , {
      id:14,
      image: therten,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "LightRoom1"
    }
    , {
      id:15,
      image: fourteen,
      heading: "Adobe exchange",
      sub: "New sub ",
      desc: "We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that’s "
      , tag: "Classic"
    }
  ]
};

const cakeReducer = (state = initialState, action) => {

  console.log("action",action);
 
  switch (action.type) {

    case BUY_CAKE: return {
      ...state ,
       cake: state
    }

    case REMOVE_CAKE:
      return {
        ...state ,
        cake:state.cake.filter((x) => x.id !== 1)
      };
      case FILTER_CAKE:
        return {
          ...state ,
          cake:state.cake.filter((x) => x.tag === action.payload.filter)
          // cake:state.cake.filter(({ tag }) => tag !== action.filter)
        };
        case FILTER_LIST:
          return {
            ...state ,
            cake:initialState.cake.filter((x) => x.tag === action.payload)
            // cake:state.cake.filter((x) => x.tag === action.payload)
          };
     
    default: return state
  }

}

export default cakeReducer