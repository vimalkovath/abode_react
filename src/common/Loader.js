import React from 'react';

import { RotatingGif, LoaderCol } from './styled';

export const Loader = () => {
  return (
    <LoaderCol>
      <img
        alt='Loader'
        src={require('./../asset/image/cat.gif')}
        height='100%'
      />
    </LoaderCol>
  );
};
