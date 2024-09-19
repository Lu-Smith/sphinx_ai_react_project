import React from 'react';

const ExplanationPage: React.FC = () => {
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
          <strong>Added Supporting Page:</strong>
          <ul>
            <li>Created the <code>ExplanationPage</code> to summarize my progress.</li>
          </ul>
        </li>
        <li>
          <strong>Optimized My Code:</strong>
          <ul>
            <li>Simplified the code by removing unnecessary code from the SearchBar and using only filtered students in the <code>StudentList</code> component.</li>
          </ul>
        </li>
        <li>
          <strong>Made Table Dynamic:</strong>
          <ul>
            <li>Dynamically display columns and rows based on the `columns` array passed as props.</li>
            <li>Implemented a sorting feature by allowing users to click on the column headers. The table now sorts the students by the selected column in ascending or descending order.</li>
            <li>Converted the static student data from a JSON file to a TypeScript file. This allows the image paths to be imported directly into the component, ensuring that each student's avatar is displayed correctly alongside their name in the table.</li>
          </ul>
        </li>
        <li>
          <strong>Styling - SCSS</strong>
          <ul>
            <li>Created basic files (_variables, _vase, _mixins)</li>
            <li>Created basic style for App.tsx</li>
            <li>Created basic styles for other components</li>
            <li>Fixed visibility proble with full name in the table</li>
          </ul>
        </li>
      </ol>
   
      
    </div>
  );
};

export default ExplanationPage;