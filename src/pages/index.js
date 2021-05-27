import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
       <p>JAMstack</p>
       <StaticImage
        alt="JamStack"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BSUOKH5RvRTGJIwoAihcTJ5hCG4okug9eg&usqp=CAU"
      />
    </Layout>
  )
}

export default IndexPage