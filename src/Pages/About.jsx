import React from 'react'
import Layout from '../Conponent/Layout';
import { Box, Typography } from '@mui/material';

 const About = () => {
  return (
    <Layout>
    <Box sx={{
      my:15,
      textAlign:"center",
      "& h4":{
        fontWeight:"hold",
        my:2,
        fontSize:"2.3rem",

      },
      "& p":{
        textAlign:"justify"
      },
      "@media(max-width:600px)":{
         mt:0
      }
    
    }}>
      <Typography variant='h4'>
        Welcome to My Resturant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae nihil aspernatur excepturi, nesciunt iusto ratione id aliquid voluptas, commodi praesentium ipsam maxime error cum nam corrupti laboriosam, pariatur fuga? Enim harum, asperiores provident voluptate amet hic autem quae impedit, excepturi possimus fugit minus officia ea voluptatum, necessitatibus nihil neque! Commodi saepe laborum veniam eveniet, cum maxime exercitationem alias? Molestias, incidunt ipsum ut amet omnis repudiandae, illo quasi debitis commodi iste distinctio qui? Eveniet, culpa, consequatur iusto exercitationem deserunt maiores voluptatem praesentium sed facilis, minima natus non consequuntur? Eius officiis veritatis possimus veniam accusantium repellat vero delectus accusamus, voluptatibus eum!
      </p><br />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni vero voluptatibus facere officia tempore tempora, odit laboriosam tenetur natus ipsam. Soluta sit animi assumenda molestiae aut repellendus corporis ducimus magnam incidunt porro voluptates ab veritatis vero possimus, ex molestias aliquid non id at accusamus eligendi impedit laborum inventore voluptatum? Aliquam beatae a saepe asperiores unde doloribus officiis laboriosam suscipit voluptatem accusantium nisi odit odio voluptas error iusto nesciunt tempore veritatis voluptates, voluptate magni ipsam, necessitatibus corporis corrupti provident! Quos natus provident incidunt omnis cumque repellendus quod delectus esse sed rerum quia ut hic, asperiores id porro eum sapiente odio adipisci!</p>
    </Box>
    </Layout>
  )
}
export default About;