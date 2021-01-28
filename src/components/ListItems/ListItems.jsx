import React, { useState, useCallback, useEffect } from 'react';


import { useSelector, useDispatch } from 'react-redux'
import { filterAll, filterCake, filterList } from '../../redux'


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

  const [listClick, setListClick] = useState("init");

  // const numOfCakes = useSelector(state => state.cake)
  const dispatch = useDispatch();

  // let listItems3 = useMemo(()=> listItems2 , [])
  // const handleClickOnList =  useCallback((_props) => {
  //   console.log(_props, "props");
  //   setListClick(_props);
  //   dispatch(filterList(_props))
  // },
  //   [listClick]
  // );

  useEffect(() => {

    handleClickOnList(listClick);

  }, [listClick]) // Only re-run the effect if count changes

  const handleClickOnList = (_props) => {
    if (listClick == "init") {
      console.log(_props, "props", listClick);


    }
    else {
      if (listClick == "All") {
        dispatch(filterAll("All"))
      } else {
        dispatch(filterList(_props));
      }
    }
  };

  return (
    // onClick={(e) => handleClickOnList(item)}
    <>
      <ul>
        {list.map(item => {
          return <li key={item} onClick={(e) => setListClick(item)} >{item}</li>;
        })}
      </ul>

      {/* <button onClick={() => dispatch(filterCake({filter:"Classic"}))}> filter Cake </button> */}

    </>

  );
};

