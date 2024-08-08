// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { tutorsReducer } from './tutors/reducer';
// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { tutorsReducer } from './tutorsSlice';

// export const rootReducer = (state = {}, action) => {
//   return {
//     tutors: tutorsReducer,
//   };
// };

// export const rootReducer = combineReducers({
//   tutorsSlice: tutorsReducer,
// });

// const enhancer = devToolsEnhancer();

// ! fara toolkit
// export const store = createStore(rootReducer, enhancer);

// ! cu toolkit
export const store = configureStore({
  reducer: {
    tutorsSlice: tutorsReducer,
    // universitySlice: universityReducer
  },
});
