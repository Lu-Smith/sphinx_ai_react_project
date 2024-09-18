import React, {useState, useEffect} from 'react';

interface StudentProps {
  id: number;
  forename: string;
  surname: string;
  form: string;
  send: boolean;
  src: string;
}

interface Column {
  key: keyof StudentProps | 'fullName';
  label: string;
}
  
interface StudentListProps {
  students: StudentProps[];
  columns: Column[];
}

const StudentList:React.FC<StudentListProps> = ({ students, columns }) => {
  const [sortedStudents, setSortedStudents] = useState<StudentProps[]>(students);
  const [sortColumn, setSortColumn] = useState<keyof StudentProps | 'fullName' | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    setSortedStudents(students);
  }, [students]);

  const handleSort = (column: keyof StudentProps | 'fullName') => {
    const newSortOrder = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    setSortColumn(column);

    const sorted = [...students].sort((a, b) => {
      if (column === 'fullName') {
        const fullNameA = `${a.forename} ${a.surname}`.toLowerCase();
        const fullNameB = `${b.forename} ${b.surname}`.toLowerCase();
        return fullNameA < fullNameB ? (newSortOrder === 'asc' ? -1 : 1) : fullNameA > fullNameB ? (newSortOrder === 'asc' ? 1 : -1) : 0;
      } else {
        if (a[column] < b[column]) return newSortOrder === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return newSortOrder === 'asc' ? 1 : -1;
        return 0;
      }
    });
    setSortedStudents(sorted);
  };

  const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}  onClick={() => handleSort(col.key)}>
              {col.label} {sortColumn === col.key ? (sortOrder === 'asc' ? '🔼' : '🔽') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedStudents.map((student) => (
          <tr key={student.id}>
            {columns.map((col) => (
              <td key={col.key}>
                  {col.key === 'fullName' ? (
                  <div className='forename-container'>
                    <img
                      src={student.src}
                      alt={`${student.forename}'s avatar`}
                    />
                    {`${student.forename} ${student.surname}`}
                  </div>
                ) : isBoolean(student[col.key]) ? (
                  student[col.key] ? 'Yes' : 'No'
                ) : (
                  student[col.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;