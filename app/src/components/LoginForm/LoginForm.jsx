import React from 'react';

import css from './LoginForm.module.css';
import { login } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
