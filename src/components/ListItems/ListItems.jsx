import React, { useState,useCallback } from 'react';


import { useSelector, useDispatch } from 'react-redux'
import { filterCake, filterList } from '../../redux'


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

  const [listClick, setListClick] = useState("All");

  // const numOfCakes = useSelector(state => state.cake)
  const dispatch = useDispatch()

  // let listItems3 = useMemo(()=> listItems2 , [])
  const handleClickOnList =  useCallback((_props) => {
    console.log(_props, "props");
    setListClick(_props);
    dispatch(filterList(_props))
  },
    [listClick]
  );

  // const handleClickOnList = (_props) => {
  //   console.log(_props, "props");
  //   dispatch(filterList(_props))
  // };

  return (

    <>
      <ul>
        {list.map(item => {
          return <li key={item} onClick={(e) => handleClickOnList(item)} >{item}</li>;
        })}
      </ul>

      {/* <button onClick={() => dispatch(filterCake({filter:"Classic"}))}> filter Cake </button> */}

    </>

  );
};

