import React from "react";
// import footerLogo from '../../images/footer_logo.png';
import {Button} from '@adobe/react-spectrum'

import { Column, Linkage, LinkP } from "../../common/styled";
import './HeaderAdobe.css';
import MenuList from "./MenuList";
export const HeaderAdobe = (props) => {
console.log("Header")
  return (
    <header id="feds-topnav" className="feds-navBar-wrapper" >
      
      <nav className="feds-navBar">

        <div id="gnav_2" className="feds-navList-wrapper">

          <ul className="feds-navList-main">

            <li id="gnav_2_0" className="feds-navList-item">
              <div id="gnav_4" className="feds-navList-wrapper">
                <ul className="feds-navListq feds-navList-main">

                  <li id="gnav_4_0" className="feds-navList-item">
                    <div id="gnav_6" className="feds-navList-wrapper">
                      <ul className="feds-navList feds-relativePosition">
                        <li id="gnav_6_0" className="feds-navList-item">
                          <div id="gnav_9" className="feds-navList-wrapper">
                            <ul className="feds-navList">
                              <li id="gnav_9_0" className="feds-navList-item">
                                <a id="gnav_12" href="https://exchange.adobe.com/" className="feds-logo" daa-ll="Logo">
                                  <span className="feds-logo-image">
                                    <img src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" alt="Adobe" />
                                  </span>
                                  <span className="feds-logo-text">
                                    Adobe Exchange
                                    </span>
                                </a>
                              </li>

                              <li id="gnav_9_1" className="feds-navList-item feds-navList-item--main">
                                <div id="gnav_15" className="feds-navList-wrapper feds-navList-wrapper--main">
                                  <aside id="gnav_42_searchTemplate" className="feds-search" role="search">
                                  <div className="feds-searchForm-wrapper">
                                    <div className="feds-searchAnnouncements" role="status"></div>
                                  </div>
                                </aside>

                                  
                                  <MenuList></MenuList>

                                   

                                    

                                 
                                </div>
                              </li>

                            </ul>
                          </div>
                        </li>

                        <li id="gnav_6_1" className="feds-navList-item">

                          <div id="gnav_38" className="feds-navList-wrapper">


                            <ul className="feds-navList signin_left">

                              <li id="gnav_38_0" className="adjest feds-navList-item">
                                <a id="gnav_42" href="#" className="feds-search-trigger" daa-ll="Search" aria-haspopup="true" aria-expanded="false" aria-label="Search" role="button">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" focusable="false">
                                    <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>
                                  </svg>
                                  <span className="feds-search-close"></span>
                                </a>
                              </li>

                              <li id="gnav_38_1" className="feds-navList-item">
                                <div id="gnav_46" className="feds-profile-wrapper">
                                <Button variant="cta">Sign In</Button>
                                  {/* <a href="#" className="feds-login" daa-ll="Sign In">Sign In</a> */}
                                </div>
                              </li>
                             
                            </ul>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </li>

                </ul>
              </div>
            </li>

          </ul>
        </div>



      </nav>
    </header>



  );
};