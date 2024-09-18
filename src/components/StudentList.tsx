import React from 'react';

interface StudentProps {
    id: number;
    forename: string;
    surname: string;
    form: string;
    send: boolean;
  }
  
  interface StudentListProps {
    students: StudentProps[];
  }

const StudentList:React.FC<StudentListProps> = ({ students }) => {

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