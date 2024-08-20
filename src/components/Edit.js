import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Edit({id, name, email, website, companyname,open,setOpen }) {
    // var ind=id;
    const handlesubmit=(id,name, email, website, companyname)=>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{name,email,website,companyname})
        .then(()=>console("updated"))
        .catch((err)=>console.log(err))
    }
    // console.log(id)
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
                    console.log(ind,name,email,website,companyname);
                    handlesubmit(ind,name,email,website,companyname);
                    handleClose();
                },
            }}
        >
            <DialogTitle>Update</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    update the values
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="outlined-uncontrolled"
                    name="name"
                    value={name}
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
                    value={email}
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
                    value={website}
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
                    value={companyname}
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

export default Edit


