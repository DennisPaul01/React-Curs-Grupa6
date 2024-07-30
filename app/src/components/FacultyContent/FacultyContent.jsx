import React from 'react';
import data from '../../utils/data.json';
import Paper from 'components/Paper';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function FacultyContent() {
  const { facultyName } = useParams();
  console.log(facultyName);

  const faculty = data?.faculties?.find(
    faculty => faculty.name === facultyName
  );

  console.log(faculty);
  return (
    <div>
      <h1>Name: {faculty?.name}</h1>

      <Link to="description">description</Link>
      <Link to="history">history</Link>

      <Outlet />
    </div>
  );
}
