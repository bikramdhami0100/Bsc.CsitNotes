import Link from "next/link";

const semesters = [
  {
    semester: "First Semester",
    color: "blue",
    year: "1st Year",
    courses: [
      "English Grammar and Composition (CSIT 111)",
      "Information Technology Fundamentals (CSIT 112)",
      "Calculus and Analytical Geometry (CSIT 113)",
      "Electronic Principles TH (CSIT 114)",
      "Electronic Principles PR (CSIT 114)",
      "Programming Fundamentals & C Programming (CSIT 115)"
    ]
  },
  {
    semester: "Second Semester",
    color: "blue",
    year: "1st Year",
    courses: [
      "Data Structure and Algorithms (CSIT 121)",
      "Digital Logic Design (CSIT 122)",
      "Linear Algebra (CSIT 123)",
      "Mechanics & Electrodynamics TH (CSIT 124)",
      "Mechanics & Electrodynamics PR (CSIT 124)",
      "Microprocessor System (CSIT 125)"
    ]
  },
  {
    semester: "Third Semester",
    color: "green",
    year: "2nd Year",
    courses: [
      "Computer Organization and Architecture (CSIT 211)",
      "Discrete Structures (CSIT 212)",
      "Introduction to Management (CSIT 213)",
      "Object-Oriented Programming with C++ (CSIT 214)",
      "Operating Systems (CSIT 215)",
      "Statistics and Probability (CSIT 216)"
    ]
  },
  {
    semester: "Fourth Semester",
    color: "green",
    year: "2nd Year",
    courses: [
      "Applied Statistics (CSIT 221)",
      "Data Communication and Networks (CSIT 222)",
      "Database Management Systems (CSIT 223)",
      "Numerical Methods (CSIT 224)",
      "System Analysis and Design (CSIT 225)",
      "Theory of Computation (CSIT 226)"
    ]
  },
  {
    semester: "Fifth Semester",
    color: "purple",
    year: "3rd Year",
    courses: [
      "Design and Analysis of Algorithm (CSIT 311)",
      "Artificial Intelligence (CSIT 312)",
      "Compiler Design (CSIT 313)",
      "Simulation and Modelling (CSIT 314)",
      "Graphics and Virtual Computing (CSIT 315)",
      "Web Technology I (CSIT 316)"
    ]
  },
  {
    semester: "Sixth Semester",
    color: "purple",
    year: "3rd Year",
    courses: [
      "Introduction to Cryptography (CSIT 321)",
      "Java Programming I (CSIT 322)",
      "Research Methodology for Computer Science (CSIT 323)",
      "Software Engineering (CSIT 324)",
      "Web Technology II (CSIT 325)",
      "Minor Project I (CSIT 326)"
    ]
  },
  {
    semester: "Seventh Semester",
    color: "red",
    year: "4th Year",
    courses: [
      "E-Commerce (CSIT 411)",
      "Advanced Java Programming (CSIT 412)",
      "Object-Oriented Analysis and Design (CSIT 413)",
      "Minor Project II (CSIT 414)",
      "Database Administration (Elective I, CSIT 415.2)",
      "Data Mining and Warehousing (Elective II, CSIT 416.1)"
    ]
  },
  {
    semester: "Eighth Semester",
    color: "red",
    year: "4th Year",
    courses: [
      "Parallel Computing (CSIT 421)",
      "Internship (CSIT 422)",
      "Advanced Database Design (Elective III, CSIT 423)",
      "Distributed Database Management System (Elective IV, CSIT 424)",
      "E-Business and E-Governance (Elective V, CSIT 425)"
    ]
  }
];

const colorClasses = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-800', button: 'bg-blue-600 hover:bg-blue-700' },
  green: { bg: 'bg-green-100', text: 'text-green-800', button: 'bg-green-600 hover:bg-green-700' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-800', button: 'bg-purple-600 hover:bg-purple-700' },
  red: { bg: 'bg-red-100', text: 'text-red-800', button: 'bg-red-600 hover:bg-red-700' },
};

const SemestersSection = () => {
  return (
    <section id="semesters" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Semester-wise Notes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials and notes for each semester of the BSC CSIT program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesters.map((semester) => {
            const colors = colorClasses[semester.color];
            return (
              <div key={semester.semester} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{semester.semester}</h3>
                  <span className={`${colors.bg} ${colors.text} text-xs px-2 py-1 rounded-full`}>{semester.year}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {semester.courses.map(subject => <li key={subject}>• {subject}</li>)}
                </ul>
                <Link href={`/semester/${semester.semester}`} className={`w-full cursor-pointer ${colors.button} text-white py-2 px-4 rounded-lg transition-colors`}>
                  View Notes
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SemestersSection;
