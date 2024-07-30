import React from 'react';
import data from '../../utils/data.json';
import Paper from 'components/Paper';
import { useParams } from 'react-router-dom';

export default function DescriptionContent() {
  const { facultyName } = useParams();
  console.log(facultyName);

  const faculty = data?.faculties?.find(
    faculty => faculty.name === facultyName
  );

  return (
    <Paper>
      <p>{faculty?.description}</p>
    </Paper>
  );
}
