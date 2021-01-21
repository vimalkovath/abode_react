import { createStore, combine } from "effector";
import { fetchHomeCarousel } from './HomeEvents';
import { AppStore } from '../../store/store';

export const CarouselStore = createStore({
  data: {},
  isLoading: false,
  isLoaded: false,
  message: '',
})
  .on(fetchHomeCarousel, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  })
  .on(fetchHomeCarousel.doneData, (state, { data, message }) => {
    return {
      ...state,
      data: data[0][0],
      message: message,
      isLoading: false,
      isLoaded: true,
    }
  })
  .on(fetchHomeCarousel.fail, (state, { error }) => {
    return {
      ...state,
      data: [],
      message: error,
      isLoading: false,
    }
  });

const ArticleFiterStore = createStore({

})

export const $HomeStore = combine(AppStore, CarouselStore, (AppStore, CarouselStore) => ({ 
  CarouselData: CarouselStore,
  AppData: AppStore,
 }));
