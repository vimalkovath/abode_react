import { BUY_CAKE } from './cakeTypes'
import { REMOVE_CAKE } from './cakeTypes'
import { FILTER_CAKE } from './cakeTypes'

import { FILTER_LIST } from './cakeTypes'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const removeCake = ({ id } = {}) => ({
  type: REMOVE_CAKE,
  payload: id
});

export const filterCake = (filter) => ({
  type: FILTER_CAKE,
  payload: filter
});

export const filterList = (filter) => ({
  type: FILTER_LIST,
  payload: filter
});


