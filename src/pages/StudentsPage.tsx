import React, { useState } from 'react';
import StudentList from "../components/StudentList";
import studentsData from '../data/students.json';

interface StudentProps {
    id: number;
    forename: string;
    surname: string;
    form: string;
    send: boolean;
}

const StudentsPage:React.FC = () => {

    const [students, setStudents] = useState<StudentProps[]>(studentsData);

    return ( 
        <div className="StudentsPage">
            <h2>All pupils</h2>
            <StudentList students={students} />
        </div>
     );
}

export default StudentsPage;