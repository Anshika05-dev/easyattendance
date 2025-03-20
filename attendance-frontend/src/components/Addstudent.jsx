import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Addstudent = () => {
    const [Classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/classes")
      .then((result) => {
        // console.log(result.data.result)
        if (result.data.Status) {
          setClasses(result.data.result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

    const [values, setValues] = useState({
        studentname: '',
        rollno: '',
        clss:null
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_student', values)
        .then(result => {
            console.log(result.data)
            if(result.data.Status) {
                navigate('/dashboard/student')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Student Nmae:</strong></label>
                    <input type="text" name='name' placeholder='Enter name'
                     onChange={(e) => setValues({...values, studentname : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="rollno"><strong>Roll No.:</strong></label>
                    <input type="text" name='rollno' placeholder='Enter Roll No.'
                     onChange={(e) => setValues({...values, rollno : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className="col-12">
            <label for="classes" className="form-label">
              Class
            </label>
            <select name="classes" id="classes" className="form-select"
                                 onChange={(e) => setValues({...values, clss : e.target.value})} >
                                    <option value="">Select Class</option> {/* Default option */}
                        {Classes.map(c=>{
                            return <option value={`${c.class} ${c.semester}`}>
          {c.class} - {c.semester}</option>
                        })}
                        </select>
          </div>

                <button className='btn btn-success w-100 rounded-0 mb-2'>Confirm</button>
            </form>
        </div>
    </div>
  )
}

export default Addstudent