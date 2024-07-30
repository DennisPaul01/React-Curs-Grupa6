import React from 'react';
import data from '../../utils/data.json';
import Paper from 'components/Paper';
import { useParams } from 'react-router-dom';

export default function HistoryContent() {
  const { facultyName } = useParams();

  const faculty = data?.faculties?.find(
    faculty => faculty.name === facultyName
  );
  return (
    <Paper>
      <p>{faculty?.history}</p>
    </Paper>
  );
}
