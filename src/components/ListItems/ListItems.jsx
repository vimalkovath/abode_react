import React from 'react';

const list = [
  'All', 
  'Photoshop',
  'InDesign',
  'DreamViewer',
  'LightRoom',
  'Classic',
  'Photoshop1',
  'InDesign1',
  'DreamViewer1',
  'LightRoom1',
  'Classic1',
  'Photoshopv1',
  'InDesignv1',
  'DreamViewerv1',
  'LightRoomv1',
  ];

export const ListItems = () => {
  return (
    <ul>
    {list.map(item => {
      return <li key={item}>{item}</li>;
    })}
  </ul>
  );
};
