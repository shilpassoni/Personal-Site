import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const projects = () => {
    <Layout>
    <SEO title="Projects" />
      <h2>Some of my projects in react</h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
}
