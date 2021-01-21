import { createStore, combine } from 'effector';

export const $tokenKey = createStore(null);
export const $userProfile = createStore({});
export const $isAuth = createStore(true);
export const $loadApiData = createStore({
  data: {},
  isLoading: false,
  isLoaded: false,
  message: '',
});

export const customers = createStore([]);

export const customerDataFromIp = createStore({
  ip_type: '',
  domainname: '',
  customername: '',
  informaticscustomer_id: null,
});

export const customerData = createStore({
  customerData: {},
  isLoading: false,
  isLoaded: false,
  message: '',
});

export const filterData = createStore({
  filterData: {},
  isLoaded: false,
  message: '',
});

export const AppStore = combine(
  customers,
  customerDataFromIp,
  customerData,
  filterData,
  (customers, customerDataFromIp, customerData, filterData) => ({
    ...customers,
    customerData: customerData.customerData,
    ...customerDataFromIp,
    filterData: filterData.facets,
  })
);

// AppStore.watch(console.log)
