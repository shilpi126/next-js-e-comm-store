// import { AppBar, Box, Container, TableContainer, Typography } from '@mui/material'

// import React from 'react'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function Navbar() {
//   return (
//     <AppBar sx={{
//             backgroundColor:"white",
//             height:50
            
            
           

//     }}>
//         <Container sx={{display:"flex"}}>
//         <Box sx={{
//             color:"black",
//             display:"flex",
//             // alignItems:"flex-start",
//             gap:2,
//             mr:80,
            
            
//         }} >
//         <Typography>Account</Typography>
//         <Typography>Track Order</Typography>
//         <Typography>Support</Typography>
//         </Box>

//         <Box sx={{
//             display:"flex",
//             alignItems:"flex-end"
//         }}>
//         <FormControl  variant='standard' size="small"  sx={{ m: 1, minWidth: 120, border:"none" }}>
//             <InputLabel >Country</InputLabel>
//             <Select
//             label="Country"
//             >
//             <MenuItem value={1}>India</MenuItem>
//             <MenuItem value={2}>United State</MenuItem>
//             <MenuItem value={3}>Japan</MenuItem>
//             </Select>
//         </FormControl>
//         <FormControl  variant='standard' size="small"  sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel >Country</InputLabel>
//             <Select
            
//             >
//             <MenuItem value={1}>USD</MenuItem>
//             <MenuItem value={2}>BSD</MenuItem>
            
//             </Select>
//         </FormControl>
//         <FormControl 
//         variant='standard'
//         size="small"  
//         sx={{ 
//             m: 1,
//             minWidth: 120,
//             }}>
//             <InputLabel >Language</InputLabel>
//             <Select
            
//             >
//             <MenuItem value={1}>Hindi</MenuItem>
//             <MenuItem value={2}>English</MenuItem>
//             <MenuItem value={3}>Spanish</MenuItem>
//             </Select>
//         </FormControl>
//         </Box>
//         </Container>
//     </AppBar>
//     )
// }


import React from 'react'

export default function Navbar() {
  return (
    <div className='container'>
        <div className='container1'>
            <div className='text-container'><a href=''>Account</a></div>
            <div className='text-container'><a href=''>Track Order</a></div>
            <div className='text-container'><a href=''>Support</a></div>
        </div>
        <div className='container2'>
            
                <select className='select-items'>
                    <option  className='select-items-option' value="1">India</option>
                    <option   className='select-items-option' value="2">United State</option>
                    <option  className='select-items-option' value="3">Japan</option>
                </select>
                <select className='select-items'>
                    <option  className='select-items-option' value="1" >USD</option>
                    <option   className='select-items-option' value="2">BTD</option>
                    
                </select>
                <select className='select-items'>
                    <option  className='select-items-option' value="1">Hindi</option>
                    <option   className='select-items-option' value="2">English</option>
                    <option  className='select-items-option' value="3">Spanish</option>
                </select>
                
            
            
        </div>
    </div>
  )
}
