import React, { useEffect, useState } from "react";
import Services from "../../Services/Services";

export default function Admin() {
  const [admins, setAdmins] = useState([]);
  const [uId, setUId] = useState("");
  useEffect(() => {
    Services.getAllAdmins()
      .then((res) => {
        setAdmins(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const AdminHandler = () => {
    Services.UpdateUserRole(uId)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="fw-bold">Admins</h3>
      </div>

      <div class="d-flex" role="search">
        <input
          type="text"
          className="form-control"
          placeholder="Enter the user id To make Admin"
          onChange={(e) => setUId(e.target.value)}
        />
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={AdminHandler}
        >
          Make User As Admin
        </button>
      </div>

      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h4 class="font-weight-bold">All Admins</h4>
      </div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Admin Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {admins &&
                    admins.map((admin) => (
                      <tr>
                        <td>{admin.userId}</td>
                        <td>{admin.firstName}</td>
                        <td>{admin.lastName}</td>
                        <td>{admin.emailId}</td>
                        <td>{admin.contactNo}</td>
                        <td>{admin.address}</td>
                        <td>{admin.role}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
