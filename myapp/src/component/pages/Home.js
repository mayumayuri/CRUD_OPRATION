import React ,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home=()=>{

    const[users,setUsers]=useState([])
    useEffect(()=>{
        loaduser()

    },[]);

    const loaduser=async()=>{
        const result=await axios.get("http://localhost:3001/users")
        setUsers(result.data);
    }

    const deleteUser=async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loaduser();
    }



    return(
        <div className='container'>
            <div className='py-4'>
            <h1>Home pages</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope='row'>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    {/* <Link className='btn btn-primary m-2' to={`/user/${user.id}`}>view</Link> */}
                    <Link className='btn btn-primary m-2'to={`/user/edit/${user.id}`} >Edit</Link>
                    <Link className='btn btn-danger m-2 ' onClick={()=>deleteUser(user.id)}  >Delete</Link>
                </td>
            </tr>

        ))
    }
   
    
   
  </tbody>
</table>


            </div>
       
        </div>
    )
}
export default Home