import React from 'react'
import axios from 'axios';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText} from '@mui/material';


function Create({open,setOpen}) {
    const handlesubmit=(name, email, website, companyname)=>{
        axios.post(`https://jsonplaceholder.typicode.com/users/`,{name,email,website,companyname})
        .then(()=>console("updated"))
        .catch((err)=>console.log(err))
    }
    const handleClose = () => {
        setOpen(false);
    };
  return (
    <>
            
            <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event,ind) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const name=formJson.name;
                    const email = formJson.email;
                    const website=formJson.website;
                    const companyname=formJson.companyname;
                    console.log(name,email,website,companyname);
                    handlesubmit(name,email,website,companyname);
                    handleClose();
                },
            }}
        >
            <DialogTitle>Create</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Create new entry
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-uncontrolled"
                    name="name"
                    label="name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-uncontrolled"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-uncontrolled"
                    name="website"
                    label="website"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-uncontrolled"
                    name="companyname"
                    label="company name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" >submit</Button>{/*onClick={()=>handlesubmit(id)}*/}
            </DialogActions>
        </Dialog>

        </>
  )
}

export default Create