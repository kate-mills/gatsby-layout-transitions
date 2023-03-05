import * as React from "react"
import { TransitionLink } from "gatsby-plugin-transitions";

import Seo from "../components/seo"
import PageWrap from '../components/pagewrap'

const UsingDSG = () => (
  <PageWrap>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <TransitionLink to="/">Go back to the homepage</TransitionLink>
  </PageWrap>
)

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
