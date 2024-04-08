import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    link.download = "alec_martens_resume_" + formattedDate + ".pdf";
    link.click();
  };

  return (
    <div className="download-resume">
      <button onClick={handleDownload}>
        <FontAwesomeIcon icon={faDownload} />
        <span style={{ marginLeft: "7px", marginRight: "20px" }}>Download</span>
      </button>
    </div>
  );
};

export default DownloadResume;
