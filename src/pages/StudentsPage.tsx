import React, { useState } from 'react';
import StudentList from "../components/StudentList";
import studentsData from '../data/students.json';
import SearchBar from '../components/SearchBar';

interface StudentProps {
    id: number;
    forename: string;
    surname: string;
    form: string;
    send: boolean;
}

const StudentsPage:React.FC = () => {

    const [students, setStudents] = useState<StudentProps[]>(studentsData);
    const [foundStudents, setFoundStudents] = useState<{ name: string; form: string; send: boolean }[] | null>(null);

    const handleSearch = (term: string) => {

        if (term.trim() === '') {
            setFoundStudents([]); // Clear results if search term is empty
          } else {
            const filteredStudents = students.filter(
              (student) =>
                `${student.forename} ${student.surname} ${student.form}`
                  .toLowerCase()
                  .includes(term.toLowerCase())
            );
      
            setFoundStudents(filteredStudents.map(student => ({
              name: `${student.forename} ${student.surname}`,
              form: student.form,
              send: student.send
            })));
          }
        };
    

    return ( 
        <div className="StudentsPage">
            <h2>All pupils</h2>
            <SearchBar onSearch={handleSearch} foundStudents={foundStudents} />
            <StudentList students={students} />
        </div>
     );
}

export default StudentsPage;