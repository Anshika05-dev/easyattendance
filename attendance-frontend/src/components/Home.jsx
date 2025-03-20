// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Home = () => {

//     const [studentTotal, setStudentTotal] = useState(0)
//     useEffect(() => {
//         studentCount();
//       }, [])
//     const studentCount = () => {
//         axios.get('http://localhost:3000/auth/student_count')
//         .then(result => {
//             console.log(result.data.result[0].student)
//           if(result.data.Status) {
//             setStudentTotal(result.data.result[0].student)
//           }
//         })
//       }

//   return (
//     <div>
//     <div className='p-3 d-flex justify-content-around mt-3'>
//       <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
//         <div className='text-center pb-1'>
//           <h4>No. of Students</h4>
//         </div>
//         <hr />
//         <div className='d-flex justify-content-between'>
//           <h5>Total:</h5>
//           <h5>{studentTotal}</h5>
//         </div>
//       </div>
//       </div>
//       <Link to="/dashboard/create_session" className="btn btn-primary">
//           Create Session
//         </Link> 
//       </div>
//   )
// }

// export default Home

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {

    const [studentTotal, setStudentTotal] = useState(0)
    useEffect(() => {
        studentCount();
      }, [])
    const studentCount = () => {
        axios.get('http://localhost:3000/auth/student_count')
        .then(result => {
            console.log(result.data.result[0].student)
          if(result.data.Status) {
            setStudentTotal(result.data.result[0].student)
          }
        })
      }

  return (
    <div>
    <div id="home-container" className='p-3 d-flex justify-content-around mt-3'>
    <Link id="create-session-btn" to="/dashboard/create_session" className="btn btn-primary">
          Mark Attendance
        </Link> 
      <div id="stats-card" className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>No. of Students</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>{studentTotal}</h5>
        </div>
      </div>
      </div>
     
      </div>
  )
}

export default Home