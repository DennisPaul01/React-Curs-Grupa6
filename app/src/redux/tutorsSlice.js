import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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

const intialPhoneBook = {
  contacts: [{ id: 1, phone: 932321321 }],
  filter: '',
};

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState: initialStateTutors,
  reducers: {
    // addContact
    // deleteContact
    // changeFilter
    addTutor: {
      reducer(state, action) {
        state.tutors.push(action.payload);
      },
      prepare(tutor) {
        return {
          payload: {
            id: nanoid(),
            ...tutor,
          },
        };
      },
    },
    deleteTutor: {
      reducer(state, action) {
        const index = state.tutors.findIndex(
          tutor => tutor.id === action.payload.id
        );
        state.tutors.splice(index, 1);
      },
      prepare(tutorId) {
        return { payload: { id: tutorId } };
      },
    },
  },
});

export const { addTutor, deleteTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;
