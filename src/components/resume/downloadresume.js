import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadResume = () => {
  const handleDownload = () => {
    // Replace 'path_to_your_resume.pdf' with the actual path to your resume PDF file
    const resumeUrl = "path_to_your_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="download-resume" style={{}}>
      {" "}
      <button onClick={handleDownload}>
        {" "}
        <FontAwesomeIcon icon={faDownload} />
        <span style={{ marginLeft: "7px", marginRight: "20px" }}>Download</span>
      </button>
    </div>
  );
};

export default DownloadResume;
