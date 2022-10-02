import { data } from '../data.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function StudentList() {
  const [students, setStudents] = useState(data.students);

  return (
    <>
      <h1>학생 명단</h1>
      <div>
        {students.map((students) => (
          <h4 key={students.id}>
          <Link to={`/studentlist/${students.id}`} state={{students}}>{students.name}</Link>
          </h4>
        ))}
      </div>
    </>
  )
}