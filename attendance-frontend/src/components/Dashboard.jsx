// import React from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import axios from "axios";

// const Dashboard = () => {
//   const anvigate = useNavigate()
//   axios.defaults.withCredentials = true
//   const handleLogout = () => {
//     axios.get('http://localhost:3000/auth/logout')
//     .then(result => {
//       if(result.data.Status) { 
//         localStorage.removeItem("valid")
//         anvigate('/')
//       }
//     })
//   }
//   return (
//     <div className="container-fluid">
//       <div className="row flex-nowrap">
//         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//             <Link
//               to="/dashboard"
//               className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
//             >
//               <span className="fs-5 fw-bolder d-none d-sm-inline">
//                 Code With Yousof
//               </span>
//             </Link>
//             <ul
//               className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//               id="menu"
//             >
//               <li className="w-100">
//                 <Link
//                   to="/dashboard"
//                   className="nav-link text-white px-0 align-middle"
//                 >
//                   <i className="fs-4 bi-speedometer2 ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Dashboard</span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 <Link
//                   to="/dashboard/student"
//                   className="nav-link px-0 align-middle text-white"
//                 >
//                   <i className="fs-4 bi-people ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">
//                     Manage Students
//                   </span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 <Link
//                   to="/dashboard/classes"
//                   className="nav-link px-0 align-middle text-white"
//                 >
//                   <i className="fs-4 bi-columns ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Classes</span>
//                 </Link>
//               </li>
//               <li className="w-100">
//                 {/* <Link
//                   to="/dashboard/profile"
//                   className="nav-link px-0 align-middle text-white"
//                 >
//                   <i className="fs-4 bi-person ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Profile</span>
//                 </Link> */}
//               </li>
//               <li className="w-100" onClick={handleLogout}>
//               <Link
//                   className="nav-link px-0 align-middle text-white"
//                 >
//                   <i className="fs-4 bi-power ms-2"></i>
//                   <span className="ms-2 d-none d-sm-inline">Logout</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col p-0 m-0">
//             <div className="p-2 d-flex justify-content-center shadow">
//                 <h4>Emoployee Management System</h4>
//             </div>
//             <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Toggle Button */}
        <div className="toggle-button">
          <button className="btn btn-dark" onClick={() => setCollapsed(!collapsed)}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
          <div className="sidebar-content">
            <Link to="/dashboard" className="sidebar-header">
              <span>Teacher's Portal</span>
            </Link>
            <ul className="nav-menu">
              <li>
                <Link to="/dashboard" className="nav-link">
                  <i className="bi bi-speedometer2"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/student" className="nav-link">
                  <i className="bi bi-people"></i>
                  <span>Manage Students</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/classes" className="nav-link">
                  <i className="bi bi-columns"></i>
                  <span>Classes</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link className="nav-link">
                  <i className="bi bi-power"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="header">
            <h4>Online Attendance Management</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;