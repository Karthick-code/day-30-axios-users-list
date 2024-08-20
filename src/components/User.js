import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Create from './Create';


function User() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [open,setOpen]=useState(false);


    const handlecreate=()=>{
        console.log("creating user");
        setOpen(true);
        <Create open={open} setOpen={setOpen} />
    }

    const client=axios.create({
        baseURL:"https://jsonplaceholder.typicode.com/users"
    })

    useEffect(() => {
        client.get()
            .then((response) => {
                setUsers(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    },[])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    
    return (
        <>
            <div className="user-list text-center"> <h4>User-List</h4></div>
            <div className="create-user text-center"> <Button variant="contained" onClick={()=>handlecreate()}>Create <AddIcon /></Button> </div>
            <div className="cards row"> 
                {users.map((ele,id)=>{
                    return (
                        <Card key={id} open={open} setOpen={setOpen} data={ele} />
                    )
                })} </div>
                

            {/* <h1> Users</h1>
    <ul>
        {users.map((ele,ind)=>{
            return(
            <li key={ele.id}>
                <h1>{ele.name}</h1>
                <h2>{ele.email}</h2>
            </li>
            )
        })}
    </ul> */}

        </>
    )
}

export default User




//  dialog
