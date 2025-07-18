"use client";
import React, { useState } from "react";
import { Book, Eye, Download, Loader } from "lucide-react";

const subjects = [
  {
    name: "Database Administration",
    resources: [
      {
        label: "DBA by Dipa Joshi.pdf",
        link: "https://drive.google.com/file/d/1QQTbP63tpu5b6BxqYBMICbHo8QQVskBN/view?usp=drivesdk",
      },
      {
        label: "DBA COMPLETE NOTE.pdf",
        link: "https://drive.google.com/file/d/1HZWI_LHhkKFykO2hjHkseyI1b9GWMl3v/view?usp=drivesdk",
      },
      {
        label: "DataBaseAdministration-Complete-Notes.pdf",
        link: "https://drive.google.com/file/d/1FFDXeRFlB615WmA7UwZ1QjDXOIlYq_7m/view?usp=drivesdk",
      },
      {
        label: "DBAnc.pdf",
        link: "https://drive.google.com/file/d/1LJhMZCCBATHmWZJq9mEidURNjq-15wA3/view?usp=drivesdk",
      },
      {
        label: "DBA note.pdf",
        link: "https://drive.google.com/file/d/1NnaHJIYPHgr-Z2DzkHlLW1pxlyf3wdIB/view?usp=drivesdk",
      },
      {
        label: "Database Administrator Notes (DOC)",
        link: "https://docs.google.com/document/d/1iS1NEFjL1uHTH0DB8L1ouWRCo6Cb6PVX/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
    ],
  },
  {
    name: "Java Programming II",
    resources: [
      {
        label: "Java Deepa 7th Sem.pdf",
        link: "https://drive.google.com/file/d/18sIB8P0TDZuMSaz3DGe0gmp4nKx2hNxR/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Object Oriented Analysis and Design (OOAD)",
    resources: [
      {
        label: "OOAD-notes.pdf",
        link: "https://drive.google.com/file/d/1hhnVvqx4OgGSyJ7_Upnotmd3ANE4zml8/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Data Mining",
    resources: [
      {
        label: "Data Mining.pdf",
        link: "https://drive.google.com/file/d/1MTeBMB6UymRnkQ6k6HiFmeJqW8M5eg4E/view?usp=drivesdk",
      },
    ],
  },
  {
    name:"E commerce",
    resources: [
      {
        label: "E-commerce notes.docx",
        link: "https://docs.google.com/document/d/1nPgtBzgivSYSPPwyXGcqPJPERjjgQm4X/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
    ],
  },
  {
    name: "Miscellaneous / Unsorted",
    resources: [
      {
        label: "Oracle Database Security.pdf",
        link: "https://drive.google.com/file/d/1cfZxfZS6SBp-Cxg-Pv32dX7PVr3o3B_Q/view?usp=drivesdk",
      },
      {
        label: "Syllabus ",
        link: "https://drive.google.com/file/d/1EHHai7HCc-vJCd7m7TYpi9g7sM6I16yA/view?usp=drivesdk",
      },
    ],
  },
//   {
//     name: "Folders (Manual Review Needed)",
//     resources: [
//       {
//         label: "New Folder",
//         link: "https://drive.google.com/drive/folders/11qZaGt-uP9By-gVOS-XSqh9N3-TV_0he",
//       },
//       {
//         label: "New Folder Another",
//         link: "https://drive.google.com/drive/folders/1VtlUm3tbwjruMvUp69v4A3IY-BajG3fs",
//       },
//       {
//         label: "Advanced JAVA Folder",
//         link: "https://drive.google.com/drive/folders/1dVkL7Fl4b55qAXuqisAjR6unm3aLbDAx",
//       },
//     ],
//   },
];

const getDownloadLink = (viewLink) => {
  try {
    const fileId = viewLink.match(/\/d\/(.*?)\//)?.[1];
    if (!fileId) throw new Error("Invalid Google Drive link");
    return `https://drive.usercontent.google.com/u/0/uc?id=${fileId}&export=download`;
  } catch (error) {
    console.error("Error generating download link:", error);
    return null;
  }
};

const SelectedSemester6 = ({ semesterName = "Semester VI" }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleView = (link) => {
    const embedUrl = link.replace("/view", "/preview");
    setPreviewUrl(embedUrl);
  };

  const handleDownload = (link, subjectIndex, resourceIndex) => {
    const uniqueIndex = `${subjectIndex}-${resourceIndex}`;
    setLoadingIndex(uniqueIndex);
    const downloadUrl = getDownloadLink(link);
    if (downloadUrl) {
      window.location.href = downloadUrl;
    }
    setTimeout(() => setLoadingIndex(null), 1000);
  };

  if (previewUrl) {
    return (
      <div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white shadow-sm cursor-pointer p-2 m-2 rounded"
            onClick={() => setPreviewUrl(null)}
          >
            &larr; Back
          </button>
        </div>
        <iframe src={previewUrl} width="100%" height="600px" />
      </div>
    );
  }

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
          {subjects?.map((subject, subjectIndex) => (
            <div
              key={subject.name}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{subject.name}</h3>
              <div className="space-y-3">
                {subject?.resources.map((res, resourceIndex) => {
                  const isLoading = loadingIndex === `${subjectIndex}-${resourceIndex}`;
                  return (
                    <div
                      key={res.label}
                      className="w-full flex justify-between items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200"
                    >
                      <div className="flex gap-1 items-center">
                        <Book className="w-5 h-5" /> {res.label}
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <Eye
                          onClick={() => handleView(res.link)}
                          className="w-5 h-5 cursor-pointer"
                          title="Preview"
                        />
                        {isLoading ? (
                          <Loader className="w-5 h-5 animate-spin" />
                        ) : (
                          <Download
                            onClick={() => handleDownload(res.link, subjectIndex, resourceIndex)}
                            className="w-5 h-5 cursor-pointer"
                            title="Download"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedSemester6;
