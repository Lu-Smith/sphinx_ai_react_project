import React from 'react';

const ExplanationPage = () => {
  return ( 
    <div className="ExplanationPage">
      <h2>My Process</h2>
      <ol>
        <li>
          <strong>Project Setup:</strong>
          <ul>
            <li>Created a React project using Vite with TypeScript.</li>
            <li>Removed unnecessary code.</li>
            <li>Added a favicon and title.</li>
          </ul>
        </li>
        <li>
          <strong>Student Data:</strong>
          <ul>
            <li>Defined a static JSON file containing student data with fields: id, forename, surname, form, and send.</li>
            <li>Sample data used includes students from Harry Potter.</li>
          </ul>
        </li>
        <li>
          <strong>Routing and Search Functionality:</strong>
          <ul>
            <li>Implemented routing and created a <code>HomePage</code>, and a <code>StudentsPage</code> component to display the list of students and a search bar.</li>
          </ul>
        </li>
        <li>
          <strong>Component Creation:</strong>
          <ul>
            <li>Created the <code>StudentList</code> component to display a table of students.</li>
            <li>Each student is displayed in a row with columns for name, form, and SEND status.</li>
            <li>Created a <code>SearchBar</code> component to handle user input for searching by name or form.</li>
            <li>Updated the search functionality to filter students based on the search term and display matching results.</li>
          </ul>
        </li>
        <li>
          <strong>Added Supportin Page</strong>
          <ul>
            <li>Created the <code>Explanation Page</code> to summarize my progress.</li>
          </ul>
        </li>
      </ol>
   
      
    </div>
  );
};

export default ExplanationPage;