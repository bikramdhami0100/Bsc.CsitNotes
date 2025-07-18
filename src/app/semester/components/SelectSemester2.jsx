"use client"
import React,{useState} from 'react';
import { Book,Eye,Download } from 'lucide-react';

const subjects = [
  {
    name: 'Mathematics',
    resources: [
      {
        label: 'Linear Algebra Note 2081 Year.pdf',
        link: 'https://drive.google.com/file/d/18G2Rln704bRLOJmjUS6tgONFbx1mHhBM/view?usp=drivesdk',
      },
      {
        label: 'Linear Algebra Note.pdf',
        link: 'https://drive.google.com/file/d/1DotoVAtxiUNuuTn6dkQI-HIy5S4S7CQ5/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Microprocessor',
    resources: [
      {
        label: '(2081 yr) Microprocessor note.pdf',
        link: 'https://drive.google.com/file/d/1-k40VdtsoZMMaHZjVmHQVA984ZWnlvxU/view?usp=drivesdk',
      },
      {
        label: '(2079 yr) Microprocessor Full note (Bishal).pdf',
        link: 'https://drive.google.com/file/d/1YKR1ArHLidKuuOkrmFdJA9jDfAbbzmY4/view?usp=drivesdk',
      },
      {
        label: '(2080 yr) Microprocessor note.pdf',
        link: 'https://drive.google.com/file/d/1DbjgDq70N4lK4BlmM3Qay22XeHRawge7/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Digital Logic',
    resources: [
      {
        label: 'DLD PROJECT on digital logic families.pdf',
        link: 'https://drive.google.com/file/d/1HLA2suYjEAqQWnit1LrBF0aM--qMeQk7/view?usp=drivesdk',
      },
      {
        label: 'Two imp Qn solve.pdf',
        link: 'https://drive.google.com/file/d/1Q6D0_lyT0HfrgTMCjzs9DlO6tAj_JJt4/view?usp=drivesdk',
      },
      {
        label: 'DLD handwritten note (Bishal).pdf',
        link: 'https://drive.google.com/file/d/1yATKZ92TnfLeMxESC7z1j1-_SeIkhUuF/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Data Structures & Algorithms (DSA)',
    resources: [
      {
        label: 'DSA practical Template (--Bishal Bhat--).pdf',
        link: 'https://drive.google.com/file/d/1xE4mHiMrgN7h3VNd8CO1ktw0ilqOSfJn/view?usp=drivesdk',
      },
      {
        label: 'DSA full Handwritten note (Bishal).pdf',
        link: 'https://drive.google.com/file/d/1MujKnuj9Q4spyZv0jyt3fqII0VqI5mbB/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Physics (Mechanics & Electrodynamics)',
    resources: [
      {
        label: 'Mechanics and electrodynamics (SECOND) (Bishal).pdf',
        link: 'https://drive.google.com/file/d/1clFLPCaYb-VBs3B4pOIVmsy1LPNd69yW/view?usp=drivesdk',
      },
      {
        label: 'Mechanics and electrodynamics (FIRST) (Bishal).pdf',
        link: 'https://drive.google.com/file/d/1vtO7iw0sCz_sVMleKQGUyDOCJwJLR34q/view?usp=drivesdk',
      },
      {
        label: 'Practical + Project Folder',
        link: 'https://drive.google.com/drive/folders/1XxBA4P_vcq7YQUAADoe4LACuJF2ii2Zr',
      }
    ]
  },
  {
    name: 'Syllabus',
    resources: [
      {
        label: '2nd sem syllabus FWU BSC CSIT.pdf',
        link: 'https://drive.google.com/file/d/1b1l4DUMcpVYyuytNC1bAoiMESpYCnyVz/view?usp=drivesdk',
      }
    ]
  },
  {
    name: 'Question Papers',
    resources: [
      {
        label: '2nd sem 2081 year question paper.pdf',
        link: 'https://drive.google.com/file/d/10nYml406CiGWP7NmfD-V9pPX7F0_oT2G/view?usp=drivesdk',
      },
      {
        label: '2nd sem 2080 year question paper',
        link: 'https://drive.google.com/file/d/1svbAp73jjYH6wtTKxWtvNgWBVKzQUjrE/view?usp=drivesdk',
      },
      {
        label: '2nd sem 2079 year question paper',
        link: 'https://drive.google.com/file/d/1TmdHKPXa433TJp7q7pOq33Uzl-CV1SB6/view?usp=drivesdk',
      },
      {
        label: '2nd sem 2078 year question paper.pdf',
        link: 'https://drive.google.com/file/d/10QNkicsBAXF0ctjBPmXzvV8bmFPFEV_n/view?usp=drivesdk',
      },
      {
        label: 'Mid-term Question paper (2nd sem).pdf',
        link: 'https://drive.google.com/file/d/1bSDWdlwQZ_ztN600k5FWDJ-hzYWQmy_V/view?usp=drivesdk',
      },
      {
        label: '_Imp Qns For Exams',
        link: 'https://drive.google.com/file/d/1An0toBfsefbRcW_jZ8akpWOqZGt2PXPs/view?usp=drivesdk',
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

const SelectedSemester2 = ({ semesterName = 'Semester II' }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleView = (link) => {
    const embedUrl = link.replace('/view', '/preview');
    setPreviewUrl(embedUrl);
  };

  const handleDownload = (link, subjectIndex, resourceIndex) => {
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

export default SelectedSemester2;
