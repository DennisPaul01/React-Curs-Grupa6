import React from 'react';

import Paper from 'components/Paper';
import { useParams } from 'react-router-dom';
import styles from './DescriptionContent.module.css';

import { useSelector } from 'react-redux';
import { selectFaculties } from '../../redux/selectors';

export default function DescriptionContent() {
  const { facultyName } = useParams();
  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find(faculty => faculty.name === facultyName);

  return (
    <Paper>
      <p className={styles.text}>{faculty?.description}</p>
    </Paper>
  );
}
