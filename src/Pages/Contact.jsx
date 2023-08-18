import React from 'react'
import Layout from '../Conponent/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

 const Contact = () => {
  return (
    <>
    <Layout>
    <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
      <Typography variant='h4'>
        Contact My Resurant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio blanditiis rem dolorum explicabo? Itaque at, doloribus dolorum voluptate architecto dicta blanditiis dignissimos pariatur rem. In sequi facere at totam iure.
      </p>
    </Box>
    <Box sx={{m:3,width:"600px",ml:10,"@media(max-width:600px)":{
      width:"300px"
      }}}>
      <TableContainer component={Paper}>
<Table aria-aria-label='contact table'>
<TableHead>
  <TableRow>
    <TableCell sx={{bgcolor:"black",color:"white"}} align='center'>Contact Details</TableCell>
  </TableRow>
</TableHead>
<TableBody>
<TableRow>
  <TableCell>
    <SupportAgentIcon sx={{color:"red",pt:1}}/>    1800-000-00 (Toll Free)
  </TableCell>
  </TableRow>
  <TableRow>
  <TableCell>
    <MarkunreadIcon sx={{color:"skyblue",pt:1}}/> OneClick@gmail.com 
  </TableCell>
  </TableRow>
  <TableRow>
  <TableCell>
    <AddIcCallIcon sx={{color:"green",pt:1}}/> 8890947411
  </TableCell>
  </TableRow>
</TableBody>

</Table>
      </TableContainer>
    </Box>
    </Layout>
    </>
  )
}
export default Contact;
