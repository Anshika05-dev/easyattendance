import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const student = () => {
  const [students, setstudents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/students")
      .then((result) => {
        // console.log(result.data.result)
        if (result.data.Status) {
          setstudents(result.data.result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/auth/del_student/${id}`)
    .then(result => {
      if(result.data.Status) {
        window.location.reload()
      } else {
          alert(result.data.Error)
      }
  })
  }
  return (
    <div>
      <div className="px-5 mt-3">
        <div className="d-flex justify-content-center">
          <h3>Student List</h3>
        </div>
        <Link to="/dashboard/add_student" className="btn btn-success">
          Add New Student
        </Link>
      </div>
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th> Class</th>
              <th>Roll No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student) => (
            // console.log(student.id)
              <tr key={student.id}>
                <td>{student.studentname}</td>
                <td>{student.class_id}</td>
                <td>{student.rollno}</td>
                <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={()=>handleDelete(student.id)} >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default student;