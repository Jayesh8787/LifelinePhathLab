import React from "react";

export default function TestBook() {
  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Tests Bookings</h3>
      </div>
      <div class="dropdown mb-4 ms-4 mt-4">
        <button
          class="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              All
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Pending
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Completed
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Cancelled
            </a>
          </li>
        </ul>
      </div>
      <div className="card p-3 mt-2">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Patient Name</th>
                <th>Test</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>sanket</td>
                <td>allergies</td>
                <td>09-02-2024</td>
                <td>
                  <label className="badge badge-danger">Pending</label>
                </td>
              </tr>
              <tr>
                <td>Messsy</td>
                <td>Flash</td>
                <td className="text-danger">
                  21.06% <i className="ti-arrow-down" />
                </td>
                <td>
                  <label className="badge badge-warning">In progress</label>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Premier</td>
                <td className="text-danger">
                  {" "}
                  35.00% <i className="ti-arrow-down" />
                </td>
                <td>
                  <label className="badge badge-info">Fixed</label>
                </td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>After effects</td>
                <td className="text-success">
                  82.00% <i className="ti-arrow-up" />
                </td>
                <td>
                  <label className="badge badge-success">Completed</label>
                </td>
              </tr>
              <tr>
                <td>Dave</td>
                <td>53275535</td>
                <td className="text-success">
                  98.05% <i className="ti-arrow-up" />
                </td>
                <td>
                  <label className="badge badge-warning">In progress</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
