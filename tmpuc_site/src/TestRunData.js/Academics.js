// TestRunData.js or Admin-TeacherData.js

const studentResults = [
  {
      id: 1,
      name: "Alice Johnson",
      program: "Computer Science",
      department: "Engineering",
      results: [
          { courseCode: "CS101", grade: "A" },
          { courseCode: "CS102", grade: "B" }
      ]
  },
  {
    id: 1,
    name: "Alice Johnson",
    program: "Computer Science",
    department: "Engineering",
    results: [
        { courseCode: "CS101", grade: "A" },
        { courseCode: "CS102", grade: "B" }
    ]
},
{
  id: 1,
  name: "Alice Johnson",
  program: "Computer Science",
  department: "Engineering",
  results: [
      { courseCode: "CS101", grade: "A" },
      { courseCode: "CS102", grade: "B" }
  ]
},
{
  id: 1,
  name: "Alice Johnson",
  program: "Computer Science",
  department: "Engineering",
  results: [
      { courseCode: "CS101", grade: "A" },
      { courseCode: "CS102", grade: "B" }
  ]
},
{
  id: 1,
  name: "Alice Johnson",
  program: "Computer Science",
  department: "Engineering",
  results: [
      { courseCode: "CS101", grade: "A" },
      { courseCode: "CS102", grade: "B" }
  ]
},
  {
      id: 2,
      name: "Bob Smith",
      program: "Mathematics",
      department: "Science",
      results: [
          { courseCode: "MA101", grade: "B" },
          { courseCode: "MA102", grade: "A" }
      ]
  }
  // Add more student data as needed
];

// Transform the studentResults data to fit the table structure
const transformedData = studentResults.map(student => ({
  id: student.id,
  name: student.name,
  courseCode: student.results.map(result => result.courseCode).join(', '),
  lecturers:student.results.map(result => result.grade).join(', '),// Placeholder for lecturers
  numberOfStudents: 'Pass' // Placeholder
}));

export default transformedData;
