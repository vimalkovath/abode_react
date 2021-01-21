import { createEffect } from "effector";
import { sendRequest } from '../../util/network';

export const fetchHomeCarousel = createEffect();

fetchHomeCarousel.use((url, options) => sendRequest(url, options));