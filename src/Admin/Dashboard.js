import React from "react";

export default function Dashboard() {
  return (
    <>
      <div class="col-12 col-xl-8 mb-4 mb-xl-0">
        <h3 class="font-weight-bold">Welcome Aamir</h3>
      </div>
      <div class="col-md-12 mt-5 grid-margin transparent">
        <div class="row">
          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card bg-primary-subtle ">
              <div class="card-body">
                <p class="mb-4">Today’s Bookings</p>
                <p class="fs-30 mb-2">4006</p>
                <p>10.00% (30 days)</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card bg-danger-subtle">
              <div class="card-body">
                <p class="mb-4">Total Bookings</p>
                <p class="fs-30 mb-2">61344</p>
                <p>22.00% (30 days)</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card bg-warning-subtle">
              <div class="card-body">
                <p class="mb-4">Number of Meetings</p>
                <p class="fs-30 mb-2">34040</p>
                <p>2.00% (30 days)</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4 stretch-card transparent">
            <div class="card bg-info-subtle">
              <div class="card-body">
                <p class="mb-4">Number of Clients</p>
                <p class="fs-30 mb-2">47033</p>
                <p>0.22% (30 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-3 mt-2">
        <h4 className="card-title">Today’s Appointment</h4>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>AppointmentID</th>
              <th>Usaer Name</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>Sanket</td>
              <td>09-02-2024</td>
              <td>Dr. Surana</td>
              <td>
                <label className="badge badge-danger">Pending</label>
              </td>
            </tr>
            <tr>
              <td>Messsy</td>
              <td>Flash</td>
              <td className="text-danger">
                {" "}
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
                {" "}
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
                {" "}
                98.05% <i className="ti-arrow-up" />
              </td>
              <td>
                <label className="badge badge-warning">In progress</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card p-3 mt-2">
        <h4 className="card-title">Pending Bookings</h4>
        <table className="table table-hover p-3 mt-2">
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
    </>
  );
}
