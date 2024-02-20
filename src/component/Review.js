import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

export default function Review() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    Services.getClientFeedbacks()
      .then((res) => {
        setFeedbacks(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="container bg-white rounded mt-3 pt-3">
      <h3 className="text-center feedback-heading">Patient's feedback</h3>
          <div class="feedback-container">
            {feedbacks &&
        feedbacks.map((fBack) => (
            <div class="feedback-card">
              <div className="feedback-pri-text">{fBack.clientName}</div>
              <div className="feedback-sec-text">{fBack.feedback}</div>
            </div>
            ))}
          </div>
    </div>
  );
}
