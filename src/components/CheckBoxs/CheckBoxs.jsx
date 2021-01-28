import React, { useState, useEffect } from 'react'
import CheckboxGroup from 'react-checkbox-group'

export const CheckBoxs = (props) => {
  const [fruits, setFruits] = useState([])

  console.log("checkboxes");

  useEffect(() => {
    const timer = setTimeout(() => {
      // setFruits(['apple', 'orange'])
      // console.log(fruits,"fruits");
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if(fruits.length>0){
    console.log(fruits,"fruits");
  }



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

  return (

    <CheckboxGroup name="fruits" value={fruits} onChange={setFruits}>
      {(Checkbox) => (
        <ul>
          {list.map(item => (
            <li key={item}>
              <Checkbox value={item}  /> {item}
            </li>
          ))}
        </ul>
      )}
    </CheckboxGroup>
  )

};
