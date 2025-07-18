"use client"
import React,{useState} from 'react';
import { Book,Eye,Download, Loader } from 'lucide-react';

const subjects = [
  {
    name: "Cryptography",
    resources: [
      {
        label: "Introduction to Cryptography Note.pdf",
        link: "https://drive.google.com/file/d/1NxU4FMiD5zuQra_wp5roHxlBapWkP5OO/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Java Programming I",
    resources: [
      {
        label: "Java 2081 12 marks qn.pdf",
        link: "https://drive.google.com/file/d/1_QA-XYdSzew1P0w4G6NfK6cgthUvTfql/view?usp=drivesdk"
      },
      {
        label: "Java Programming I Complete Note.pdf",
        link: "https://drive.google.com/file/d/1nuJCRm8HPvb15jloU2G_0lePw05DjT_t/view?usp=drivesdk"
      },
      {
        label: "Java marks distributions sheet.pdf",
        link: "https://drive.google.com/file/d/1rDVH8wYTRt0IpwC5KFtMatnDzAWhvuKL/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Research Methodology",
    resources: [
      {
        label: "Exam Question Solns.pdf",
        link: "https://drive.google.com/file/d/1XIYg6qs__86t_kbejkEgKYB88Q62D5Vp/view?usp=drivesdk"
      },
      {
        label: "Numericals Unit 4 [Very Important].pdf",
        link: "https://drive.google.com/file/d/1-5d3de8o8jEHEQIjMKbL8tao7G5PD3ba/view?usp=drivesdk"
      },
      {
        label: "Research & Methodology Complete Note.pdf",
        link: "https://drive.google.com/file/d/188u4TstSvId0GiEkqZnbcixl2MLJOBER/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Software Engineering",
    resources: [
      {
        label: "Software Engineering unit - 5, 6, 7, 8, 9 Note.pdf",
        link: "https://drive.google.com/file/d/1WYVcxDISLEvFThspkWiOBXir79t2IWiy/view?usp=drivesdk"
      },
      {
        label: "Software Engineering Complete Note.pdf",
        link: "https://drive.google.com/file/d/1RDiApfUWl9PCrRzScR5z2F04eC8Ld9s6/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Web Technology II",
    resources: [
      {
        label: "Web Technology II complete Note.pdf",
        link: "https://drive.google.com/file/d/1o3MxgktMNjzG46jaQ_Em61SiuFgbOEi4/view?usp=drivesdk"
      },
      {
        label: "PHP Basic Programs(BB).pdf",
        link: "https://drive.google.com/file/d/1j-8wjm0oYG2NY-eHfqqraPggmPXC2-FV/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Syllabus",
    resources: [
      {
        label: "6th sem syllabus FWU BSC CSIT.pdf",
        link: "https://drive.google.com/file/d/1dDB_DTQnl8dn2AMQU8BW9tkFbBSxptIj/view?usp=drivesdk"
      }
    ]
  },
  {
    name: "Old Question Papers",
    resources: [
      {
        label: "6th Sem Previous Year QNs - All Subjects.pdf",
        link: "https://drive.google.com/file/d/12OSOBmZ00k5pgp0aaXOwZ8hC4zsJr51p/view?usp=drivesdk"
      },
      {
        label: "6th sem Qn paper 2081yr.pdf",
        link: "https://drive.google.com/file/d/1rZfnkFiOXibdZMUJkROeK4s6I1SjrQOn/view?usp=drivesdk"
      },
      {
        label: "6th sem Qn paper 20(73-79)yr.pdf",
        link: "https://drive.google.com/file/d/1BBQmJhtEQBxkec3g4ciJ5TF16OUIiaED/view?usp=drivesdk"
      },
      {
        label: "6th sem Qn paper 2080yr.pdf",
        link: "https://drive.google.com/file/d/1BHAVWeZtVzdf54q59cd1gBOl33hbwHtE/view?usp=drivesdk"
      }
    ]
  },{
    name:"Minor Project",
    resources:[{
      label:"Minor Project - 2021-2022.pdf",
      link:"https://drive.google.com/file/d/1dDB_DTQnl8dn2AMQU8BW9tkFbBSxptIj/view?usp=drivesdk"
    }]  

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
const SelectedSemester6 = ({ semesterName = 'Semester V' }) => {
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

export default SelectedSemester6;
