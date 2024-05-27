import { configureStore } from '@reduxjs/toolkit'
// import {baseApi} from '../features'
// import userReducer from './user.slice'; 
// import routesReducer from './routes.slice';
import { baseApi } from '@/features/api';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // user: userReducer,
    // routes : routesReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
