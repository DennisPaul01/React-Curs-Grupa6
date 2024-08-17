import React, { Suspense, lazy } from 'react';

import Sidebar from './Sidebar';
import data from '../utils/data.json';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchFaculties, fetchTutors } from '../redux/operations';
// import News from './News';
import HistoryContent from './HistoryContent/HistoryContent';
import DescriptionContent from './DescriptionContent/DescriptionContent';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';

const LazyUniversityPage = lazy(() =>
  import('pages/UniversityPage/UniversityPage')
);

const LazyFacultiesPage = lazy(() =>
  import('pages/FacultiesPage/FacultiesPage')
);

const LazyFacultyContent = lazy(() =>
  import('./FacultyContent/FacultyContent')
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFaculties());
    dispatch(fetchTutors());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<LazyUniversityPage />} />
            <Route path="/university" element={<LazyUniversityPage />} />
            <Route path="/faculties" element={<LazyFacultiesPage />} />
            <Route
              path="/faculties/:facultyName"
              element={<LazyFacultyContent />}
            >
              <Route path="" element={<DescriptionContent />} />
              <Route path="description" element={<DescriptionContent />} />
              <Route path="history" element={<HistoryContent />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

// /faculties/:facultyName/history
