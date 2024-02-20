import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    Services.getAllFeedbacks()
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const showHandler = (feedbackId) => {
    Services.showFeedbackToClient(feedbackId)
      .then((res) => {
        // window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Feedback</h3>
      </div>

      <div className="card mt-2 p-3">
        <table
          className="table-hover"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ padding: 8, textAlign: "left" }}>Feedback ID</th>
              <th style={{ padding: 8, textAlign: "left" }}>Cient Name</th>
              <th style={{ padding: 8, textAlign: "left" }}>Phone No</th>
              <th
                style={{
                  padding: 8,
                  textAlign: "left",
                  width: "50%",
                  wordWrap: "break-word",
                }}
              >
                Feedback
              </th>
              <th style={{ padding: 8, textAlign: "left" }}>
                Disply To Client
              </th>
              <th style={{ padding: 8, textAlign: "left" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks &&
              feedbacks.map((feedback) => (
                <tr>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {feedback.feedbackId}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {feedback.clientName}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {feedback.contactNo}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {feedback.feedback}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {feedback.displayToClient}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    <button
                      className="btn btn-warning"
                      onClick={() => showHandler(feedback.feedbackId)}
                    >
                      Show
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
