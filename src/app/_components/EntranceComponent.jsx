"use client";
import React, { useState } from "react";
import { Book, Eye, Download, Loader } from "lucide-react";

// Helper to generate download link
const getDownloadLink = (viewLink) => {
  try {
    const fileId = viewLink.match(/\/d\/(.*?)\//)?.[1];
    if (!fileId) throw new Error("Invalid Google Drive file link");
    return `https://drive.usercontent.google.com/u/0/uc?id=${fileId}&export=download`;
  } catch (err) {
    console.error("Download link error:", err);
    return null;
  }
};
const papers = [
  {
    name: "BSc. CSIT Entrance",
    resources: [
      {
        label:
          "BSc. GS --FWU-- 2077 year  Entrance Exam Model Question paper 2077.pdf",
        link: "https://drive.google.com/file/d/1Dmk2v8ksvAyS297tr8LgC8vtwvt33uZP/view?usp=drivesdk",
      },
      {
        label:
          "BSc. CSIT --FWU-- 2080 year Entrance Exam Model Question Paper.pdf",
        link: "https://drive.google.com/file/d/1hWbtectMnhCfZt6a-FkG2e8LH00hlita/view?usp=drivesdk",
      },
      {
        label: "BSc. CSIT --FWU-- 2077 year Entrance Exam Model Question.pdf",
        link: "https://drive.google.com/file/d/14nikjVX6bv6GdQ5IEmJScZtQFjOWMUvt/view?usp=drivesdk",
      },
      {
        label: "BSc. CSIT --FWU-- 2074 year Entrance Exam Model QN paper.pdf",
        link: "https://drive.google.com/file/d/1b5rQqamiTC702rLmD_sBxqWVhs-qW20p/view?usp=drivesdk",
      },
      //   {
      //     label: "What to read for BSc CSIT Entrance (Image)",
      //     link: "https://drive.google.com/file/d/1CNBKCrS4pdn4QRwHgi3Hf9Jza3KvXZaT/view?usp=drivesdk",
      //   },
    ],
  },
  //   {
  //     name: "Folders (Manual Review Needed)",
  //     resources: [
  //       {
  //         label: "Other Papers!!!  --> {Credit:: To Rightful Owner}",
  //         link: "https://drive.google.com/drive/folders/1ztZgIZFk4a9HtqpH-atY2k4hFCQa5C6s",
  //       },
  //     ],
  //   },
];

const EntranceComponent = ({ semesterName = "Semester VI" }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleView = (link) => {
    if (link.includes("drive.google.com/drive/folders/")) {
      window.open(link, "_blank");
    } else {
      const embedUrl = link.replace("/view", "/preview");
      setPreviewUrl(embedUrl);
    }
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
      <div className="p-4">
        <button
          onClick={() => setPreviewUrl(null)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700"
        >
          &larr; Back
        </button>
        <iframe
          src={previewUrl}
          width="100%"
          height="600px"
          className="rounded border shadow"
        />
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BSc. CSIT Entrance Resources
          </h1>
          <p className="text-gray-600 text-lg">
            View or download previous entrance papers and guides.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {papers.map((group, subjectIndex) => (
            <div
              key={group.name}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {group.name}
              </h3>
              <div className="space-y-3">
                {group.resources.map((res, resourceIndex) => {
                  const isLoading =
                    loadingIndex === `${subjectIndex}-${resourceIndex}`;
                  return (
                    <div
                      key={resourceIndex}
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
                            onClick={() =>
                              handleDownload(
                                res.link,
                                subjectIndex,
                                resourceIndex
                              )
                            }
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
          <div className="hidden  rounded-md lg:flex items-center justify-center h-[600px] relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 opacity-30 blur-2xl"></div>

            <div className="transform -rotate-45">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 drop-shadow-lg">
                All the entrance resources will be here.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntranceComponent;
