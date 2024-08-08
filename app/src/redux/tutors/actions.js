import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// ! fara redux toolkit
// export const addTutor = tutor => {
//   return {
//     type: 'tutors/addTutor',
//     payload: {
//       id: nanoid(),
//       firstName: tutor.firstName,
//       lastName: tutor.lastName,
//       email: tutor.email,
//       phone: tutor.phone,
//       city: tutor.city,
//       options: tutor.options,
//       role: tutor.role,
//     },
//   };
// };

// * cu redux-toolkit
export const addTutor = createAction('tutors/addTutor', tutor => {
  return {
    payload: { id: nanoid(), ...tutor },
  };
});

// ! fara redux toolkit
// export const deleteTutor = tutorId => {
//   return {
//     type: 'tutors/deleteTutor',
//     payload: {
//       id: tutorId,
//     },
//   };
// };

// * cu redux-toolkit
export const deleteTutor = createAction('tutors/deleteTutor', tutorId => {
  return { payload: { id: tutorId } };
});
