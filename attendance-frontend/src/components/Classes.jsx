
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Classes = () => {

  const [Classes, setClasses] = useState([])
      useEffect(()=> {
        axios.get('http://localhost:3000/auth/classes')
        .then(result => {
            // console.log(result.data.result)
            if(result.data.Status) {
                setClasses(result.data.result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    },[])
  return (
    <div> 
      <div className='px-5 mt-3'>
           <div className='d-flex justify-content-center'>
                 <h3>Class List</h3>
             </div>
           <Link to="/dashboard/add_class" className='btn btn-success'>Add New Class</Link>
           </div>
           <div className='mt-5'>
           <table className='table'>
                <thead>
                <tr>  
              <th>Class</th>
              <th>Semester</th>
            </tr>
                </thead>
                <tbody>
  {
    Classes.map((clss) => (
      <tr key={clss.id}>
        <td>{clss.class}</td>
        <td>{clss.semester}</td>
      </tr>
    ))
  }
</tbody>

              </table>
            </div>

           </div>
  )
}

export default Classes