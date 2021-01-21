import { createEvent, createEffect } from 'effector';
import _ from 'lodash';

import {
  $tokenKey,
  $userProfile,
  $isAuth,
  $loadApiData,
  customers,
  customerDataFromIp,
  customerData,
  filterData,
} from '../store/store';

export const setTokenKey = createEvent();
export const setUserProfile = createEvent();
export const setIsAuth = createEvent();
export const getApiData = createEffect();
export const setCustomer = createEvent();
getApiData.use(async (url, options) => {
  const req = await fetch(url);
  return req.json();
});

$isAuth.on(setIsAuth, (current, isAuth) => isAuth);
$tokenKey.on(setTokenKey, (current, tokenKey) => tokenKey);
$userProfile.on(setUserProfile, (current, userProfile) => userProfile);

// Loading API data
$loadApiData
  .on(getApiData, (state) => {
    return {
      ...state,
      isLoading: true,
      isLoaded: false,
    };
  })
  .on(getApiData.doneData, (state, { data, message }) => {
    console.log(data);
    return {
      ...state,
      data: data,
      message: message,
      isLoading: false,
      isLoaded: true,
    };
  })
  .on(getApiData.fail, (state, { error }) => {
    return {
      ...state,
      data: [],
      message: error,
      isLoading: false,
      isLoaded: true,
    };
  });

// Customer Data effects

export const loadCustomerInitialDataWithIp = createEffect(
  'Load customer IP data'
);
loadCustomerInitialDataWithIp.use(async (url, options) => {
  const req = await fetch(url);
  return req.json();
});

export const loadCustomerData = createEffect('Load customer data');
loadCustomerData.use(async (url, options) => {
  const req = await fetch(url);
  return req.json();
});

export const loadFilterData = createEffect('Load filter data');
loadFilterData.use(async (url, options) => {
  const req = await fetch(url);
  return req.json();
});

customers
  .on(loadCustomerInitialDataWithIp, (state) => state)
  .on(loadCustomerInitialDataWithIp.doneData, (state, { data }) => {
    if (_.isArray(data[0][0])) {
      return {
        ...state,
        customers: data[0][0],
      };
    }
  });

customerDataFromIp
  .on(loadCustomerInitialDataWithIp, (state) => state)
  .on(loadCustomerInitialDataWithIp.doneData, (state, { data }) => {
    if (!_.isArray(data[0][0])) {
      return {
        ...state,
        ...data[0][0],
      };
    }
  });

customerDataFromIp.on(setCustomer, (current, customer) => customer);

const unsubscribe = customerDataFromIp.watch((customerData) => {
  if (customerData.informaticscustomer_id !== null) {
    loadCustomerData(
      'http://diskover.informaticsglobal.com/api/CustomerDetailsbyID/CustomerDetailsbyID?customerId=' +
        customerData.informaticscustomer_id,
      []
    );
    loadFilterData(
      'http://diskover.informaticsglobal.com/api/GetAdvancedSearchDetails/GetAdvancedSearchDetails?customerId=' +
        customerData.informaticscustomer_id,
      []
    );
    unsubscribe();
  }
});

customerData
  .on(loadCustomerData, (state) => {
    return {
      ...state,
      isLoading: true,
      isLoaded: false,
    };
  })
  .on(loadCustomerData.doneData, (state, { data, message }) => {
    return {
      ...state,
      customerData: data[0][0],
      message: message,
      isLoading: false,
      isLoaded: true,
    };
  })
  .on(loadCustomerData.fail, (state, { error }) => {
    return {
      ...state,
      customerData: [],
      message: error,
      isLoading: false,
      isLoaded: true,
    };
  });

filterData
  .on(loadFilterData, (state) => {
    return {
      ...state,
      isLoading: true,
      isLoaded: false,
    };
  })
  .on(loadFilterData.doneData, (state, { data, message }) => {
    return {
      ...state,
      facets: data[0][0],
      message: message,
      isLoading: false,
      isLoaded: true,
    };
  })
  .on(loadFilterData.fail, (state, { error }) => {
    return {
      ...state,
      facets: [],
      message: error,
      isLoading: false,
      isLoaded: true,
    };
  });
