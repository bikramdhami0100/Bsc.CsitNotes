import React, { useState } from 'react';
import { Book, Download, Eye, Loader } from 'lucide-react';
import Link from 'next/link';

const subjects = [
  {
    name: 'C Programming',
    resources: [
      {
        label: 'C programs (--BB--).pdf',
        link: 'https://drive.google.com/file/d/1ZFBADv2hLKaVjuQd3TAWvm4NvFTSU-qO/view?usp=drivesdk',
      },
      {
        label: 'C programing Note (BB).pdf',
        link: 'https://drive.google.com/file/d/1icePqRH5GNJxLTfO09mCKUFWO7CzJjXd/view?usp=drivesdk',
      },
      {
        label: 'C programming Yt channel reference',
        link: 'https://drive.google.com/file/d/1truzHay5-P_cJ7KTemjaFYgoNP1MsL9J/view?usp=drivesdk',
      },
      {
        label: 'Try my typed c programs.rar',
        link: 'https://drive.google.com/file/d/1hgE8XaLwybc61nsjoInRSHjsbaRoouY1/view?usp=drivesdk',
      },
    ]
  },
  {
    name: 'English',
    resources: [
      {
        label: 'English note (BB).pdf',
        link: 'https://drive.google.com/file/d/1puakPbb75eHep04eBz9V3HpuCEHGDZVH/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Information Technology',
    resources: [
      {
        label: 'IT note --BB-- .pdf',
        link: 'https://drive.google.com/file/d/1xCN84MVbp2ozGidi3sELwXUfsqujn-zT/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Mathematics',
    resources: [
      {
        label: 'Calculus 2081 note.pdf',
        link: 'https://drive.google.com/file/d/1dz8N3zNwNQuC3gcGplmE4wJ5Vc4Jm-Xe/view?usp=drivesdk',
      },
      {
        label: 'Calculus note (2078 y.r).pdf',
        link: 'https://drive.google.com/file/d/1xgBOft28g_xZg_1B4eHTfcp-AZc6AjL2/view?usp=drivesdk',
      },
      {
        label: 'Extra math stuffs',
        link: 'https://drive.google.com/drive/folders/1_8cp2nCRFMmF_AedBdsWdhMTdhvEE1Am',
      }
    ]
  },
  {
    name: 'Physics',
    resources: [
      {
        label: 'Electronic principles note --BB--.pdf',
        link: 'https://drive.google.com/file/d/1wSq5rJS69uZm7pYrrN7xhGG_wqKh4X5h/view?usp=drivesdk',
      },
      {
        label: 'physics Pratical.pdf',
        link: 'https://drive.google.com/file/d/1ZdtJ31d_Y7Y1QiHHylqnJqIIbSkYadV6/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Syllabus',
    resources: [
      {
        label: '1st sem Syllabus FWU BSC CSIT.pdf',
        link: 'https://drive.google.com/file/d/1YbY8i6ecslhuqedwdtmW-LUA_O3LNNy_/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Question Papers',
    resources: [
      {
        label: 'first sem(2081) exam question papers.pdf',
        link: 'https://drive.google.com/file/d/1qJMuykeRiylpvpEYl4nsWnh5P0FalYjc/view?usp=drivesdk',
      },
      {
        label: 'first sem(2080) exam question papers.pdf',
        link: 'https://drive.google.com/file/d/19XSruman_D5A9PPWbMht1KbP5dodpXJR/view?usp=drivesdk',
      },
      {
        label: 'first sem(2078) exam question papers.pdf',
        link: 'https://drive.google.com/file/d/1uhrw_-gQFtWbidor1kz_C68Rk8ISgcta/view?usp=drivesdk',
      },
      {
        label: 'first sem(2079) exam question papers.pdf',
        link: 'https://drive.google.com/file/d/1GfHIhJkVVvC1hEgfwIGxaEyuTiQlg1yg/view?usp=drivesdk',
      }
    ]
  }
];

const getDownloadLink = (viewLink) => {
  try {
    const fileId = viewLink.match(/\/d\/(.*?)\//)?.[1];
    if (!fileId) throw new Error('Invalid Google Drive link');
    return `https://drive.usercontent.google.com/u/0/uc?id=${fileId}&export=download`;
  } catch (error) {
    console.error("Error generating download link:", error);
    return null;
  }
};

const SelectedSemester1 = ({ semesterName = 'Semester I' }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleView = (link) => {
    const embedUrl = link.replace('/view', '/preview');
    setPreviewUrl(embedUrl);
  };

  const handleDownload = async (link, subjectIndex, resourceIndex) => {
    const uniqueIndex = `${subjectIndex}-${resourceIndex}`;
    setLoadingIndex(uniqueIndex);
    const downloadUrl = getDownloadLink(link);
    if (downloadUrl) {
      window.location.href = downloadUrl;
    }
    setTimeout(() => {
      setLoadingIndex(null);
    }, 1000);
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
          {subjects.map((subject, subjectIndex) => (
            <div
              key={subject.name}
              className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{subject.name}</h3>
              <div className="space-y-3">
                {subject.resources.map((res, resourceIndex) => {
                  const isLoading = loadingIndex === `${subjectIndex}-${resourceIndex}`;
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

export default SelectedSemester1;

