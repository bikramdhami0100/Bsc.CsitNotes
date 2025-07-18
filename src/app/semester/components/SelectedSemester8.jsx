"use client";
import React, { useState } from "react";
import { Book, Eye, Download, Loader } from "lucide-react";

const subjects = [
  {
    name: "Advanced Database Systems",
    resources: [
      {
        label: "AdvanceDBParasChandPrep.pdf",
        link: "https://drive.google.com/file/d/1_-SxI9GJxq4eXB0Y33WUfinYaWIh24fr/view?usp=drivesdk",
      },
      {
        label: "advancedb.pdf",
        link: "https://drive.google.com/file/d/13IuUfum2SO1TAKGPtEATTEq4KzMvrTpE/view?usp=drivesdk",
      },
      {
        label: "Advanced database design byNC.pdf",
        link: "https://drive.google.com/file/d/1DVC5I1Sftk9WvYLMmKaSybWtI1YEm-wu/view?usp=drivesdk",
      },
      {
        label: "[12 marks] Advance Database Design.pdf",
        link: "https://drive.google.com/file/d/1VETtc2YpOcB-i1xyc0Bw3WtApqRct-Pf/view?usp=drivesdk",
      },
      {
        label: "QNS. advance database system.docx",
        link: "https://docs.google.com/document/d/1quT0V0acl2Q-AK34SOivCyrRN66R6LZX/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
    ],
  },
  {
    name: "Parallel Computing",
    resources: [
      {
        label: "parallelComputing_paras.pdf",
        link: "https://drive.google.com/file/d/1_QP-ZaVpjiDZ98n6obctdZ2Ou78uSnx4/view?usp=drivesdk",
      },
      {
        label: "parallelComputing_paras. .pdf",
        link: "https://drive.google.com/file/d/1sz__vo-JPFbJhryCozyczAHRzkXITsl9/view?usp=drivesdk",
      },
      {
        label: "QNS. Parallel Computing.docx",
        link: "https://docs.google.com/document/d/1r_a_EsSQc3dZO41yarbq6aV4cLqtXV9v/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
      {
        label: "parallel very short.docx",
        link: "https://docs.google.com/document/d/1YqihdMxkyRRM7mIJ4KnXIFKHdaY_7M3K/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
    ],
  },
  {
    name: "E-Governance",
    resources: [
      {
        label: "e-governance .pdf",
        link: "https://drive.google.com/file/d/1RXJRttVJ4fr2E6bAU-vv253uoLCBSL3t/view?usp=drivesdk",
      },
      {
        label: "E-Governance.docx",
        link: "https://docs.google.com/document/d/11mKc_PG9rOcz8hhqXKDSKG9y19eskW4z/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
      {
        label: "eGovParasQA.pdf",
        link: "https://drive.google.com/file/d/1GFlXi33znxtPn1lc5dX9CMyMbKVIrhF1/view?usp=drivesdk",
      },
      {
        label: "egvQuestions.txt",
        link: "https://drive.google.com/file/d/1vWSTDzp0DHuQJVfwFedVLY7olLsw3NxC/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Cloud Computing",
    resources: [
      {
        label: "cloudcomputing .pdf",
        link: "https://drive.google.com/file/d/1u6H1K9UsPnq6dRmbN6gPSsZyvlGxeJGH/view?usp=drivesdk",
      },
      {
        label: "parasCloudCOmputing.pdf",
        link: "https://drive.google.com/file/d/1MjYryRrwo1jTHjKAggQUYwwNX-3jDyQC/view?usp=drivesdk",
      },
      {
        label: "Cloud Computing .docx",
        link: "https://docs.google.com/document/d/1I6NpNcRK-jZ1W528GzoOxJUHKE5buKoH/edit?usp=drivesdk&ouid=104518133683467276622&rtpof=true&sd=true",
      },
    ],
  },
{
    name: "Syllabus",
    resources: [
      {
        label: "8th sem syllabus FWU BSC CSIT.pdf",
        // link: "https://drive.google.com/file/d/1vyqypNtclbXWTEmZfSTQ4Ii3IBp9-hu_/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Old Question Papers",
    resources: [
 
      {
        label: "8th sem Qn paper 2080yr.pdf",
        link: "https://drive.google.com/file/d/1ho3Diu1zfBMe-3vs-3yrrS4kd2NSoqoE/view?usp=drivesdk"
      }
    ]
  }
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

const SelectedSemester8 = ({ semesterName = "Semester VI" }) => {
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

export default SelectedSemester8;
