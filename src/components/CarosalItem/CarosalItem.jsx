


import React from 'react';

export const CarosalItem = ({image,heading,sub}) => {
  console.log(image,heading,sub,"console");
  return (

      <div>
        <img className="carosal_Image" src={image} alt="" />
        <div>
          <div>
            {heading}
          </div>
          <div>
            {sub}
          </div>
        </div>
      </div>

  );
};
