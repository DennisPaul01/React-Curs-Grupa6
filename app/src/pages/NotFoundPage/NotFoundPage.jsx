import React from 'react';
import NotFoundImg from '../../images/icon/browser-error-404-icon.svg';
import style from './NotFoundPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/faculties';

  const handleRedirect = () => {
    navigate(backLinkHref);
  };

  return (
    <div className={style.notFoundContainer}>
      <img className={style.notFoundImg} src={NotFoundImg} alt="Not Found" />
      <p className={style.notFoundText}>Ruta nu exista</p>
      <button onClick={handleRedirect}>Inapoi la pagina principala!</button>
    </div>
  );
}
