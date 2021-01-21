import React from 'react';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.css';

export default function Layout({ children, sidebar }) {
  return (
    <div id='Layout' className='row'>
      <div className='pl-0 col-3'>
        <Navigation />
      </div>
      <div className='col-9'>
        <div className='row'>
          <div id='Body' className='col-8'>
            {children}
          </div>
          <div className='col-4 px-0'>
            <Sidebar>{sidebar}</Sidebar>
          </div>
        </div>
      </div>
    </div>
  );
}
