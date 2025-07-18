"use client"
import React,{useState} from 'react';
import { Book,Eye,Download, Loader } from 'lucide-react';

const subjects = [
  {
    name: 'Applied Statistics',
    resources: [
    //   {
    //     label: 'Yt Video Reference - unit 6 explained!!',
    //     link: 'https://drive.google.com/file/d/10Ks2R6CizbMhkiYeo0iSf5T17CUAHv4S/view?usp=drivesdk'
    //   },
      {
        label: 'Applied Statistics Note !!!!.pdf',
        link: 'https://drive.google.com/file/d/1TyYxFkxrWVfnz9wLdWIbNFs1fKKAP13V/view?usp=drivesdk'
      },
      {
        label: 'AS TABLE.pdf',
        link: 'https://drive.google.com/file/d/1MfHRTtDFWC0yAXCCYKcVnPT5vx_zwug7/view?usp=drivesdk'
      },
      {
        label: 'AS_paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1euOmjL_4zA1kz0eSOUjvKr0GKvGZL6N7/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'DBMS',
    resources: [
    //   {
    //     label: 'Yt playlist Reference - SQL !!',
    //     link: 'https://drive.google.com/file/d/10D5sL_GOm5i81qRNrFjas9WId5INQbZ3/view?usp=drivesdk'
    //   },
      {
        label: 'DBMS note.pdf',
        link: 'https://drive.google.com/file/d/1IFrBjq1HrUofGvWBMMMhCc7rhSEjgQsc/view?usp=drivesdk'
      },
      {
        label: 'DBMS LAB Report SQL !!.pdf',
        link: 'https://drive.google.com/file/d/1QcQUx9ts6OK6_11TmQPjEzI8rYETCfHr/view?usp=drivesdk'
      },
      {
        label: 'DBMS asignments',
        link: 'https://drive.google.com/drive/folders/1D4pZThfsPEyMsTmVZIzjywuSpFSCKvlk'
      },
      {
        label: 'DBMS_paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1exBg7hLYCRDD3QkbHQPJMV-D7yDj7Gzh/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'Data Communication and Networking',
    resources: [
    //   {
    //     label: 'Yt Video Reference - Subnetting Numericals !!',
    //     link: 'https://drive.google.com/file/d/113j-w1uo6uqhgjshvkb--bGYwY87Fvad/view?usp=drivesdk'
    //   },
      {
        label: 'DCN Note.pdf',
        link: 'https://drive.google.com/file/d/1_-x1Za5qIrB47AzBi0zicRSqT12lx5j9/view?usp=drivesdk'
      },
      {
        label: 'DCN_Paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1fCNAvVlhz5nwkolDHzTlyXp6iXtYyhDL/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'Numerical Methods',
    resources: [
    //   {
    //     label: 'Yt playlist Reference !!',
    //     link: 'https://drive.google.com/file/d/109jtheUvbECNvdTZjPyn8FOT4LQhM128/view?usp=drivesdk'
    //   },
      {
        label: 'NM Project work.pdf',
        link: 'https://drive.google.com/file/d/1cTibd6DQZgf7P-HYthjKeIeNhLbPqdqF/view?usp=drivesdk'
      },
      {
        label: 'C++ programs for solving non linear equations !!.rar',
        link: 'https://drive.google.com/file/d/1QYXjtgQSn_TPbjqBNh-KyCa3_Dmy6wUE/view?usp=drivesdk'
      },
      {
        label: 'NM note.pdf',
        link: 'https://drive.google.com/file/d/1IVPJfUr9ZsjyHwFzdAsKC0t4_NGymuAj/view?usp=drivesdk'
      },
      {
        label: 'NM_paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1f2ssRJ_WwQGtOvg2N1IJKDZkjw23NCVL/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'System Analysis and Design',
    resources: [
      {
        label: 'SAD Note.pdf',
        link: 'https://drive.google.com/file/d/17hE5uBV3dfjcGS79AKlej0YJvgmliwLh/view?usp=drivesdk'
      },
      {
        label: 'SAD_paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1f-OOPsxglQhkN-J4X6PHUamWBUQKpIBV/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'Theory of Computation',
    resources: [
    //   {
    //     label: 'Yt playlist Reference - CNF & GNF !!',
    //     link: 'https://drive.google.com/file/d/10KtQWiwXsWjPZlt8-h6rElpL1V712t_r/view?usp=drivesdk'
    //   },
      {
        label: 'TOC note !!.pdf',
        link: 'https://drive.google.com/file/d/1XPDV4hQFIXjxaxVLkP-M-zSwL5d5QxhQ/view?usp=drivesdk'
      },
      {
        label: 'TOC_paper_KamalZoci.pdf',
        link: 'https://drive.google.com/file/d/1fFaZuDsu0AkmXyjkdg9YnNdPjO9MEH0L/view?usp=drivesdk'
      }
    ]
  },
  {
    name: 'Syllabus & Old Question',
    resources: [
      {
        label: 'FWU BSc.CSIT 4th sem Syllabus.pdf',
        link: 'https://drive.google.com/file/d/1rPWsqDgOZqzk3-JrRTJtUsyR_z5jAoc2/view?usp=drivesdk'
      },
      {
        label: 'OLD QN PAPERS 4th sem BSc.CSIT .pdf',
        link: 'https://drive.google.com/file/d/1S3mJz3Wcb403qFwfa5NdKdE1Ufql0leb/view?usp=drivesdk'
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
const SelectedSemester5 = ({ semesterName = 'Semester V' }) => {
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

export default SelectedSemester5;
