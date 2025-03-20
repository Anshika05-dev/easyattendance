import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addclass = () => {
    const [values, setValues] = useState({
        clss: '',
        semester: ''
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_class', values)
        .then(result => {
            console.log(result.data)
            if(result.data.Status) {
                navigate('/dashboard/classes')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>Add New Class</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="class"><strong>Class:</strong></label>
                    <input type="text" name='class' placeholder='Enter Class'
                     onChange={(e) => setValues({...values, clss : e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Semester"><strong>Semester:</strong></label>
                    <input type="text" name='semester' placeholder='Enter Semester'
                     onChange={(e) => setValues({...values, semester : e.target.value})} className='form-control rounded-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Confirm</button>
            </form>
        </div>
    </div>
  )
}

export default Addclass