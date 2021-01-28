import React from 'react';


import { useSelector, useDispatch } from 'react-redux'
import { filterCake,filterList } from '../../redux'


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

export const ListItems = (props) => {


  // const numOfCakes = useSelector(state => state.cake)
  const dispatch = useDispatch()


  const handleClickOnList = (_props) => {
   console.log(_props,"props");
  //  props.onListClick(_props);
    // dispatch(filterCake({filter:"Classic"}))
    dispatch(filterList(_props))
  };
  return (

    <>
    <ul>
      {list.map(item => {
      return <li key={item}  onClick={(e) => handleClickOnList(item)} >{item}</li>;
    })}
  </ul>

  {/* <button onClick={() => dispatch(filterCake({filter:"Classic"}))}> filter Cake </button> */}
   
  </>
  
  );
};

