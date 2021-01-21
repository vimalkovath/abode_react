import _ from 'lodash';

export const isString = (strings) => {
  if (typeof strings === 'string' || strings instanceof String) {
    return true;
  } else {
    return false;
  }
};

export const doubleDigitDate = (val) => {
  return val < 10 ? '0' + val : val;
};
export const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
