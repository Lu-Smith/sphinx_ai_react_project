import React from 'react';

interface StudentProps {
  id: number;
  forename: string;
  surname: string;
  form: string;
  send: boolean;
}

interface Column {
  key: keyof StudentProps;
  label: string;
}
  
interface StudentListProps {
  students: StudentProps[];
  columns: Column[];
}

const StudentList:React.FC<StudentListProps> = ({ students, columns }) => {

  const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

  return (
    <div className="StudentList">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
          <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              {columns.map((col) => (
                <td key={col.key}>
                  {isBoolean(student[col.key])
                    ? student[col.key]
                      ? 'Yes'
                      : 'No'
                    : student[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;