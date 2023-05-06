import React, { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Header from './components/Header'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
// import Fields from './components/Fields';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
 const[name,setName]=useState("");
 const[email,setEmail]=useState("");
 const[data,setData]=useState([]);
  
 const addItem=()=>{
    setData([...data,{
      name:name,
      email:email
    }])
    setName("");
    setEmail("");
 }

 const removeItem=(ind)=>{
  const newlist=data.filter((ele,index)=>{
    return index!==ind;
  })
  setData(newlist);
 }
  return (
    <div className='App'>
       <Header/>
       <div className='form'>
       <Stack direction="row" spacing={2}>
       <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
       <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <Button onClick={addItem} variant="contained" color="success"><AddIcon/></Button>
       </Stack>
       </div>
       <div className='data'>
          <div className='data_val'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>
          {
            data.map((ele,ind)=>
            <div className='data' key={ind}>
            <div className='data_val'>
                 <h4>{ele.name}</h4>
                 <h4>{ele.email}</h4>
                 <Button variant="contained" color="error" onClick={()=>removeItem(ind)}><RemoveIcon/></Button>
     
               </div>
         </div>
            )
          }
          {
            data.length>1 && <Button variant="contained" color="error" onClick={()=>setData([])}><DeleteForeverIcon/></Button>

          }

       </div>
    </div>
  )
}

export default App
