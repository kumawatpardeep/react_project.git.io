import React from 'react'
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const face="https://www.facebook.com";
const Twitter="https://twitter.com/";
const insta="https://www.instagram.com/accounts/login/";

 const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
        <Box sx={{mr:3,"& svg":{fontSize:'60px',cursor:"pointer",mr:2,},"& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }}}>
<a href={insta}><InstagramIcon/></a>
<a href={face}><FacebookIcon/></a>
<a href={Twitter}><TwitterIcon/></a>
<GitHubIcon/>
        </Box>
            <Typography variant='h5' sx={{'@media(max-width:600px)':{fontSize:"1rem"}}}>
                All Rights Reserved &copy; KumawatPradeep
            </Typography>
        </Box>
    </>
  )
}
export default Footer;