import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

export default function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    Services.getAllEnquiries()
      .then((res) => {
        setEnquiries(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Users Enquiry</h3>
      </div>
      <div className="card mt-2 p-3">
        <table
          className="table-hover"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ padding: 8, textAlign: "left" }}>Enquiry ID</th>
              <th style={{ padding: 8, textAlign: "left" }}>User Name</th>
              <th style={{ padding: 8, textAlign: "left" }}>Phone No</th>

              <th
                style={{
                  padding: 8,
                  textAlign: "left",
                  width: "50%",
                  wordWrap: "break-word",
                }}
              >
                Message
              </th>
            </tr>
          </thead>

          <tbody>
            {enquiries &&
              enquiries.map((enquiry) => (
                <tr>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {enquiry.id}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {enquiry.name}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {enquiry.contactNO}
                  </td>
                  <td
                    style={{
                      borderTop: "1px solid lightgray",
                      padding: 8,
                    }}
                  >
                    {enquiry.message}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
