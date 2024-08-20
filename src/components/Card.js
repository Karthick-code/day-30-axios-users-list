import React from 'react'
import axios from 'axios';
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import  Edit  from './Edit';

function Card({ data,open,setOpen }) {
  // const [open,setOpen]=useState(false);
  var id = data.id;
  const handledelete = (id) => {
    console.log("delete", data.name, data.email, data.website, data.company.name);
    axios.delete(`https://jsonplaceholder.typicode.com/users/?${id}`)
  }
  const handleedit = () => {
    setOpen(true)
    console.log("edit",data.id, data.name, data.email, data.website, data.company.name);
    return <Edit id={data.id} name={data.name} email={data.email} website={data.website} companyname={data.company.name} />
  }

  // console.log(data)
  return (
    <>
      <div className="card col-3-lg col-3-sm">
        <div className="name"><h5>Name: {data.name};</h5> </div>
        <div className="email"><h5>Email: {data.email};</h5></div>
        <div className="website"><h5>Website: {data.website};</h5></div>
        <div className="company"><h5>Company Name: {data.company.name};</h5></div>
        <div className='but'>
          <Button className='delete' variant="contained" onClick={() => { return handledelete(id) }}>Delete <DeleteIcon /></Button>
          <Button className='edit' variant="contained" onClick={()=>{handleedit()}}>Edit <EditIcon /> </Button>
        </div>
      </div>
      <Edit open={open} setOpen={setOpen} />
    </>
  )
}

export default Card