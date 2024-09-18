import React, { useState } from 'react';
import StudentList from "../components/StudentList";
import studentsData from '../data/students';
import SearchBar from '../components/SearchBar';

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

const StudentsPage:React.FC = () => {

    const [filteredStudents, setFilteredStudents] = useState<StudentProps[]>(studentsData);

    const columns: Column[] = [
      { key: 'fullName', label: "Full Name"},
      { key: 'form', label: "Form" },
      { key: 'send', label: "SEND" }
    ];

    const handleSearch = (term: string) => {

      if (term.trim() === '') {
        setFilteredStudents(studentsData); 
        } else {
          const filtered = studentsData.filter(
            (student) =>
              `${student.forename} ${student.surname} ${student.form}`
                .toLowerCase()
                .includes(term.toLowerCase())
          );
          setFilteredStudents(filtered);
        }
    };
    
    return ( 
      <div className="StudentsPage">
          <h2>All pupils</h2>
          <SearchBar onSearch={handleSearch} />
          <StudentList students={filteredStudents} columns={columns} />
      </div>
     );
}

export default StudentsPage;