import React, { useState } from "react";

function DownloadReport() {
  const [modalSrc, setModalSrc] = useState("");

  const handleDownloadReport = (pdfUrl) => {
    setModalSrc(pdfUrl);
    document.getElementById("reportModal").classList.add("show");
  };

  const closeModal = () => {
    setModalSrc("");
    document.getElementById("reportModal").classList.remove("show");
  };

  return (
    <div className="container">
      <h1 className="mt-5">Your Pathology Reports</h1>
      {/* Sample report container */}
      <div className="report-container rounded">
        <h3>Report: Blood Test</h3>
        <p>
          This report contains the results of your recent blood test. It
          includes information about your blood cell counts, cholesterol levels,
          and other vital markers. Please review the report carefully.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => handleDownloadReport("blood_test_report.pdf")}
        >
          View Report
        </button>
        <a
          href="blood_test_report.pdf"
          className="btn btn-secondary ml-2"
          download
        >
          Download Report
        </a>
      </div>

      {/* Add more report containers as needed */}

      {/* Modal for report preview */}
      <div
        className="modal fade"
        id="reportModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="reportModalLabel"
        aria-hidden="true"
        onClick={closeModal}
      >
        <div
          className="modal-dialog modal-lg"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reportModalLabel">
                Report Preview
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={modalSrc}
                title="Report Preview"
                style={{ width: "100%", height: "600px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadReport;
