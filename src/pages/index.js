import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>I am Shilpa, I live in Pune, India</p>
    <p>I am a software developer, and I build something great in react and gatsby.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/portfolio/">Go to portfolio page.</Link>
  </Layout>
)

export default IndexPage
