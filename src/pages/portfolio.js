import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "./projects"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Hi, this is shilpa again.</h1>
    <p>I am a software developer, I build react and gatsby projects.</p>
    <p>I am MCA graduate, and was a development intern with <strong>TechMahindra Ltd.</strong> in 2014. Had worked with development and testing team.</p>
    <h3>Projects</h3>
    <Projects />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
