import { addTutor, deleteTutor } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialStateTutors = {
  tutors: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      phone: '+1 302-865-7394',
      email: 'johnsmith@goit.global',
      city: 'New York',
      options: 'Group creation',
      role: 'admin',
    },
    {
      id: 2,
      firstName: 'Antonio',
      lastName: 'García',
      phone: '+34 456 890 302',
      email: 'antonio.garcia@goit.global',
      city: 'Madrid',
      options: 'Group creation, editing teacher profiles',
      role: 'member',
    },
    {
      lastName: 'Ion',
      firstName: 'Test',
      email: 'test@test.com',
      phone: '123456',
      city: 'Test',
      id: 3,
    },
  ],
};

// ! fara redux toolkit
// export const tutorsReducer = (state = initialStateTutors, action) => {
//   switch (action.type) {
//     case addTutor.type: {
//       return { ...state, tutors: [...state.tutors, action.payload] };
//     }
//     case deleteTutor.type: {
//       return {
//         ...state,
//         tutors: state.tutors.filter(tutor => tutor.id !== action.payload.id),
//       };
//     }
//     default:
//       return state;
//   }
// };

// * cu redux-toolkit (createReducer)
export const tutorsReducer = createReducer(initialStateTutors, builder => {
  builder.addCase(addTutor, (state, action) => {
    state.tutors.push(action.payload);
  });
  builder.addCase(deleteTutor, (state, action) => {
    console.log(action);
    const index = state.tutors.findIndex(
      tutor => tutor.id === action.payload.id
    );
    state.tutors.splice(index, 1);
  });
});
