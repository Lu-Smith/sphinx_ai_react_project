import React, { useState } from 'react';
import studentsData from '../data/students.json';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="StudentList">
        <table>
            <thead>
                <tr>
                    <th>Pupil's Name</th>
                    <th>Form</th>
                    <th>SEND</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                    <td>{student.forename} {student.surname}</td>
                    <td>{student.form}</td>
                    <td>{student.send ? 'Yes' : 'No'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default StudentList;