import React, { useState } from 'react';
import { Book, Eye, Download, Loader } from 'lucide-react';

// Google Drive direct download extractor
const getDownloadLink = (viewLink) => {
  try {
    const match = viewLink.match(/\/d\/(.*?)\//);
    if (!match || !match[1]) {
      console.warn('Invalid file link:', viewLink);
      return null;
    }
    const fileId = match[1];
    return `https://drive.usercontent.google.com/u/0/uc?id=${fileId}&export=download`;
  } catch (error) {
    console.error('Error parsing link:', error);
    return null;
  }
};

// Subjects for Semester III
const subjects = [
  {
    name: "COA",
    resources: [
      {
        label: "COA note.pdf",
        link: "https://drive.google.com/file/d/1GmPrgM9fVe71ti845FnjEhRMwQRZDV9I/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "C++",
    resources: [
      {
        label: "C++ Imp Qn solve [DB].pdf",
        link: "https://drive.google.com/file/d/1358npudiFXWTtXM4n3yUZrDvlUpvvL5i/view?usp=drivesdk",
      },
      {
        label: "OPPS note 2080 year.pdf",
        link: "https://drive.google.com/file/d/1XwSWGNEv4H3yAAvYLpt1QtNQPMyWylZJ/view?usp=drivesdk",
      },
      {
        label: "Try my c++ programs.rar",
        link: "https://drive.google.com/file/d/1QBG-W5H427ii0bP8UjaBWQH7E5SaEcZ4/view?usp=drivesdk",
      },
      {
        label: "OOPs with C++ programs --BB--.pdf",
        link: "https://drive.google.com/file/d/13E9Z8USFaYGDxkfixInT-91JPHK4Scck/view?usp=drivesdk",
      },
      {
        label: "OOPS with C++ note !!.pdf",
        link: "https://drive.google.com/file/d/1HLq0c40ZrxGrK-or5xPIjybXXz3kLRIL/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Discrete Structure",
    resources: [
      {
        label: "Discrete structure Note !!.pdf",
        link: "https://drive.google.com/file/d/1brIeSz-9pRtI6NL_KXSpyodi9VZ39Twv/view?usp=drivesdk",
      },
      {
        label: "DS past yr numerical question solve.pdf",
        link: "https://drive.google.com/file/d/13RxYDjISZa2loR3i76Q9kAey-HBl3OBD/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Management",
    resources: [
      {
        label: "management Note 3rd sem 2081.pdf",
        link: "https://drive.google.com/file/d/1ScBr1JmSlZF5bf0XoPcqkLLSWIzDc0FQ/view?usp=drivesdk",
      },
      {
        label: "complete Management Note.pdf",
        link: "https://drive.google.com/file/d/1Rdm_tF66gHpxlbzJ0PZB8ot6dIK8iuHr/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Operating System",
    resources: [
      {
        label: "Linux case study chapter from book.pdf",
        link: "https://drive.google.com/file/d/1ayEfrRZNBZu-mO-s1DOc1p7VfCg0GQcx/view?usp=drivesdk",
      },
      {
        label: "Bishal Linux Case Study.docx",
        link: "https://docs.google.com/document/d/16PrmHNer1CDtUKJnDJ4v9oz9KaQ0hE-M/edit?usp=drivesdk",
      },
      {
        label: "_OS Complete Note!!!.pdf",
        link: "https://drive.google.com/file/d/1FjZsLuKyky_ZkFyL_fEaLWicSe2Ep0fi/view?usp=drivesdk",
      },
      {
        label: "Bishal Linux Case Study.pdf",
        link: "https://drive.google.com/file/d/1AhStEqJlOZY2ZdjRAfCKCISHKqj_VCRj/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Statistics",
    resources: [
      {
        label: "You Tube - correlation Qn !! .pdf",
        link: "https://drive.google.com/file/d/1dx9CCaevFquQjLk2O3IaIVNun__5G02W/view?usp=drivesdk",
      },
      {
        label: "formulas - Statistics and probability.pdf",
        link: "https://drive.google.com/file/d/1PaEI3qkxnfVmFCSy3AMNJbrnkAJNKBm2/view?usp=drivesdk",
      },
      {
        label: "Statistics and probability note .pdf",
        link: "https://drive.google.com/file/d/1H1-CmLVKsgNCcMijCZQFyy6Kq4sK26Fr/view?usp=drivesdk",
      },
      {
        label: "Statistics Tables.pdf",
        link: "https://drive.google.com/file/d/15La4IAXv2uqoNDGAcWzFhaZ4rr7EY07q/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Syllabus",
    resources: [
      {
        label: "FWU BSc.CSIT 3rd sem Syllabus.pdf",
        link: "https://drive.google.com/file/d/1-PdRnT9xpFQJ2hNFLQhV8ThsNhuH59Eh/view?usp=drivesdk",
      },
    ],
  },
  {
    name: "Old Questions",
    resources: [
      {
        label: "Solution C++ 2079 QNs.pdf",
        link: "https://drive.google.com/file/d/1-bp1G1eiqGEng_TUQ8ye0txVXuenkKxD/view?usp=drivesdk",
      },
      {
        label: "3rd sem 2079 end sem QN papers",
        link: "https://drive.google.com/file/d/1-bSXOR1baFX_iordHJ4EHRFX8Asi62tP/view?usp=drivesdk",
      },
      {
        label: "2073-2079 yr QN PAPERS 3rd sem BSc.CSIT .pdf",
        link: "https://drive.google.com/file/d/1rOhZU944vku4dR4pAlSsRg4yYQgq8mkq/view?usp=drivesdk",
      },
      {
        label: "3rd sem 2081 end sem QN papers",
        link: "https://drive.google.com/file/d/1gqLh2ajjSKKUMyPlIvmaqDxTMkiKH7Rd/view?usp=drivesdk",
      },
      {
        label: "(hand written) Past year Repeatd Qns! .pdf",
        link: "https://drive.google.com/file/d/1HyAIj2ji8lwIsTWVox7XUT7ADDjl_iAI/view?usp=drivesdk",
      },
      {
        label: "3rd sem Pratical questions !!.pdf",
        link: "https://drive.google.com/file/d/1HewMDaYV95lIGfQrpcrrB5R5schnBq6u/view?usp=drivesdk",
      },
      {
        label: "3rd sem 2080 mid term  QN papers",
        link: "https://drive.google.com/file/d/1Un-8VzNSGoBFpaDwz0VLA9Bgygj7qe05/view?usp=drivesdk",
      },
      {
        label: "3rd sem 2080 end sem QN papers",
        link: "https://drive.google.com/file/d/1HeAxP1Cxhe0SRnB45Hm0unRR8-KeBX9e/view?usp=drivesdk",
      },
      {
        label: "statistics and probability old year Qns !! arranged.pdf",
        link: "https://drive.google.com/file/d/1y9ggmU0QsLUy27M_mejE9QhoVXeaWOuP/view?usp=drivesdk",
      },
    ],
  },
];

const SelectedSemester3 = ({ semesterName = 'Semester III' }) => {
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

export default SelectedSemester3;
