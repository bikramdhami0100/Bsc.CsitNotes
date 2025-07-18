// "use client"
import React from 'react';
import { Book, FileText, ListChecks } from 'lucide-react';
import Link from 'next/link';

const SelectedSemester = ({ semesterName = 'Semester I'}) => {
  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{semesterName}</h1>
          <p className="text-gray-600 text-lg">
            Explore all the available resources for {semesterName} including notes, question papers, and syllabus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{subject.name}</h3>
              <div className="space-y-3">
                <Link href={`/semester/${subject}`} className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                  <Book className="w-5 h-5" /> {subject} 
                </Link>
                <button className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                  <FileText className="w-5 h-5" /> Question Papers
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200">
                  <ListChecks className="w-5 h-5" /> View Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedSemester;
